import { useState, useEffect } from "react";

const BackendUseEffect = () => {
  const [backendData, setBackendData] = useState("posts");

  const [items, setItems] = useState([]);

  //https://jsonplaceholder.typicode.com/

  //create side effects whenever something happens
  // Everything inside the useEffect arrow function will be executed everytime our application renders
  // useEffect(() => {
  //   console.log("Render");
  // });

  // To run the useeffect everytime we do something with the useState we can pass an array as the second parameter to our useeffect
  // useEffect(() => {
  //   console.log("Render");
  // }, [backendData]);

  //so now say we want to query the jsonplaceholder api when ever the use effect is ran and the usestate is triggered

  // let's set the value to some form of state

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${backendData}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }),
    [backendData];

  return (
    <>
      <div className="p-16">
        <button
          onClick={() => setBackendData("posts")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Posts
        </button>
        <button
          onClick={() => setBackendData("users")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Users
        </button>
        <button
          onClick={() => setBackendData("comments")}
          className="border border-slate-500 mr-4 hover:bg-slate-500 hover:text-white rounded-md text-black px-3 py-2 w-32 h-14"
        >
          Comments
        </button>
      </div>
      <h1 className="text-3xl font-semibold capitalize pl-12">{backendData}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
};

export default BackendUseEffect;
