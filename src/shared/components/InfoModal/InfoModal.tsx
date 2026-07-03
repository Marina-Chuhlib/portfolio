import { useState, useContext } from "react";
import type { ReactNode } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ThemeContext } from "../../theme/ThemeProvider";

import css from "./infoModal.module.css";

interface InfoModalProps {
  denotation: string;
  title: string;
  content: ReactNode;
  closeBtn: string;
  linkDenotation?: string;
  link?: string;
  linkTitle?: string;
  className?: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: 20,
    overflow: "hidden",
    backgroundImage: "none",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2, 3),
  },
}));

const InfoModal = ({
  denotation,
  title,
  link,
  linkTitle,
  content,
  linkDenotation,
  closeBtn,
}: InfoModalProps) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const themeClass = theme === "light" ? css.light : css.dark;

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        type="button"
        onClick={handleClickOpen}
        className={`${css.openBtn} ${themeClass}`}
      >
        {denotation}
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="info-modal-title"
        open={open}
      >
        <DialogTitle
          id="info-modal-title"
          className={`${css.modal} ${css.title} ${themeClass}`}
        >
          {title}
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          className={`${css.closeBtn} ${themeClass}`}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <DialogContent
          dividers
          className={`${css.modal} ${css.content} ${themeClass}`}
        >
          {content}

          {linkDenotation && (
            <div className={css.wrap}>
              <a
                className={`${css.link} ${themeClass}`}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                title={linkTitle}
                onClick={handleClose}
              >
                {linkDenotation}
                <ArrowForwardIosIcon className={css.linkIcon} />
              </a>
            </div>
          )}
        </DialogContent>

        <DialogActions className={`${css.modal} ${themeClass}`}>
          <button
            type="button"
            autoFocus
            onClick={handleClose}
            className={`${css.closeAction} ${themeClass}`}
          >
            {closeBtn}
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default InfoModal;
