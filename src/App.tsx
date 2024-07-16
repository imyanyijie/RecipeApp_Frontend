import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Item from "./component/Items";

function App() {
  return (
    <>
      <header>
        <h2>Smart Recipe App</h2>
        <Link to="/">Items</Link>
        <Link to="/recipes">Recipes</Link>
        {/* <div className="search-section">
          <form className="item-form">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Ex. Apple "
            />
          </form>
          <button id="search" value="Search" form="location-form">
            Search
          </button>
        </div> */}
      </header>
      <Outlet />
      {/* <main>
        <Item />
      </main> */}
    </>
  );
}

export default App;
