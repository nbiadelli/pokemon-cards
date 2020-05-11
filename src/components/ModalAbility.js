/*
 * tem uma issue aberta sobre o erro ("findDOMNode is deprecated in StrictMode")
 * https://github.com/mui-org/material-ui/issues/13394
*/

/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from "../styled-components/Card-styled"
import ModalStyled from "../styled-components/ModalAbility-styled"

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ModalAbility = (props) => {
    console.log("???????????", props.detail);
    const classes = useStyles();

    return (

        <div>
            <Modal className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleShow}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <ModalStyled>
                        <div>
                            <div>
                                <img src={props.detail.img} alt="" />
                            </div>
                            <div>
                                <h1>{props.detail.name}</h1>
                                {props.detail.effect_entries && props.detail.effect_entries.map(x =>
                                    <div> <p>{x.effect}</p></div>
                                )}
                            </div>
                        </div>
                    </ModalStyled>
                </Fade>
            </Modal>
        </div>




    );
};

export default ModalAbility;