
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent>
          <h2>This is the content of my website.</h2>
        </Parent>
    </div>
  )
}

export default App
