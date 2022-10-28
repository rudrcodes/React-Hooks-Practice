import React, { useEffect, useState ,useMemo} from "react";
import axios from "axios";

export const UseMemoComp = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        //   console.log(response.data[0])
      });
    // console.log(data);
  }, []);
  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) longestName = currentName;
    }
    console.log("Computed");
    return longestName;
  };
  const getLongestName = useMemo(() => findLongestName(data), [data]);
  return (
    <>
      <h1>name</h1>
      <h3>{getLongestName}</h3>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <div>{String(toggle)}</div>}
      {/* <h2>{JSON.stringify(data)}</h2> */}
      {/* <h2>{data.name}</h2> */}
    </>
  );
};
