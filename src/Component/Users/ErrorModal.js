import React from "react";
import ReactDom from "react-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
    <Card className="error">
      <header className="header">{props.title}</header>
      <div className="message">{props.message}</div>
      <footer className="footer">
        <Button type="Button" className="okbtn" onClick={props.onConfirm}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
