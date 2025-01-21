import React, { useRef, useState } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
// PrimeReact styles
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

export default function BlackbookForm() {
  const stepperRef = useRef(null);

  // State management
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [printOptions, setPrintOptions] = useState({
    paperType: null,
    paperSize: null,
    binding: null,
  });
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Options for print
  const paperTypes = ["Glossy", "Matte", "Recycled"];
  const paperSizes = ["A4", "A3", "Letter"];
  const bindingOptions = ["Stapled", "Spiral", "Perfect"];

  const handleFileUpload = (e) => {
    setUploadedFiles(e.files);
  };

  const handlePrintOptionChange = (key, value) => {
    setPrintOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddressChange = (key, value) => {
    setAddress((prev) => ({ ...prev, [key]: value }));
  };

  const handleOrderSubmit = () => {
    console.log("Order Submitted:", { uploadedFiles, printOptions, address });
    setOrderSubmitted(true);
  };

  // Check if files are uploaded
  const isFilesUploaded = uploadedFiles.length > 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-6">
          Blackbook Order Process
        </h1>

        {orderSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600">
              Order Submitted Successfully!
            </h2>
            <p className="mt-2 text-gray-600">
              Thank you for your order. We’ll process it soon.
            </p>
          </div>
        ) : (
          <div>
            {/* Step 1: File Upload (outside the Stepper) */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Upload Files</h3>
              <FileUpload
                name="demo[]"
                multiple
                auto
                accept="image/*,.pdf,.docx"
                maxFileSize={10000000}
                emptyTemplate={
                  <p className="m-0 text-gray-500">Drag and drop files here to upload.</p>
                }
                customUpload={true}
                uploadHandler={(e) => {
                  const uploadedFiles = e.files.map((file) => ({
                    name: file.name,
                    size: file.size,
                  }));
                  setUploadedFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
                }}
                onRemove={(e) => {
                  setUploadedFiles((prevFiles) =>
                    prevFiles.filter((file) => file.name !== e.file.name)
                  );
                }}
              />
            </div>

            {/* Stepper for the rest of the steps */}
            <Stepper
              ref={stepperRef}
              className="w-full"
              style={{ flexBasis: "50rem" }}
              orientation="vertical"
            >
              {/* Step 2: Print Options */}
              <StepperPanel header="Step 2: Choose Print Options">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Paper Type
                    </label>
                    <Dropdown
                      value={printOptions.paperType}
                      options={paperTypes}
                      onChange={(e) =>
                        handlePrintOptionChange("paperType", e.value)
                      }
                      placeholder="Select Paper Type"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Paper Size
                    </label>
                    <Dropdown
                      value={printOptions.paperSize}
                      options={paperSizes}
                      onChange={(e) =>
                        handlePrintOptionChange("paperSize", e.value)
                      }
                      placeholder="Select Paper Size"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Binding
                    </label>
                    <Dropdown
                      value={printOptions.binding}
                      options={bindingOptions}
                      onChange={(e) =>
                        handlePrintOptionChange("binding", e.value)
                      }
                      placeholder="Select Binding"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6 gap-3">
                  <Button
                    label="Back"
                    icon="pi pi-arrow-left"
                    className="p-button-outlined p-button-lg"
                    onClick={() => stepperRef.current.prevCallback()}
                  />
                  <Button
                    label="Next"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    className="p-button-rounded p-button-lg bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => stepperRef.current.nextCallback()}
                    disabled={
                      !isFilesUploaded || // Disable if no files are uploaded
                      !printOptions.paperType ||
                      !printOptions.paperSize ||
                      !printOptions.binding
                    }
                  />
                </div>
              </StepperPanel>

              {/* Step 3: Address Form */}
              <StepperPanel header="Step 3: Enter Delivery Address">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Name
                    </label>
                    <InputText
                      value={address.name}
                      onChange={(e) =>
                        handleAddressChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Phone
                    </label>
                    <InputText
                      value={address.phone}
                      onChange={(e) =>
                        handleAddressChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Address
                    </label>
                    <InputTextarea
                      value={address.address}
                      onChange={(e) =>
                        handleAddressChange("address", e.target.value)
                      }
                      rows={3}
                      placeholder="Enter your full address"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      City
                    </label>
                    <InputText
                      value={address.city}
                      onChange={(e) =>
                        handleAddressChange("city", e.target.value)
                      }
                      placeholder="Enter your city"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-6 gap-3">
                  <Button
                    label="Back"
                    icon="pi pi-arrow-left"
                    className="p-button-outlined p-button-lg"
                    onClick={() => stepperRef.current.prevCallback()}
                  />
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    className="p-button-rounded p-button-lg bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleOrderSubmit}
                    disabled={
                      !address.name ||
                      !address.phone ||
                      !address.address ||
                      !address.city
                    }
                  />
                </div>
              </StepperPanel>
            </Stepper>
          </div>
        )}
      </div>
    </div>
  );
}
