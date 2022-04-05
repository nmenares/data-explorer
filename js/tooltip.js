class Tooltip {
  constructor(div) {
    const vis = this;

    vis.div = div;

    vis.div.attr("class", "tooltip")
        .style("display", "none");
  }

  update(text, top, left) {
    vis.div.html(text);

    vis.div.style("top", `${top}px`)
      .style("left", `${left}px`);
  }
}
