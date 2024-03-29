
// src="https://i.ibb.co/wKKCxgM/smiling-student-hipster-woman-with-backpack-going-vacation.jpg"
// src="https://i.ibb.co/6wVXtQ7/marissa-grootes-D4j-Raha-Ua-Ic-unsplash.jpg"
// src="https://i.ibb.co/XVPgt11/erica-zhou-IHp-Ug-FDn7z-U-unsplash.jpg"

import { useEffect } from "react"
import { useState } from "react"
import Products from "../Products/Products";
import Navbar from "../Navbar/Navbar";

// src="https://i.ibb.co/SwyWXkK/mostafa-meraji-X0y-Kd-R-F9r-M-unsplash.jpg"
const Banner = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const slides = [
        "https://i.ibb.co/wKKCxgM/smiling-student-hipster-woman-with-backpack-going-vacation.jpg",
        "https://i.ibb.co/HXMgr4d/bride-1486004-1280.jpg",
        "https://i.ibb.co/M1HT3Jc/pexels-andrea-piacquadio-974911.jpg",
        "https://i.ibb.co/Qv1mDQ4/boy-4798530-1280.jpg"
      ];
    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide+1))
        },3000)
        return () => clearInterval(interval)
    },[slides.length]);
    return (
        <div className="   border-blue ">
          <div className="text-center">
            <div className="carousel w-full rounded-xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item  w-full ${index === currentSlide ? '' : 'hidden'}`}
                >
                  <img src={slide} className="w-full " alt={`Slide ${index + 1}`} />
                  <div className="absolute bg-base-200 w-auto top-1/3 bg-opacity-45 ml-32 p-5 rounded-2xl">
                    <h2 className="lg:text-5xl">50% off in all <br />Buy Now</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Navbar></Navbar>
          {/* <div >
          <Products></Products>
          </div> */}
        </div>
      );
    };


export default Banner
