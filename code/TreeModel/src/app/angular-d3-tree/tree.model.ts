import * as d3 from 'd3';
import { D3TreeComponent } from './d3-tree.component';
import { rootRenderNodes } from '@angular/core/src/view';

/* based on http://bl.ocks.org/robschmuecker/7880033 */
export class TreeModel {

  treeLayout: any;
  svg: any;
  gLink: any;
  gNode: any;
  root: any;

  treeData: any;

  dx = 10;
  dy = 120;

  height: number;
  width: number;
  margin: any = { top: 200, bottom: 90, left: 100, right: 90};
  duration = 750;
  nodeWidth = 1;
  nodeHeight = 1;
  nodeRadius = 5;
  horizontalSeparationBetweenNodes = 1;
  verticalSeparationBetweenNodes = 1;

  addSvgToContainer(chartContainer: any) {
    const element = chartContainer.nativeElement;

    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      // .attr('viewBox', [-margin.left, -margin.top, width, dx])
      .style('font', '10px sans-serif')
      .style('user-select', 'none');

    this.gLink = this.svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5);

    this.gNode = this.svg.append('g')
      .attr('cursor', 'pointer');
  }

  createLayout() {
    this.treeLayout = d3.tree()
      .size([this.height, this.width])
      .nodeSize([this.nodeWidth + this.horizontalSeparationBetweenNodes, this.nodeHeight + this.verticalSeparationBetweenNodes])
      .separation((a, b) => a.parent === b.parent ? 20 : 40);
  }

  createTreeData(treeData: any) {
    // this.root = d3.hierarchy({name: 'hi', children: [{name: 'ho'}, {name: 'he'}]});
    this.root = d3.hierarchy(treeData);

    this.root.x0 = this.height / 2;
    this.root.y0 = 0;

    this.root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
    });
  }

  update(source) {
    function diagonal(s, d) {
      const path = `M ${s.x} ${s.y}
              C ${(s.x + d.x) / 2} ${s.y},
                ${(s.x + d.x) / 2} ${d.y},
                ${d.x} ${d.y}`;
      return path;
    }
    const tree = d3.tree().nodeSize([this.dx, this.dy]);

    const duration = d3.event && d3.event.altKey ? 2500 : 750;
    const nodes = this.root.descendants().reverse();
    const links = this.root.links().slice(1);

    // Compute the new tree layout.
    tree(this.root);

    let left = this.root;
    let right = this.root;
    this.root.eachBefore(node => {
      if (node.x < left.x) left = node;
      if (node.x > right.x) right = node;
    });

    const height = right.x - left.x + this.margin.top + this.margin.bottom;

    const transition = this.svg.transition()
        .duration(duration)
        .attr('height', height)
        .attr('viewBox', [-this.margin.left, left.x - this.margin.top, this.width, height]);
        // .tween('resize', window.ResizeObserver ? null : () => () => svg.dispatch('toggle'));

    // Update the nodes…
    const node = this.gNode.selectAll('g')
      .data(nodes, d => d.id);

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
        .attr('transform', d => `translate(${source.y0},${source.x0})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .on('click', d => {
          d.children = d.children ? null : d._children;
          this.update(d);
        });

    nodeEnter.append('circle')
        .attr('r', 2.5)
        .attr('fill', d => d._children ? '#555' : '#999');

    nodeEnter.append('text')
        .attr('dy', '0.31em')
        .attr('x', d => d._children ? -6 : 6)
        .attr('text-anchor', d => d._children ? 'end' : 'start')
        .text(d => d.data.name)
      .clone(true).lower()
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .attr('stroke', 'white');

    // Transition nodes to their new position.
    const nodeUpdate = node.merge(nodeEnter).transition(transition)
        .attr('transform', d => `translate(${d.y},${d.x})`)
        .attr('fill-opacity', 1)
        .attr('stroke-opacity', 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition(transition).remove()
        .attr('transform', d => `translate(${source.y},${source.x})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0);

    // Update the links…
    const link = this.gLink.selectAll('path.link')
      .data(links, d => d.id);

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          let o = {y: source.y0, x: source.x0};
          return diagonal(o, o);
        });
    // Transition links to their new position.
     // UPDATE
    const linkUpdate = linkEnter.merge(link);
    console.log(linkUpdate)

    // Transition back to the parent element position
    // linkUpdate.transition()
    //     .attr('d', diagonal);

    // // Remove any exiting links
    // const linkExit = link.exit().transition()
    //     .duration(duration)
    //     .attr('d', d => {
    //       const o = {x: source.x, y: source.y}
    //       return diagonal(o, o);
    //     })
    //     .remove();

    // Stash the old positions for transition.
    this.root.eachBefore(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }
}
