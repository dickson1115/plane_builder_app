import React from "react";
import styles from "./Home.module.css";
import NavBar from "../Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import demoVideo from "../../demo_1080p.mp4";
const Home = () => {
  return (
    <div className={styles.home}>
      {/* <NavBar className={styles.navBar} /> */}
      <div className={styles.background_image}>
        <div className={styles.layer}>
          <div className={styles.center}>
            <h1>Quick Sketch Your Plane Design</h1>
            <h5>
              Create a rough draft of a plane's design with a simple stability
              analysis
            </h5>
          </div>
        </div>
      </div>
      <Container>
        <Row className="my-5">
          <Col>
            <section>
              <h1>Introduction</h1>
              <h5>
                A simple two-dimensional building board with default airplane modules allows
                users of all ages to create their own aircraft design. The
                building panel feature with basic toolings provides a convenient
                building board for all users.
              </h5>
            </section>
          </Col>
        </Row>

        <Row className="my-5">
          <Col>
            <section>
              <h1>Up Coming Feature</h1>
              <h5>
                Data Inputting - The building board will provide input space for
                user to enter their airplane's varibles like wing's length,
                aspect ratio, X, Y, Z location and etc.
              </h5>
              <h5>
                Relational modules and data - The input variables and the
                modules on the building board will be linked, variables like
                positions and size of the module will change accordingly across
                all three viewing angles
              </h5>
              <h5>
                Aircraft stability analysis - Using the positions and sizing of the plane's modules from the building board and the variables provided by the users, the application will generate a rough estimated stability analysis. 
              </h5>
              <h5>
                Posting design - User could post their design onto the explore page and share to the globe.
              </h5>
              <h5>
                Custom Modules - Allowing users to add their customed plane modules to the page in svg format
              </h5>
            </section>
          </Col>
        </Row>

        <Row className="my-5">

          <Col>
            <section>
              <h1>Demo Video</h1>
              <video autoPlay muted loop className={styles.myVideo}>
                <source src={demoVideo} type="video/mp4" />
                {/* <div className={styles.layer}>

    //     </div> */}
              </video>
            </section>
          </Col>

        </Row>
      </Container>
    </div>

    // <div className={styles.content}>
    //   <video autoPlay muted loop className={styles.myVideo}>
    //     <source src={demoVideo} type="video/mp4" />
    //     {/* <div className={styles.layer}>

    //     </div> */}
    //   </video>
    // </div>
  );
};

export default Home;
