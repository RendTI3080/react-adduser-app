import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../Button/Button";
import Card from "../Card/Card";
import style from './ErrorModal.module.css'

const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onConfirm}></div>
}

const ModelOverlay = (props) => {
    return <Card className={style.modal}>
        <header className={style.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={style.content}>
            <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message}
                                                 onConfirm={props.onConfirm}/>, document.getElementById("modal-root"))}
        </React.Fragment>
    );
}

export default ErrorModal;