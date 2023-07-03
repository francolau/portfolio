import React from "react";
import Slider from "react-slick";
import Modal from "../../Modal/Modal";

import inicio from "../../../images/projects/ferreteriaIMG/INICIO.png";
import det_prod from "../../../images/projects/ferreteriaIMG/DETALLEPRODUCTO.png";
import login from "../../../images/projects/ferreteriaIMG/LOGIN.png";
import tienda from "../../../images/projects/ferreteriaIMG/TIENDA.png";

const FerreteriaPics = ({ setModal }) => {

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const urls = [inicio, det_prod, login, tienda];

  return (
    <Modal scroll={false} setModal={setModal}>
      <section className="w-[90%] mx-auto">
        <Slider {...settings}>
          {urls.map((img, index) => {
            return (
              <div
                key={index}
                className="w-12/12 p-4 text-center justify-center mx-auto bg-dark-200 rounded-md flex flex-col h-fit z-10"
              >
                <img src={img} alt={`${img}pic`} />
              </div>
            );
          })}
        </Slider>
      </section>
    </Modal>
  );
};

export default FerreteriaPics;
