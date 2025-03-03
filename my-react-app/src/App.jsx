import React from "react";
import ProfileCard from "./components/profileCard";

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard 
        name="yugm chaudhary" 
        bio="A passionate web developer and tech enthusiast." 
        image={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
      />
    </div>
  );
};

export default App;
