class Tooltip {
  constructor(div, padding) {
    const vis = this;

    vis.div = div;
    vis.padding = padding || 10;

    vis.div.attr("class", "ei-tooltip")
        .style("display", "none");
  }

  updateText(text) {
    const vis = this;

    vis.div.html(text);
  }

  updatePosition(left, top, orient = 'top') {
    const vis = this;

    vis.div.style("display", "block");

    const tooltipRect = vis.div.node().getBoundingClientRect();
    const leftOffset = orient === 'top' ? 0 : tooltipRect.width/2;
    const topOffset = orient === 'top' ? -tooltipRect.height/2 - vis.padding : 0;

    vis.div.style("top", `${top + topOffset}px`)
      .style("left", `${left + leftOffset}px`)
      .style("display", "block");
  }

  hide() {
    const vis = this;

    vis.div.style("display", "none");
  }
}
