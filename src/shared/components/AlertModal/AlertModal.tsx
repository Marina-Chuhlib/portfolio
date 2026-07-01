import * as React from "react";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { ThemeContext } from "../../theme/ThemeProvider";

import cv from "../../../images/marina-chukhlib-cv.pdf";

import css from "./alertModal.module.css";

interface AlertModalProps {
  denotation: any;
  confirmText: any;
  disagreeBtnText: any;
  agreeBtnText: any;
  className?: string;
}

const AlertModal = ({
  denotation,
  confirmText,
  disagreeBtnText,
  agreeBtnText,
}: AlertModalProps) => {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    setConfirm(true);
    window.open(cv, "_blank");

    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={css.modalWrap}>
      <button
        type="button"
        onClick={handleClickOpen}
        className={`${css.openBtn} ${theme === "light" ? css.light : css.dark}`}
      >
        {denotation}
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          className={`${css.modal} ${theme === "light" ? css.light : css.dark}`}
        >
          <DialogContentText id="alert-dialog-description" className={css.text}>
            {confirmText}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          className={`${css.wrapper} ${
            theme === "light" ? css.light : css.dark
          }`}
        >
          <button type="button" className={css.btnAlert} onClick={handleClose}>
            {disagreeBtnText}
          </button>
          <button
            type="button"
            className={`${css.btnAlert} ${css.agree}`}
            onClick={handleConfirm}
          >
            {agreeBtnText}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertModal;
