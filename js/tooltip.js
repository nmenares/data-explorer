class Tooltip {
  constructor(div) {
    const vis = this;

    vis.div = div;

    vis.div.attr("class", "ei-tooltip")
        .style("display", "none");
  }

  update(text, left, top) {
    const vis = this;

    vis.div.html(text);

    vis.div.style("top", `${top}px`)
      .style("left", `${left}px`)
      .style("display", "block");
  }

  hide() {
    const vis = this;

    vis.div.style("display", "none");
  }
}
