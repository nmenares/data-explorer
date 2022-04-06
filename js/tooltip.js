class Tooltip {
  constructor(div, padding) {
    const vis = this;

    vis.div = div;
    vis.padding = padding || 10;

    vis.div.attr("class", "ei-tooltip")
        .style("display", "none");
  }

  update(text, left, top) {
    const vis = this;

    vis.div.html(text);

    vis.div.style("top", `${top}px`)
      .style("left", `${left + vis.padding}px`)
      .style("display", "block");
  }

  hide() {
    const vis = this;

    vis.div.style("display", "none");
  }
}
