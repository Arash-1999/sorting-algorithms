import { select, scaleLinear} from "d3";

const draw = (ref, arr) => {
  // get user scale
  let scale = window.innerHeight/ window.innerWidth;
  // size for svg element
  let w = 500,
    h = w * scale,
    pad = 20,
    size = (w - (2 * pad)) / arr.length;
  // get svg element
  const svg = select(ref);
  // set width and height
  svg
    .attr("viewBox", [0, 0, w, h]);
  // set scales
  let yScale = scaleLinear()
    .domain([100, 1000])
    .range([pad, h - 2 * pad]);
  // rendering data
  svg
    .selectAll("rect")
    .data(arr)
    .join("rect")
    .attr("fill", "#343434")
    .attr("stroke", "#008000")
    .attr("stroke-width", .3)
    .attr("width", size - 2)
    .attr("height", yScale)
    .attr("x", (d, i) => (pad + i * size))
    .attr("y", d => h - yScale(d) - pad);
};

export { draw };
