import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const Inc = () => {
    setNumber(number + 1);
  };

  const Dec = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card w-25 p-4 mx-auto mt-5 bg-light">
            <h3>{number}</h3>
            <div className="col">
              <button className="btn btn-danger m-2" onClick={Inc}>
                INC
              </button>
              <button className="btn btn-success m-2" onClick={Dec}>
                DEC
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
