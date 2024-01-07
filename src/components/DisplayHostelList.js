import React from "react";
import useFetchData from "./useFetchData";
import DisplayHostelItems from "./DisplayHostelItems";

const DisplayHostelList = () => {
  const { status, hostels } = useFetchData();
  if (status === "fetched")
    return (
      <div>
        {/* code to display food items here */}
        <DisplayHostelItems items = {hostels}/>
      </div>
    );
};

export default DisplayHostelList;