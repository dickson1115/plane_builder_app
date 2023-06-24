import React from "react";
import NavBar from "../NavigationBar/NavigationBar";
import Content from "./Content";
import demoVideo from "../../Videos/demo_1080p.mp4";
function Tutorial() {
  return (
    <Content>
      <div> Tutorial
        {/* <NavBar/> */}
            {/* <section>
    
              <video autoPlay muted loop width= "80%">
                <source src={demoVideo} type="video/mp4" />
              </video>
            </section> */}

      </div>
    </Content>
  );
}

export default Tutorial;
