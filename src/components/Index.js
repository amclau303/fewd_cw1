import React from "react";
import Map from "./Map";
import useFetchData from "./useFetchData";
import DisplayHostelList from "./DisplayHostelList";

function Index() {
  return (
    <div class="container">
      <p> Index Page</p>
      <div class="col">
          <h1>Where we are</h1>
          <DisplayHostelList />
        </div>
    </div>
    
  );
}

export default Index;
