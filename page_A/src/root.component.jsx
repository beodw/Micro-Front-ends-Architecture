import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";
export default function Root(props) {
  const [storeState, setLocalValueOfStore] = useState(window.store.getState());

  useEffect(()=> window.store.subscribe(()=> setLocalValueOfStore(window.store.getState())), []);

  return (
    <BrowserRouter>
      <div>
        <section>{props.name} is mounted!</section>
        <Link to={"page_B"}>link to page_b</Link>
        <button onClick={() => window.store.dispatch(window.actions.increment())}>increment {storeState.counter.value}</button>
      </div>
    </BrowserRouter>
  );
}
