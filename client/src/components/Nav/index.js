import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books Search List
      </a>
      <a className="navbar-brand" href="/books">
        Saved Books
      </a>

    </nav>
  );
}

export default Nav;
