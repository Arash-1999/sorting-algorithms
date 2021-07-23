import React, { useRef, useEffect } from "react";

// react components
import Button from "./../Button/Button.js";

// sorting and rndering chart modules
import { draw } from "./render";
import { insertionSort, bubbleSort, mergeSort, heapSort, quickSort } from "./sorts";

const Chart = (props) => {
  const mySvg = useRef();

  useEffect(() => {
    draw(mySvg.current, props.list);
  });
  
  const sort = () => {
    let arr = [...props.list];

    switch(props.type) {
      case "insertion-sort":
        insertionSort(arr, mySvg.current);
        break;
      case "bubble-sort":
        bubbleSort(arr, mySvg.current);
        break;
      case "merge-sort":
        mergeSort(arr, 0, arr.length - 1, mySvg.current);
        break;
      case "heap-sort":
        heapSort(arr, mySvg.current);
        break;
      case "quick-sort":
        quickSort(arr, 0, arr.length - 1, mySvg.current);
        break;
      default:
        props.list.sort();
        break;
    };
  };
  
  return (
    <section className="chart">
      <Button handleClick={sort}>start sorting</Button>
      <svg ref={mySvg}></svg>
    </section>
  );
};

export default Chart;
