
import * as d3 from 'd3';

/* based on http://bl.ocks.org/robschmuecker/7880033 */
export class TreeModel {
  root: any;
  treeLayout: any;
  svg: any;

  treeData: any;
  treeState: any; // saves nodes collapsed vs. not collapsed

  height: number;
  width: number;
  margin: any = { top: 200, bottom: 90, left: 100, right: 90};
  nodeRadius: number = 5;


  selectedNodeByClick: any;
  previousClickedDomNode: any;

  addSvgToContainer(chartContainer: any) {
    const element = chartContainer.nativeElement;

    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      .append('g')
      .attr('transform', 'translate('
            + this.margin.left + ',' + this.margin.top + ')');

    this.setZoomBehaviour();
  }

  setZoomBehaviour() {
    const zoom = d3.zoom().on('zoom', zoomed );
    const svg = d3.select('svg');

    const t = d3.zoomIdentity.translate(this.margin.left, this.margin.top);
    svg.call(zoom.transform, t);
    svg.call(zoom);
    function zoomed() {
      d3.select('g').attr('transform', d3.event.transform);
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

  update(source) {
    const treeData = this.treeLayout(this.root);
    this.setColumns(treeData);
    this.setNodes(source, treeData);
    this.setLinks(treeData);
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
                .attr('x', i * 180)
                .text(String(i + 2));
    }
  }

  setNodes(source: any, treeData: any) {
    const nodes = treeData.descendants();
    const treeModel = this;

    nodes.forEach(d => d.y = d.depth * 180);

    const node = this.svg.selectAll('g.node')
        .data(nodes, function(d) {return d.id || (d.id = ++this.i); });

    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => {
            return 'translate(' + source.y0 + ',' + source.x0 + ')';
        });

    nodeEnter.append('text')
        .attr('dy', -5)
        .attr('text-anchor', 'end')
        .text(d => d.data.name);

    nodeEnter.append('circle')
        .attr('class', 'ghostCircle')
        .attr('r', this.nodeRadius)
        .style('fill', 'lightsteelblue')
        .attr('pointer-events', 'mouseover');
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      .duration(0)
      .attr('transform', d => {
          return 'translate(' + d.y + ',' + d.x + ')';
       });

    nodeUpdate.select('circle.node')
      .attr('r', this.nodeRadius)
      .style('fill', d => {
          return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    const nodeExit = node.exit().transition()
        .duration(0)
        .attr('transform', function(d) {
            return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 0);

    // Store the old positions for transition.
    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 0);

    nodeEnter
      .on('click', function(d) {
        treeModel.click(d, this);
        treeModel.update(d); });
    nodeEnter
      .on('mouseover', d => this.nodeHover(d));
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

  click(d, domNode) {
    console.log(d, domNode)
    if (this.previousClickedDomNode){
      this.previousClickedDomNode.classList.remove('selected');
    }
    if (d.children) {
        d._children = d.children;
        d.children = null;
        domNode.classList.remove('selected');
    } else {
      d.children = d._children;
      d._children = null;
      domNode.classList.add('selected');
    }
    this.selectedNodeByClick = d;
    this.previousClickedDomNode = domNode;
    this.nodeselected(d);
  }

  // events
  nodeselected(node) {}
  nodeHover(d) { }

}
