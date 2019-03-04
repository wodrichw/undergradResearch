import * as d3 from 'd3';
import { interval, Subject } from 'rxjs';
import {takeUntil, delay} from 'rxjs/operators';
import { TreeService } from '../tree.service';

type InspectNode = {mouseDown: boolean, id: number };
export class TreeModel {
  element: any;
  root: any;
  treeLayout: any;
  svg: any;

  treeData: any;

  height: number;
  width: number;
  margin: any = { top: 200, bottom: 90, left: 100, right: 90};
  nodeRadius = 14;
  columnWidth = 80;
  columnFontScale = 1;

  iNode: any; // The inspected node

  mouseDown$ = new Subject<boolean>();
  nodeInspected: InspectNode;

  constructor(private ts: TreeService) {}

  addSvgToContainer(chartContainer: any) {
    this.element = chartContainer.nativeElement;

    this.width = this.element.offsetWidth - this.margin.left - this.margin.right;
    this.height = this.element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(this.element).append('svg')
      .attr('width', this.element.offsetWidth)
      .attr('height', this.element.offsetHeight)
      .append('g')
      .attr('transform', 'translate('
            + this.margin.left + ',' + this.margin.top + ')');

    this.setZoomBehaviour();
  }

  setZoomBehaviour() {
    const zoom = d3.zoom()
      .on('zoom', zoomed);
    const svg = d3.select('svg');

    const t = d3.zoomIdentity.translate(this.margin.left, this.margin.top);
    svg.call(zoom.transform, t);
    svg.call(zoom);
    function zoomed() {
      d3.select('g').attr('transform', d3.event.transform);
      const columnFontScale = this.__zoom.k < 1 ? 1 / this.__zoom.k : 1;
      d3.selectAll('text.column').style('font-size', 15 * columnFontScale);
    }
  }

  createLayout() {
    this.treeLayout = d3.tree()
      .size([this.height, this.width])
      .nodeSize([2, 2])
      .separation((a, b) => a.parent === b.parent ? 20 : 40);
  }

  createTreeData(treeData: any) {
    this.root = d3.hierarchy(treeData);
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;
  }

  update() {
    const prevTreeData = this.treeData;
    this.treeData = this.treeLayout(this.root);
    this.setColumns(this.treeData);
    this.setNodes(this.treeData);
    this.setLinks(this.treeData);
    this.setNodes(this.treeData);
  }

  setColumns(treeData) {
    this.svg.selectAll('text.column').remove();
    const nodes = treeData.descendants();
    let depth = 0;
    let top = 0;
    nodes.forEach(n => {
      depth = Math.max(n.depth, depth);
      top = Math.min(n.x, top);
    });
    for (let i = 0; i <= depth; i++) {
      this.svg.append('text')
                .attr('class', 'column')
                .attr('y', top - 30)
                .attr('x', i * this.columnWidth)
                .text(String(i + 2))
                .style('font-size', 15 * this.columnFontScale);
    }
  }

  setNodes(treeData: any) {
    const nodes = treeData.descendants();
    const treeModel = this;

    nodes.forEach((d, i) => {
      d.y = d.depth * this.columnWidth;
      d.data.id = i
    });

    const node = this.svg.selectAll('g.node')
        .data(nodes, d => d.id);

    const nodeEnter = node.enter().append('g')
        .attr('class', 'node');

    nodeEnter.append('text')
        .attr('dx', -19)
        .attr('dy', 5)
        .attr('text-anchor', 'end')
        .text(d => d.data.name);

    nodeEnter.append('circle')
        .attr('r', this.nodeRadius)
        .style('fill', '#4c516d')
        .attr('class', d => 'circle' + d.data.id);

    nodeEnter.merge(node)
      .attr('transform', d => 'translate(' + d.y + ',' + d.x + ')');

    node.exit().remove();

    // Color inspected node
    if (this.nodeInspected != null) {
      d3.select('circle.circle' + this.nodeInspected.id)
        .style('fill', '#d9534f')
        .attr('r', this.nodeRadius);
    }

    const holdStart = d => {
      this.mouseDown$.next(true);
      interval(22)
        .pipe(takeUntil(this.mouseDown$), delay(80))
        .subscribe(t => {
          if (t === 10) {
            this.iNode = d;
            this.setInspectedNode();
          } else {
            d3.selectAll('circle.circle' + d.data.id)
              .attr('r', this.nodeRadius + t * 2);
          }
      }, null, () => {
        d3.selectAll('circle')
          .attr('r', this.nodeRadius);
      });
    };
    const holdEnd = d => {
      if (this.nodeInspected != null && this.nodeInspected.mouseDown === true) {
        this.mouseDown$.next(false);
        this.nodeInspected.mouseDown = false;
        treeModel.update();
        return;
      }
      this.mouseDown$.next(false);
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else if (d._children) {
        d.children = d._children;
        d._children = null;
      } else {
        this.expandTreeEvent(d);
      }
      treeModel.update();
      d3.selectAll('circle')
        .attr('r', this.nodeRadius);
    };
    nodeEnter
      .on('contextmenu', () => d3.event.preventDefault())
      .on('mousedown', holdStart)
      .on('touchstart', holdStart)
      .on('click', holdEnd);
  }

  setLinks(treeData: any) {
    // adds the links between the nodes
    this.svg.selectAll('line').remove();
    this.svg.selectAll('path.link')
        .data( treeData.descendants().slice(1))
        .enter().append('line')
        .attr('x1', (d) => d.y)
        .attr('x2', (d) => d.parent.y)
        .attr('y1', (d) => d.x)
        .attr('y2', (d) => d.parent.x)
        .attr('stroke-width', 1)
        .attr('stroke', 'grey');
  }

  setInspectedNode(node?) {
    if (node != null) {
      this.iNode = node;
    }
    if (this.iNode == null) {
      // initialize inspected node to root
      this.iNode = this.treeData.descendants()[0];
      this.ts.setINodeSubj(this.iNode);
    } else {
      // Callback node inspected
      this.inspectNodeEvent(this.iNode);
    }

    d3.selectAll('circle')
      .style('fill', '#4c516d');
    d3.select('circle.circle' + this.iNode.data.id)
      .style('fill', '#d9534f')
      .attr('r', this.nodeRadius);
    this.nodeInspected = {mouseDown: true, id: this.iNode.data.id};
    this.mouseDown$.next(false);
  }
  searchForNode(key: {name: string, depth: number}) {
    const result = this.treeData.descendants().filter(n => n.data.name === key.name && n.depth === key.depth);
    return  result.length > 0 ? result[0] : result;
  }

  // events
  expandTreeEvent(node) {}
  inspectNodeEvent(node) {}

}
