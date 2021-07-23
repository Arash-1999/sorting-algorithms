import "./Header.scss";

const Header = (props) => {
  return (
    <header>
      <button className="nav__btn" onClick={props.navHandler}>
        <span className="nav__icon"></span>
      </button>
      <div>
        <h2>Sorting Alogrithms</h2>
        <p>Data visaulization of sorting algorithms</p>
      </div>
    </header>
  );
};

export default Header;
