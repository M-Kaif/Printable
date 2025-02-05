import React, { useState } from "react";
import { motion } from "framer-motion";

const PriceCalculator = () => {
  const [type, setType] = useState("Document");
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({
    binding: "None",
    paperType: "A4",
    paperSize: "A4",
    printColor: "Color",
    printSides: "Single-sided",
    coverOptions: "No Cover",
  });

  // Price mapping for different options
  const priceMapping = {
    Document: {
      basePrice: 5,
      binding: {
        "No Binding": 0,
        "Tape Binding": 2,
        "Spiral Binding": 5,
        "Hard Binding": 7,
        "Wiro Binding": 6,
        "Perfect Binding": 10,
        "Corner Staple Binding": 1,
        "Center Staple Binding": 1,
      },
      paperType: {
        "70 GSM": 1,
        "75 GSM": 0.5,
        "100 GSM": 2,
        "130 GSM Matte Paper": 2,
        "130 GSM Glossy White Paper": 2,
        "170 GSM Glossy White Paper": 2,
      },
      paperSize: {
        A4: 0,
        A3: 2,
        A5: 3,
        B5: 3,
        "Green Legal Size": 1.5,
        "White Legal Size": 1.5,
      },
      printColor: {
        Color: 5,
        "Black-and-White": 0,
      },
      printSides: {
        "Single-sided": 0,
        "Double-sided": 2,
      },
      coverOptions: {
        "No Cover": 0,
        "Transparent / Soft Cover": 3,
        "Soft Cover with Printing": 5,
        "Hard Cover without Printing": 8,
        "Hard Cover with Printing": 10,
      },
    },
    Blackbook: {
      basePrice: 20,
      binding: {
        "Hard Binding with Golden Print on Front": 30,
        "Hard Binding with Golden Print on Front and Spine": 35,
        "Binding with Golden Print on Front and Golden Clip at Corner": 40,
        "Hard Binding with Golden Print on Front, Spine, and Side Clip": 50, // Recommended
      },
      paperSize: {
        A4: 0,
      },
      paperType: {
        "85 GSM Bond Paper": 0,
        "100 GSM Alabaster Bond Paper": 1,
      },
      printColor: {
        Color: 10,
        "Black-and-White": 0,
      },
      printSides: {
        "Single-sided ": 0,
        "Double-sided": 5,
      },
      coverOptions: {
        "None": 0,
      },
    },
  };

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  // Calculate total price
  const calculatePrice = () => {
    const { basePrice, binding, paperType, paperSize, printColor, printSides, coverOptions } =
      priceMapping[type];
    const bindingCost = binding[options.binding] || 0;
    const paperCost = paperType[options.paperType] || 0;
    const paperSizeCost = paperSize[options.paperSize] || 0;
    const printColorCost = printColor[options.printColor] || 0;
    const printSidesCost = printSides[options.printSides] || 0;
    const coverOptionsCost = coverOptions[options.coverOptions] || 0;

    return (
      (basePrice + bindingCost + paperCost + paperSizeCost + printColorCost + printSidesCost + coverOptionsCost) *
      quantity
    );
  };

  // Handle input changes
  const handleOptionChange = (key, value) => {
    setOptions({ ...options, [key]: value });
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(value);
  };

  // Reset all options
  const handleReset = () => {
    setType("Document");
    setQuantity(1);
    setOptions({
      binding: "None",
      paperType: "A4",
      paperSize: "A4",
      printColor: "Color",
      printSides: "Single-sided",
      coverOptions: "No Cover",
    });
  };

  return (
    <div className="w-full bg-gray-900 pt-16">
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg ">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Print Price Calculator
      </h1>

      {/* Print Type Selection */}
      <div className="flex justify-center gap-4 mb-8">
        {["Document", "Blackbook"].map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setType(item)}
            className={`px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
              type === item
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Options Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mb-8">
        {Object.keys(options).map((key) => (
          <div key={key} className="p-4 bg-gray-800 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-300 mb-4 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <select
              value={options[key]}
              onChange={(e) => handleOptionChange(key, e.target.value)}
              className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.keys(priceMapping[type][key]).map((option) => (
                <option key={option} value={option} className="bg-gray-900">
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Quantity Section */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <label className="text-lg font-semibold text-gray-300">Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
          className="p-2 border border-gray-700 rounded-lg w-20 text-center bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Total Price */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Total Price: {formatPrice(calculatePrice())}
        </h2>
      </div>

      {/* Reset Button */}
      <div className="flex justify-center mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg font-semibold shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          Reset
        </motion.button>
      </div>
    </div>
    </div>
  );
};

export default PriceCalculator;