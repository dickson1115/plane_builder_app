import React from "react";
import styles from "./Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import demoVideo from "../../../Videos/demo_1080p.mp4";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import AuthContext from "../../../AuthContext/AuthContext";

// import NavBar from "../../NavigationBar/NavigationBar";
const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className={styles.home}>
      {/* <NavBar className={styles.navBar} /> */}
      <div className={styles.background_image}>
        <div className={styles.layer}>
          <div className={styles.center}>
            <h1 className="bold">Quick Sketch Your Plane Design</h1>
            <h3>
              Create a rough draft of a plane's design with a simple stability
              analysis
            </h3>
          </div>
        </div>
      </div>
      <Container className={styles.container + " "}>
        <Row className={styles.rightGradient + " py-5"}>
          <Col className="me-0">
            <h1 className="bold">Pull Resize and Build</h1>
            <h4>
              A simple two-dimensional building application with default
              airplane modules allows users of all ages to create their own
              aircraft.
            </h4>
          </Col>
          <Col sm={4} className={styles.image + " ms-5"}>
            <div className={styles.imageWrapper}>
              <img src={authContext.images["image_2.avif"]} width="500" />
            </div>
          </Col>
        </Row>

        <Row className={styles.leftGradient + " py-5"}>
        <Col  sm={4} className={styles.image + " me-5"}>
            <div className={styles.imageWrapper}>
              <img src={authContext.images["image_3.avif"]} width="500" />
            </div>
          </Col>
          <Col className="ms-0">
            <h1 className="bold">Simple Editing Tools</h1>
            <h4>
              Having a simple editing UI along with basic functions creates a
              user-friendly environment.
            </h4>
          </Col>
        </Row>

        <Row className={styles.rightGradient + " py-5"}>
        <Col className="me-0">
            <h1 className="bold">Up Coming Feature</h1>
            <h4>
              Data Inputting - The building board will provide input space for
              user to enter their airplane's varibles like wing's length, aspect
              ratio, X, Y, Z location and etc.
            </h4>
            <h4>
              Relational modules and data - The input variables and the modules
              on the building board will be linked, variables like positions and
              size of the module will change accordingly across all three
              viewing angles
            </h4>
            <h4>
              Aircraft stability analysis - Using the positions and sizing of
              the plane's modules from the building board and the variables
              provided by the users, the application will generate a rough
              estimated stability analysis.
            </h4>
            <h4>
              Posting design - User could post their design onto the explore
              page and share to the globe.
            </h4>
            <h4>
              Custom Modules - Allowing users to add their customed plane
              modules to the page in svg format
            </h4>
          </Col>
          <Col  sm={4} className={styles.image + " ms-5"}>
            <div className={styles.imageWrapper}>
              <img src={authContext.images["image_4.avif"]} />
            </div>
          </Col>
        </Row>

        <Row className="my-5">
          <Col >
              <video autoPlay muted loop className={styles.myVideo}>
                <source src={demoVideo} type="video/mp4" />
              </video>
          </Col>
          <Col sm={4} className={styles.image + " ms-5"}>
        <h1 className="bold">Demo Video</h1>
            <h4>
            Demonstrating the progress of constructing a customized plane using the modules applied. Also, showing the usage of some editing features.
            </h4>
          </Col>
        </Row>
      </Container>
      {/* <Footer items={["1","2"]}/> */}
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
