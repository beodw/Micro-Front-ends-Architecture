import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
      <div>
        This is the root app which will render microfrnotends based on the url.
        <Link to={"page_A"}>link to page A</Link>
      </div>
    </BrowserRouter>
  );
}

export default Home;
