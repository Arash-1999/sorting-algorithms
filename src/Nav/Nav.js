import "./Nav.scss";

const Nav = (props) => {

  return (
    <nav className={props.open ? "nav nav--open" : "nav"}>
      <select 
        className="nav__selection" 
        name="method" 
        value={props.type}
        onChange={props.selectMethod}
      >
        <option value="insertion-sort">Insertion Sort</option>
        <option value="bubble-sort">Bubble Sort</option>
        <option value="merge-sort">Merge Sort</option>
        <option value="heap-sort">Heap Sort</option>
        <option value="quick-sort">Quick Sort</option>
      </select>
      <button onClick={props.genNew}>Generate New</button>
      {props.description}
    </nav>
  );
};

export default Nav;
