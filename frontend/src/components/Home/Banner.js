import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { UPDATE_TITLE_SEARCH_TERM } from "../../constants/actionTypes";

const Banner = (props) => {
  const [state, setState] = useState({ visible: true });
  // const { get, setGet } = useState({ visible: false });
  const searchHandler = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    props.dispatch({
      type: UPDATE_TITLE_SEARCH_TERM,
      payload: { titleSearchTerm: value },
    });
  };
  const SearchBox = () => {
    return (
      <div className="d-flex flex-row justify-content-center align-items-baseline">
        <span id="get-part">A place to get</span>
        <form className="col-7">
          <fieldset className="form-group"></fieldset>
          <input
            className="form-control"
            id="search-box"
            type="search"
            placeholder="What is it that you truly desire?"
            onChange={searchHandler}
          />
        </form>
        <span> the cool stuff.</span>
      </div>
    );
  };
  const Get = () => {
    return (
      <div>
        A Place to
        <button
          className="get"
          id="get-part"
          onClick={() => setState({ visible: false })}
        >
          get
        </button>
        the cool stuff
      </div>
    );
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        {state.visible ? <Get /> : <SearchBox />}
      </div>
    </div>
  );
};

export default connect()(Banner);
