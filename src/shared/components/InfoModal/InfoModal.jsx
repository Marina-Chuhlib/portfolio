import * as React from "react";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";

import css from "./infoModal.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CardDetailsModal({
  denotation,
  title,
  link,
  linkTitle,
  content,
  linkDenotation,
  closeBtn
}) {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClickOpen}
        className={`${css.button} ${theme === "light" ? css.light : css.dark}`}
      >
        {denotation}
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          style={{ color: "#534B42", fontFamily: "Karla" }}
          className={`${css.modal} ${theme === "light" ? css.light : css.dark}`}
        >
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          style={{
            color: "#534B42",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          style={{ lineHeight: "1.5", fontFamily: "Varta", fontSize: "18px" }}
          className={`${css.modal} ${theme === "light" ? css.light : css.dark}`}
        >
          {content}

          {linkDenotation && (
            <>
              <div className={css.wrap}>
                <a
                  className={`${css.link} ${
                    theme === "light" ? css.light : css.dark
                  }`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={linkTitle}
                  onClick={handleClose}
                >
                  {linkDenotation}
                  <ArrowForwardIosIcon fontSize="small" />
                </a>
              </div>
            </>
          )}
        </DialogContent>

        <DialogActions
          className={`${css.modal} ${theme === "light" ? css.light : css.dark}`}
        >
          <button
            type="button"
            autoFocus
            onClick={handleClose}
            className={`${css.button} ${
              theme === "light" ? css.light : css.dark
            }`}
          >
            {closeBtn}
         
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
