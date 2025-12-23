import React, { useState } from "react";

function Switcher() {
  const[sw, setSw] = useState(false);

  const changeSwithch = () => {
    return setSw((s) => !s)
  }

  return (
    <div>
    {/* //key identity Change identity → reset component */}
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input type="text" />
      <button onClick={() => setSw((s) => !s)}>Switch</button> 

    </div>
  );
}

export default Switcher;
