import React from "react";
import bb from "../assets/blackbook.jpg";
import { Link } from "react-router-dom";
import { Card, Button } from "@material-tailwind/react";
// PrimeReact core styles
import "primereact/resources/primereact.min.css";
// PrimeReact theme (choose one or customize)
import "primereact/resources/themes/lara-light-indigo/theme.css";

const BlackBook = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-50 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Product Page Header */}
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-10">
          {/* Left Side: Product Image */}
          <div className="w-full lg:w-1/2 lg:order-1">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={bb}
                alt="Document Printing"
                className="object-cover w-full h-full"
              />
            </Card>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2 lg:order-2">
            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
              Blackbook Printing Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Achieve a professional finish with our superior Blackbook printing
              solutions, tailored to meet your unique requirements.
            </p>

            {/* Key Features */}
            <ul className="space-y-3 mb-6">
              {[
                {
                  title: "Superior Quality",
                  description:
                    "Advanced technology for sharp details and vibrant clarity.",
                },
                {
                  title: "Diverse Options",
                  description:
                    "Paperback, hardcover, specialty finishes, or golden print.",
                },
                {
                  title: "Customized Solutions",
                  description:
                    "Tailor-made printing to match your unique vision.",
                },
                {
                  title: "Affordable Pricing",
                  description:
                    "Premium results at competitive rates with bulk discounts.",
                },
                {
                  title: "Convenient Process",
                  description:
                    "Easy online PDF upload, customizable preferences, and doorstep delivery.",
                },
                {
                  title: "Impressive Printing Options",
                  description:
                    "Hard binding, softcover, and spiral binding for professional presentation.",
                },
              ].map(({ title, description }, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 text-gray-700"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </span>
                  <span>
                    <strong>{title}:</strong> {description}
                  </span>
                </li>
              ))}
            </ul>

            {/* Recommended Standards */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                Recommended Standards:
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Paper:</strong> 85 gsm or 100 gsm Bond Paper
                </li>
                <li>
                  <strong>Size:</strong> A4
                </li>
                <li>
                  <strong>Binding:</strong> Hard Binding with Golden Print
                </li>
                <li>
                  <strong>Color:</strong> Color Printing available
                </li>
              </ul>
            </div>

            {/* Call-to-Action */}
            <Link to="/order-blackbook">
              <Button
                className="py-3 px-6 text-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
                ripple={true}
              >
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackBook;
