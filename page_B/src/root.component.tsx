import { Link, BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <div>
        <section>{props.name} is mounted!</section>
        <Link to={"page_A"}>link to page A</Link>
        <br />
        <Link to={"/"}>link to home</Link>
      </div>
    </BrowserRouter>
  );
}
