import React, { useEffect } from "react";
import "./hero.css";
import carPng from "../../assets/car.png";
import yellowPng from '../../assets/banner-car.png'
import AOS from 'aos';
import "aos/dist/aos.css"
export const Hero = ({ theme }) => {
  useEffect(()=>{
    AOS.refresh();
  })
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img src={theme==="dark"?carPng:yellowPng}   className="sm:scale-125 relative-z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" alt="" />
          </div>
          <div className="order-2 sm:order-1 space-y-3 sm:pr-32">
            <p
             data-aos="fade-up"
            data-aos-duration="700"
             className="text-primary text-3xl font-semibold font-sans">Effortless</p>
            <h1
            data-aos="fade-up"
            data-aos-delay="1000"
              className="text-5xl lg:text-7xl font-semibold
        font-serif"
            >
              Car Rental
            </h1>
            <p
            data-aos="fade-up"
            data-aos-delay="1500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus laboriosam doloribus enim voluptates?
            </p>
            <button
            data-aos="fade-up"
            data-aos-duration="1500"
            >Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
