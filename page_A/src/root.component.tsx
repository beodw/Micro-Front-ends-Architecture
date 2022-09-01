import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
export default function Root(props) {
  return (
    <BrowserRouter>
      <div>
        <section>{props.name} is mounted!</section>
        <Link to={"page_B"}>link to page_b</Link>
      </div>
    </BrowserRouter>
  );
}
