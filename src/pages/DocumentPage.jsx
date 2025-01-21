import React from "react";
import doc from '../assets/document.jpg'
import { Link } from 'react-router-dom';
import { Card, Button } from "@material-tailwind/react";

const Document = () => {
  return (
    <section className="py-12 bg-gray-50 sm:pt-20">
      <div className="container mx-auto px-4">
        {/* Product Page Header */}
        <div className="flex flex-col lg:flex-row items-center md:items-start gap-8">
          {/* Left Side: Product Image */}
          <div className="w-full lg:w-1/2 mt-2">
            <Card className="overflow-hidden shadow-lg">
              <img
                src={doc}
                alt="Document Printing"
                className="object-cover w-full h-full"
              />
            </Card>
          </div>

          {/* Right Side: Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl text-center sm:text-start sm:text-4xl font-bold text-gray-800 mb-2">
              Document
            </h1>
            <ul className="md:ml-5 list-disc sm:text-lg text-gray-600 mb-3" >
  <li className="ml-4 sm:ml-0"><strong>Superior Quality:</strong> Advanced technology for sharp details and vibrant clarity.</li>
  <li className="ml-4 sm:ml-0"><strong>Diverse Options:</strong> Paperback, hardcover, specialty finishes, or golden print.</li>
  <li className="ml-4 sm:ml-0"><strong>Customised Solutions:</strong> Tailor-made printing to match your unique vision.</li>
  <li className="ml-4 sm:ml-0"><strong>Affordable Pricing:</strong> Premium results at competitive rates with bulk discounts.</li>
  <li className="ml-4 sm:ml-0"><strong>Convenient Process:</strong> Easy online PDF upload, customizable preferences, and doorstep delivery.</li>
  <li className="ml-4 sm:ml-0" ><strong>Impressive Printing Options:</strong>  Hard binding, softcover, and spiral binding for professional presentation.</li>
</ul>


  {/* Recommended Standards */}
  <div className="mb-2">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 ">Recommended Standards:</h2>
    <ul className=" sm:list-inside list-disc sm:text-lg text-gray-600">
      <li className="ml-4 sm:ml-0"><strong>Paper:</strong> 85 gsm or 100 gsm Bond Paper</li>
      <li className="ml-4 sm:ml-0"><strong>Size:</strong> A4</li>
      <li className="ml-4 sm:ml-0"><strong>Binding:</strong> Hard Binding with Golden Print</li>
      <li className="ml-4 sm:ml-0"><strong>Color:</strong> Color Printing available</li>
    </ul>
  </div>
            

            
            

            {/* Call-to-Action */}
            <Link to="/order-document"><Button
              className=" py-3 bg-[#0f040f] mt-3 sm:mt-0 w-full sm:w-auto"
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

export default Document;
