
import * as d3 from 'd3';

/* based on http://bl.ocks.org/robschmuecker/7880033 */
export class TreeModel {
  root: any;
  treeLayout: any;
  svg: any;

  treeData: any;

  height: number;
  width: number;
  margin: any = { top: 200, bottom: 90, left: 100, right: 90};
  duration: number = 750;
  nodeWidth: number = 1;
  nodeHeight: number = 1;
  nodeRadius: number = 5;
  horizontalSeparationBetweenNodes: number = 1;
  verticalSeparationBetweenNodes: number = 1;
  nodeTextDistanceY: string = '-5px';
  nodeTextDistanceX: number = 5;


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
      d3.event.transform;
      d3.select('g').attr('transform', d3.event.transform);
    }
  }

  createLayout() {
    this.treeLayout = d3.tree()
      .size([this.height, this.width])
      .nodeSize([this.nodeWidth + this.horizontalSeparationBetweenNodes, this.nodeHeight + this.verticalSeparationBetweenNodes])
      .separation((a, b) => {return a.parent == b.parent ? 20 : 40});
  }

  createTreeData(treeData: any) {
    this.root = d3.hierarchy(treeData);
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;

    this.root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
    });
    this.root.children.map((d) => this.collapse(d));
  }

  collapse(d) {
    if (d.children) {
      d._children = d.children
      d._children.map((d) => this.collapse(d));
      d.children = null
    }
  }
  expand(d) {
    if (d._children) {
      d.children = d._children
      d.children.map((d) => this.expand(d));
      d.children = null
    }
  }
  expandAndFixHeight(d, newParent) {
    d.height = newParent.height - 1;
    d.depth = newParent.depth + 1;

    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    if (d.children) {
      d.children.map((child) => this.expandAndFixHeight(child, d));
    }
  }
  update(source) {
    const treeData = this.treeLayout(this.root);
    this.setNodes(source, treeData);
    this.setLinks(source, treeData);
  }

  setNodes(source: any, treeData: any) {
    const nodes = treeData.descendants();
    const treeModel = this;

    nodes.forEach(function(d) { d.y = d.depth * 180});

    const node = this.svg.selectAll('g.node')
        .data(nodes, function(d) {return d.id || (d.id = ++this.i); });

    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function(d) {
            return 'translate(' + source.y0 + ',' + source.x0 + ')';
        });

    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', function(d) {
            return d._children ? 'lightsteelblue' : '#fff';
        });

    nodeEnter.append('text')
        .attr('dy', this.nodeTextDistanceY )
        .attr('x', function(d) {
            return d.children || d._children ? -1 : 1;
        })
        .attr('text-anchor', function(d) {
            return d.children || d._children ? 'end' : 'start';
        })
        .text(function(d) {
              return d.data.name || d.data.description || d.id;
            });

    nodeEnter.append('circle')
        .attr('class', 'ghostCircle')
        .attr('r', this.nodeRadius+2)
        .attr('opacity', 0.2) // change this to zero to hide the target area
        .style('fill', 'darkblue')
        .attr('pointer-events', 'mouseover');
    const nodeUpdate = nodeEnter.merge(node);

    nodeUpdate.transition()
      // .duration(this.duration)
      .duration(0)
      .attr('transform', function(d) {
          return 'translate(' + d.y + ',' + d.x + ')';
       });

    nodeUpdate.select('circle.node')
      .attr('r', this.nodeRadius)
      .style('fill', function(d) {
          return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    const nodeExit = node.exit().transition()
        .duration(this.duration)
        .attr('transform', function(d) {
            return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    nodeEnter
      .on('click', function(d) {
        treeModel.click(d, this);
        treeModel.update(d); });
    nodeEnter
      .on('mouseover', d => this.nodeHover(d));
  }


  setLinks( source: any, treeData: any) {
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
  nodeHover(d) {
    // console.log(d);
  }

  // events
  nodeselected(node) {}

}
