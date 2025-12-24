import React from "react";
import { Data, Data1 } from "../../App";

function Code3() {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    {name} {age}
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
      <br />
      <Data1.Consumer>
        {(age) => {
          return <h1>My age is {age}</h1>;
        }}
      </Data1.Consumer>
    </div>
  );
}

export default Code3;
