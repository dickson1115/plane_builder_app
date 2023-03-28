import React from 'react'
import styles from './SideBarExpanded.module.css'
import SvgButton from '../../SvgButton/SvgButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import * as Icon from 'react-bootstrap-icons';

function SideBarExpanded(props) {
  return (
    <nav className={styles.sideBarExpanded + " " + (props.active ? styles.active : "")}>
      <Container>
        <Row className = {styles.headerBar + " p-2"}>
          <Col className = "p-0"/>
          <Col className = "p-0">
            <h4 className = "mb-0 bold" >{props.header}</h4>
          </Col>
          <Col className = "p-0 d-flex justify-content-end">
            <SvgButton className={styles.svgButton} onClick={props.onClick}>
              <Icon.BackspaceFill />
            </SvgButton>
          </Col>
        </Row>
        {props.children}
      </Container>
    </nav >
  )
}
export default SideBarExpanded