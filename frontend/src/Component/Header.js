import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Header.css"
import img from "./saudiV2.jpg";





export default function Header() {
<<<<<<< HEAD:src/Component/Header.js
  const [showVid, setShowVid] = useState(false)
  const sratr = () => {

    setShowVid(!showVid)
  }

  return (
    <div className="background">
      <h1>Welcome to our page</h1>
      <hr />
      <button onClick={() => { sratr() }}>  ▶  </button>

      {showVid ? <div>
        <ReactPlayer className="ved"
          url="https://www.youtube.com/watch?v=tQTcbTq9f-k"
        />
      </div> : ""}

    </div>
  );
=======
    return (
        <div>
            
            <h1>  Header:شغل لولو الحلو </h1>

        </div>
    )
>>>>>>> 5bb74fb8ed26610c2d7573b0dd5115b94f82379c:frontend/src/Component/Header.js
}
