class Tooltip {
  constructor(div, padding) {
    const vis = this;

    vis.div = div;
    vis.padding = padding || 20;

    vis.div.attr("class", "ei-tooltip")
        .style("display", "none");
  }

  // updateText(text) {
  //   const vis = this;

  //   vis.div.html(text);
  // }

  update(text, left, top, orient = 'top') {
    const vis = this;

    vis.div.style("display", "block")
      .html(text);

    const tooltipRect = vis.div.node().getBoundingClientRect();
    const leftOffset = orient === 'top' ? -tooltipRect.width/2  + vis.padding : vis.padding;
    const topOffset = orient === 'top' ? -tooltipRect.height - vis.padding : 0;
    console.log(vis.padding);

    vis.div.style("top", `${top + topOffset}px`)
      .style("left", `${left + leftOffset}px`);
  }

  hide() {
    const vis = this;

    vis.div.style("display", "none");
  }
}
