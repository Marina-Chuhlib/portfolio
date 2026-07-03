import { useState, useContext } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { ThemeContext } from "../../theme/ThemeProvider";

import cv from "../../../images/marina-chukhlib-cv.pdf";

import css from "./alertModal.module.css";

interface AlertModalProps {
  denotation: string;
  confirmText: string;
  disagreeBtnText: string;
  agreeBtnText: string;
  className?: string;
}

const AlertModal = ({
  denotation,
  confirmText,
  disagreeBtnText,
  agreeBtnText,
}: AlertModalProps) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const themeClass = theme === "light" ? css.light : css.dark;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    window.open(cv, "_blank");
    handleClose();
  };

  return (
    <div className={css.modalWrap}>
      <button
        type="button"
        onClick={handleClickOpen}
        className={`${css.openBtn} ${themeClass}`}
      >
        {denotation}
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "20px",
            overflow: "hidden",
            backgroundImage: "none",
            backgroundColor: "var(--modal-bg)",
            padding: "20px",
          },
        }}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className={`${css.text} ${themeClass}`}>
            {confirmText}
          </DialogContentText>
        </DialogContent>

        <DialogActions className={css.wrapper}>
          <button
            type="button"
            className={`${css.btnAlert} ${themeClass}`}
            onClick={handleClose}
          >
            {disagreeBtnText}
          </button>
          <button
            type="button"
            className={`${css.btnAlert} ${themeClass} ${css.agree}`}
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
