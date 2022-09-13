import { Link, BrowserRouter } from "react-router-dom";
import {useState, useEffect} from "react";

export default function Root(props) {
  const [storeState, setLocalValueOfStore] = useState(window.store.getState());

  useEffect(()=> window.store.subscribe(()=> setLocalValueOfStore(window.store.getState())), []);

  return (
    <BrowserRouter>
      <div>
        <section>{props.name} is mounted!</section>
        <Link to={"page_A"}>link to page A</Link>
        <br />
        <Link to={"/"}>link to home</Link>
        <button onClick={()=> window.store.dispatch(window.actions.decrement())}>decrement {storeState.counter.value}</button>
      </div>
    </BrowserRouter>
  );
}
