import * as React from "react";
import { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { ThemeContext } from "../../theme/ThemeProvider";

import cv from "../../../images/marina-chukhlib-cv.pdf";

import css from "./modalConfirm.module.css";

function ModalConfirm({
  denotation,
  confirmText,
  disagreeBtnText,
  agreeBtnText,
}) {
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
          <button className={css.btnAlert} onClick={handleClose}>
            {disagreeBtnText}
          </button>
          <button
            className={`${css.btnAlert} ${css.agree}`}
            onClick={handleConfirm}
          >
            {agreeBtnText}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalConfirm