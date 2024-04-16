import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ModalGateway, Modal } from "react-images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./CarouselComponent.module.css";

const images = [
  { src: "/feedback1.jfif", caption: "Image 1" },
  { src: "/feedback2.jfif", caption: "Image 2" },
  { src: "/feedback3.jfif", caption: "Image 3" },
  { src: "/feedback4.jfif", caption: "Image 4" },
  { src: "/feedback5.jfif", caption: "Image 5" },
  { src: "/feedback6.jfif", caption: "Image 6" },
];

const CarouselComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <Carousel
          showThumbs={false}
          onClickItem={openModal}
          className={styles.carousel}
          infiniteLoop={true}
          autoPlay={true}
          useKeyboardArrows={true}
          swipeable={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                className={styles.image}
                src={image.src}
                alt={image.caption}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <ModalGateway>
        {modalOpen && (
          <Modal onClose={closeModal}>
            <div className={styles.modalContent}>
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                className={styles.modalImage}
              />
            </div>
          </Modal>
        )}
      </ModalGateway>
    </>
  );
};

export default CarouselComponent;
