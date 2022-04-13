import React, { useState } from "react";

export default function Welcome() {
  const [counter, setCounter] = useState(0);
  const Increse = () => {
    setCounter(counter + 1);
  };
  var course = {
    id: "1",
    name: "JS",
  };

  return (
    <div>
      <h1>
        {course.id} và {course.name}
      </h1>
      <button onClick={() => Increse()}>Click on change!</button>
    </div>
  );
}
