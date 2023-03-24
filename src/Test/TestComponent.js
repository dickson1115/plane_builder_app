import React, { useState, useRef, useEffect } from 'react';
import styles from './TestComponent.module.css';
// import InteractableItem from './Components/Builder/BuilderCanvas/InteractableItem/InteractableItem';
// import BuilderCanvas from './Components/Builder/BuilderCanvas/BuilderCanvas';
const TestComponent = () => {

  // const divRef = useRef(null);
  // const itemRef = useRef(null);
  // const [list, setList] = useState(null)
  // function handleButtonClick() {
  //   console.log(divRef.current.attributes.getNamedItem("width"))
  //   const newElement = React.createElement(InteractableItem,
  //     {
  //       width: divRef.current.attributes.getNamedItem("width"),
  //       height: divRef.current.attributes.getNamedItem("height"),
  //       viewBox: divRef.current.attributes.getNamedItem("viewBox"),
  //       xmlns: divRef.current.attributes.getNamedItem("xmlns"),
  //     }
  //     , {children: divRef.current.innerHTML })
  //   console.log(divRef.current.tagName)
  //   setList(newElement)
    // divNode.style.backgroundColor = "red";
    // // console.log(divRef.current)
    // // console.log(React.cloneElement(divRef.current))
    // setList([...list, divRef.current])
  // }
  // useEffect(() => {
  //   console.log(itemRef)    
  // },[itemRef])

  // function handleOnChange(event) {
  //   console.log(event.target)
  // }
  // useEffect(() => {

  // },[itemRef])
  return (
    <div show={true}  className={"modal fade " + styles.modal} id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered d-flex justify-content-center">
        <div className="modal-content " style={{ borderRadius: "1rem" }}>
          <section className={"gradient-custom "}>
            <div className="container p-0">
              <div>
                <div>
                  <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                    <div className="card-body p-5 text-center">

                      <div className="mb-md-4 pb-1">
                        <h2 className="mb-2 text-uppercase" style={{ fontFamily: "BNRegular" }} > Login</h2>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                        <div className="form-outline form-white mb-4">
                          <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                          <label className="form-label h5" htmlFor="typeEmailX" style={{ fontFamily: "BNRegular" }} >Email</label>
                        </div>

                        <div className="form-outline form-white mb-4">
                          <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                          <label className="form-label h5" htmlFor="typePasswordX" style={{ fontFamily: "BNRegular" }} >Password</label>
                        </div>

                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                        <button className="btn btn-outline-light btn-lg px-5" type="submit" style={{ fontFamily: "BNRegular" }} >Login</button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <button href="#!" className="btn btn-lg text-white"><i className="bi bi-facebook p-2"></i></button>
                          <button href="#!" className="btn btn-lg text-white"><i className="bi bi-twitter p-2"></i></button>
                          <button href="#!" className="btn btn-lg text-white"><i className="bi bi-google p-2"></i></button>
                        </div>

                      </div>

                      <div>
                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div >
    </div >

  );
};



export default TestComponent
// import React, { useState, useEffect, useMemo, useCallback } from "react";
// import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
// import exampleImg from "./medium-image.jpg";
// function TestComponent(args) {
//     const src = exampleImg;
//     const alt = "example";
//     const backgroundColor = "black";
//     const scaleUp = true;
//     const zoomFactor = 8;

//     const [container, setContainer] = useState(null);

//     const [containerWidth, setContainerWidth] = useState(0);
//     const [containerHeight, setContainerHeight] = useState(0);

//     const [imageNaturalWidth, setImageNaturalWidth] = useState(0);
//     const [imageNaturalHeight, setImageNaturalHeight] = useState(0);

//     // const { setTransform } = useControls();
//     const imageScale = useMemo(() => {
//         if (
//             containerWidth === 0 ||
//             containerHeight === 0 ||
//             imageNaturalWidth === 0 ||
//             imageNaturalHeight === 0
//         )
//             return 0;
//         const scale = Math.min(
//             containerWidth / imageNaturalWidth,
//             containerHeight / imageNaturalHeight,
//         );
//         console.log(scale)

//         return scaleUp ? scale : Math.max(scale, 1);
//     }, [
//         scaleUp,
//         containerWidth,
//         containerHeight,
//         imageNaturalWidth,
//         imageNaturalHeight,
//     ]);
//     // const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
//     //     <>
//     //         <button onClick={() => zoomIn()}>+</button>
//     //         <button onClick={() => zoomOut()}>-</button>
//     //         <button onClick={() => resetTransform()}>x</button>
//     //     </>
//     // );
//     const handleResize = useCallback(() => {
//         console.log("container" + container);
//         if (container !== null) {
//             const rect = container.getBoundingClientRect();
//             // console.log(rect.width);
//             setContainerWidth(rect.width);
//             setContainerHeight(rect.height);
//         } else {
//             setContainerWidth(0);
//             setContainerHeight(0);
//         }
//     }, [container]);

//     useEffect(() => {
//         handleResize();
//         // resetTransform();
//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, [handleResize]);

//     const handleImageOnLoad = (image) => {
//         setImageNaturalWidth(image.naturalWidth);
//         setImageNaturalHeight(image.naturalHeight);
//     };

//     useEffect(() => {
//         console.log("src" + src)
//         const image = new Image();
//         image.onload = () => handleImageOnLoad(image);
//         image.src = src;
//     }, [src]);

//     return (

//         <div
//             style={{
//                 width: "100vw",
//                 height: "100vh",
//                 backgroundColor,
//             }}
//             ref={(el) => setContainer(el)}
//         >
//             {console.log("test2 " + imageScale)}

//             {imageScale > 0 && (<TransformWrapper
//                 initialScale={imageScale}
//                 minScale={imageScale}
//                 maxScale={imageScale * zoomFactor}
//                 centerOnInit
//             >

//                 {/* {
//                     (utils) => (

//                         <React.Fragment> */}
//                             {/* {console.log("test")}
//                             <Controls {...utils} /> */}
//                             <TransformComponent
//                                 key={`${containerWidth}x${containerHeight}`}
//                                 wrapperStyle={{
//                                     width: "100%",
//                                     height: "100%",
//                                 }}
//                             >
//                                 {/* <svg fill="currentColor" height={imageNaturalHeight} width={imageNaturalWidth} viewBox="0 0 30 30" style={{ backgroundColor: "red", width: { imageNaturalWidth } + "px", height: { imageNaturalHeight } + "px" }}>
//                         <path d="M22,4h-2v6c0,0.552-0.448,1-1,1h-9c-0.552,0-1-0.448-1-1V4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18  c1.105,0,2-0.895,2-2V8L22,4z M22,24H8v-6c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2V24z" />
//                         <rect height="5" width="2" x="16" y="4" />
//                     </svg> */}
//                                 <img alt={alt} src={src} />
//                                 {/* <div>test</div> */}
//                             </TransformComponent>
//                         {/* </React.Fragment>)} */}
//             </TransformWrapper>

//             )}

//         </div>

//     )
// }

// export default TestComponent