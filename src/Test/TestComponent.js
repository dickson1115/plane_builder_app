import React, { useState, useEffect } from "react";
import styles from "./TestComponent.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FormGroup, FormLabel, FormControl, Form } from "react-bootstrap";

// import InteractableItem from './Components/Builder/BuilderCanvas/InteractableItem/InteractableItem';
// import BuilderCanvas from './Components/Builder/BuilderCanvas/BuilderCanvas';
const TestComponent = () => {
  var test = 123;
  test++;
  const testFunction = () => {
    test++;
    console.log(test)
    return<div></div>;
  }
  function testFunction2() {
    test++;
    console.log("second: " + test)
  }
  return (

    <div>{testFunction2()}{test}</div>
  );
};

export default TestComponent;
