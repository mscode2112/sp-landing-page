import React from "react";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";

import {
  dialogWrapper,
  dialogContent,
  videoContainer,
  responsiveIframe,
  modalCloseButton,
} from "./videoModal.module.css";
import { useSharedModalState } from "../hero/hero";
import { useSharedVideoModalState } from "../portfolio/portfolio";
import { useSharedVideoModal2State } from "../portfolio/portfolio2";
import { useSharedVideoModal3State } from "../testimonials/testimonials";
import { useSharedVideoModal4State } from "../../pages/customvideotypes/samples";
import { useSharedVideoModal5State } from "../../pages/customvideotypes/header";

const urlSuffix = "?color=0c88dd&title=0&byline=0&portrait=0&badge=0";

const VideoModal = () => {
  const { modalOpen, setModalOpen, modalData } = useSharedModalState();
  const { videoModalOpen, setVideoModalOpen, videoModalData } =
    useSharedVideoModalState();
  const { videoModal2Open, setVideoModal2Open, videoModal2Data } =
    useSharedVideoModal2State();
  const { videoModal3Open, setVideoModal3Open, videoModal3Data } =
    useSharedVideoModal3State();
  const { videoModal4Open, setVideoModal4Open, videoModal4Data } =
    useSharedVideoModal4State();
  const { videoModal5Open, setVideoModal5Open, videoModal5Data } =
    useSharedVideoModal5State();
  function closeModal() {
    setModalOpen(false);
    setVideoModalOpen(false);
    setVideoModal2Open(false);
    setVideoModal3Open(false);
    setVideoModal4Open(false);
    setVideoModal5Open(false);
  }
  return (
    <div>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={modalOpen}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={modalData + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={videoModalOpen}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={videoModalData + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={videoModal2Open}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={videoModal2Data + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={videoModal3Open}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={videoModal3Data + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={videoModal4Open}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={videoModal4Data + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
      <DialogOverlay
        className={dialogWrapper}
        isOpen={videoModal5Open}
        onDismiss={closeModal}
      >
        <DialogContent className={dialogContent}>
          <div className={videoContainer}>
            <iframe
              className={responsiveIframe}
              src={videoModal5Data + urlSuffix}
              frameBorder="0"
              title="video"
              allowFullScreen
            ></iframe>
          </div>
          <button className={modalCloseButton} onClick={closeModal}>
            <span aria-hidden>×</span>
          </button>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};
export default VideoModal;
