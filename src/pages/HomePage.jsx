import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { Button, IconButton } from "@material-tailwind/react";
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import sec31 from '../assets/sec3.jpg';
import sec32 from '../assets/sec3-2.jpg';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide} from 'swiper/react';
import { motion, useInView } from "framer-motion";
import vid from '../assets/inkmud.mp4'
import doc from '../assets/document.jpg'
import bb from '../assets/blackbook.jpg'
import { FileText, FileCog, Hourglass, Wallet, User, Upload, MapPin, CreditCard, LockKeyhole, Eye } from 'lucide-react'

const HomePage = () => {
     const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const secondSection = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (delay) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay },
        }),
      };
    
      const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.5 } },
      };
      const steps = [
        {
            icon: User,
            title: "Register or Login",
            description: "Start by creating an account or logging in to manage your orders and preferences easily.",
        },
        {
            icon: Upload,
            title: "Upload & Setting of File",
            description: "Upload your files and adjust settings to ensure your prints come out exactly as you want.",
        },
        {
            icon: MapPin,
            title: "Add Shipping Address",
            description: "Provide your shipping address to receive your printed documents right at your doorstep.",
        },
        {
            icon: CreditCard,
            title: "Make Payment",
            description: "Complete the process by making a secure payment. Various payment options are available.",
        },
    ];

  return (
    <div className="w-full relative md:overflow-hidden " style={{scrollBehavior:"smooth"}}>
      {/* Video background */}
      <video
        src={vid}
        autoPlay
        loop
        muted
        className="fixed -z-50 w-full h-full object-cover pointer-events-none"
      ></video>

      {/* Content Section 1 */}
      <div className="h-screen w-full p-5 sm:px-8 md:px-16 flex flex-col items-center sm:items-start justify-center text-white bg-black bg-opacity-50">
         <motion.h1
          className="text-6xl sm:text-8xl font-extrabold mb-4 md:mb-3"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0} // delay of 0s
        >
          <span className="text-[#7da6d4]">Ink</span>Mudra
        </motion.h1>
        <motion.h3
          className="text-2xl sm:text-5xl font-medium mb-2 md:mb-2 text-gray-300"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.3} // delay of 0.5s
        >
          Your Printing <span className="text-[#7da6d4]">Partner</span>
        </motion.h3>
        <motion.h6
          className="text-md sm:text-xl font-thin mb-2 md:mb-3 text-gray-400 text-center"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.6} // delay of 1s
        >
          <span className="text-[#7da6d4]">High-Quality </span> Printing Solutions for Every Need
          
        </motion.h6>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#printables">
            <Button
              variant="outlined"
              ripple={true}
              className="rounded-full  bg-black/30 hover:bg-black/70 outline-none text-white border-gray-500"
            >
              Explore Printing Options
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Content Section 2 */}
      <div id="printables" ref={ref} className="h-screen bg-[#e8e6e7] p-10 md:flex items-center text-black justify-between">
      <div>{isInView && (<motion.h2
         variants={secondSection}
          initial="hidden"
          animate="visible"
           className="text-3xl md:text-5xl font-semibold text-center">Our <br /> Printables</motion.h2>)}</div>
        <Carousel />
      </div>

        {/* Content Section 3 */}
        <div className="pt-20 bg-black p-10 relative overflow-hidden">
  {/* Header Section */}
  <div className="absolute bg-[#7da6d4] px-4 py-3 top-0 left-1/2 -translate-x-1/2 rounded-b-lg sm:translate-x-0 sm:left-0 sm:ml-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-white whitespace-nowrap">
      About InkMudra
    </h2>
  </div>

  {/* Content Section */}
  <div className="w-full md:w-4/5 lg:w-2/3 mx-auto mt-20 text-white">
    <div className="flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-6">
      {/* Left Column */}
      <div className="sm:w-1/2 px-4 sm:px-6 md:px-8">
        <h5 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 ">
          Efficient Printing Solution
        </h5>
        <h6 className="text-md sm:text-xl md:text-2xl text-[#bcbe28] font-semibold font-serif mb-3 italic">
          Precision and quality in every print
        </h6>
        <p className="text-sm sm:text-base md:text-lg font-extralight text-gray-400 leading-relaxed">
          InkMudra is dedicated to providing high-quality printing services that cater to all your needs. We offer a wide range of printing options to bring your ideas to life.
        </p>
        <img src={sec32} alt="Efficient Printing" className="mt-10 sm:mt-16 md:mt-24 w-full" />
      </div>

      {/* Right Column */}
      <div className="sm:w-1/2 px-4 sm:px-6 md:px-8">
        <img src={sec31} alt="Cost Effective" className="w-full mb-6 sm:mb-10" />
        <h5 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          Cost Effective & Faster Turnaround Time
        </h5>
        <h6 className="text-md sm:text-xl md:text-2xl text-[#bcbe28] font-semibold font-serif mb-3 italic">
          Precision and quality in every print
        </h6>
        <p className="text-sm sm:text-base md:text-lg font-extralight text-gray-400 leading-relaxed">
          At InkMudra, we are committed to delivering faster and cost-effective printing solutions. High-quality results at competitive prices. Reliable printing delivered on time.
        </p>
      </div>
    </div>
  </div>
        </div>

        {/*Step Section 4*/ }
        <section className="pt-10  flex flex-col items-center gap-10 sm:gap-16 bg-[#e8e6e7] text-black">
                <div className="max-w-[1300px] mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Easy Steps to Get Prints</h2>
                    <div className="flex flex-col gap-8 sm:gap-8 md:flex-row items-center">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center text-center md:flex-1">
                                <div className="flex flex-col items-center g-green-400 ">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div className="mt-2 flex flex-col">
                                        <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0 md:w-20 border-black border-dashed border-t-2  md:mx-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-end gap-2 w-full bg-green-400 py-2 justify-center'>
                    <LockKeyhole color='white' strokeWidth={3}/>
                    <h2 className='font-bold text-white'>
                        Your Files are Secure, After Printing Files will be Deleted
                    </h2>
                </div>
            </section>
    </div>
  )
}







const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const images = [
      {
        src: bb,
        link:'/blackbook',
        title: "Blackbooks / Thesis",
        description: "Perfectly crafted for students and professionals.",
      },
      {
        src: doc,
        link:'/documents',
        title: "Documents",
        description: "High-quality paper for all needs.",
      },
    ];
  
  
  
    return (
      <div className="relative bg-blue-ray-400 md:w-3/4 py-5">
        <Swiper className="w-full h-auto"
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        spaceBetween={30} // Space between slides
        slidesPerView={3} // Number of slides visible at once
         navigation
         
        pagination={{ clickable: true }} // Show pagination (dots)
        breakpoints={{
          1024: {
            slidesPerView: 2, // 2 slides per view on tablets
          },
          600: {
            slidesPerView: 1, // 1 slide per view on mobile
          },
          300: {
            slidesPerView: 1, // 1 slide per view on mobile
          },
          
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={image.link}>
            <div className="relative w-full ">
              <img
                src={image.src}
                alt={image.title}
                className="object-cover object-center w-full h-72 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    );
  };
  





export default HomePage