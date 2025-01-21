import React, { useRef, useState } from "react";
import { Button, Input, Select, Option, Checkbox, Card, Typography } from "@material-tailwind/react";
import { FileUpload } from "primereact/fileupload"; // File upload from PrimeReact

export default function BlackbookForm() {
  const stepperRef = useRef(null);

  // State management
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [filesOptions, setFilesOptions] = useState([]);
  const [sameSettingsForAll, setSameSettingsForAll] = useState(true);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    area: "",
    street: "",
    landmark: "",
    pincode: "",
  });

  // Options for print
  const paperTypes = ["Glossy", "Matte", "Recycled"];
  const paperSizes = ["A4", "A3", "Letter"];
  const bindingOptions = ["Stapled", "Spiral", "Perfect"];

  const handleFileUpload = (e) => {
    const files = e.files;
    setUploadedFiles(files);
    setFilesOptions(files.map(() => ({
      paperType: null,
      paperSize: null,
      binding: null,
    })));
  };

  const handleFileOptionsChange = (index, key, value) => {
    const updatedOptions = [...filesOptions];
    updatedOptions[index][key] = value;
    setFilesOptions(updatedOptions);
  };

  const handleSameSettingsChange = (e) => {
    setSameSettingsForAll(e.checked);

    if (e.checked && filesOptions.length > 0) {
      const { paperType, paperSize, binding } = filesOptions[0];
      const updatedOptions = uploadedFiles.map(() => ({
        paperType,
        paperSize,
        binding,
      }));
      setFilesOptions(updatedOptions);
    }
  };

  const handleAddressChange = (key, value) => {
    setAddress({ ...address, [key]: value });
  };

  const isMultipleFiles = uploadedFiles.length > 1;

  // Button Validation for Proceed to Payment
  const isFormValid = () => {
    const allOptionsSelected = filesOptions.every(
      (option) => option.paperType && option.paperSize && option.binding
    );
    const allAddressFieldsFilled =
      address.name &&
      address.phone &&
      address.address &&
      address.city &&
      address.area &&
      address.street &&
      address.landmark &&
      address.pincode;

    return uploadedFiles.length > 0 && allOptionsSelected && allAddressFieldsFilled;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      alert("Please ensure all fields are filled and files are uploaded.");
    } else {
      console.log("Order submitted", { address, uploadedFiles, filesOptions });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 px-4 pt-10 sm:pt-20">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-6 md:p-8">
        {/* Header Section */}
        <Typography variant="h4" className="text-center font-bold text-gray-800 mb-6">
          Order Your Document
        </Typography>

        {/* Step 1: File Upload */}
        <Card className="mb-6 p-6">
          <Typography variant="h6" className="font-semibold text-gray-700 mb-4">
            Step 1: Upload Files
          </Typography>
          <FileUpload
            name="demo[]"
            multiple
            auto
            accept="image/*,.pdf,.docx"
            maxFileSize={10000000}
            customUpload={true}
            uploadHandler={(e) => handleFileUpload(e)}
            onRemove={(e) => {
              const fileIndex = uploadedFiles.findIndex(file => file.name === e.file.name);
              const updatedFiles = [...uploadedFiles];
              updatedFiles.splice(fileIndex, 1);
              setUploadedFiles(updatedFiles);
              const updatedOptions = [...filesOptions];
              updatedOptions.splice(fileIndex, 1);
              setFilesOptions(updatedOptions);
            }}
          />
        </Card>

        {/* Step 2: Print Options */}
        <Card className="mb-6 p-6">
          <Typography variant="h6" className="font-semibold text-gray-700 mb-4">
            Step 2: Select Print Options
          </Typography>
          {isMultipleFiles && (
            <div className="flex items-center mb-4">
              <Checkbox
                checked={sameSettingsForAll}
                onChange={handleSameSettingsChange}
              />
              <span className="ml-2 text-gray-700">Apply same settings to all files</span>
            </div>
          )}

          {sameSettingsForAll ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Paper Type</label>
                <Select
                  value={filesOptions[0]?.paperType}
                  onChange={(e) => handleFileOptionsChange(0, "paperType", e.target.value)}
                  label="Select Paper Type"
                >
                  {paperTypes.map((type) => (
                    <Option key={type} value={type}>{type}</Option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Paper Size</label>
                <Select
                  value={filesOptions[0]?.paperSize}
                  onChange={(e) => handleFileOptionsChange(0, "paperSize", e.target.value)}
                  label="Select Paper Size"
                >
                  {paperSizes.map((size) => (
                    <Option key={size} value={size}>{size}</Option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Binding</label>
                <Select
                  value={filesOptions[0]?.binding}
                  onChange={(e) => handleFileOptionsChange(0, "binding", e.target.value)}
                  label="Select Binding"
                >
                  {bindingOptions.map((binding) => (
                    <Option key={binding} value={binding}>{binding}</Option>
                  ))}
                </Select>
              </div>
            </div>
          ) : (
            uploadedFiles.map((file, index) => (
              <div key={file.name} className="mb-6">
                <Typography variant="h6" className="font-semibold text-gray-700 mb-4">
                  {file.name}
                </Typography>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Paper Type</label>
                    <Select
                      value={filesOptions[index]?.paperType}
                      onChange={(e) => handleFileOptionsChange(index, "paperType", e.target.value)}
                      label="Select Paper Type"
                    >
                      {paperTypes.map((type) => (
                        <Option key={type} value={type}>{type}</Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Paper Size</label>
                    <Select
                      value={filesOptions[index]?.paperSize}
                      onChange={(e) => handleFileOptionsChange(index, "paperSize", e.target.value)}
                      label="Select Paper Size"
                    >
                      {paperSizes.map((size) => (
                        <Option key={size} value={size}>{size}</Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Binding</label>
                    <Select
                      value={filesOptions[index]?.binding}
                      onChange={(e) => handleFileOptionsChange(index, "binding", e.target.value)}
                      label="Select Binding"
                    >
                      {bindingOptions.map((binding) => (
                        <Option key={binding} value={binding}>{binding}</Option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            ))
          )}
        </Card>

        {/* Step 3: Address Form */}
        <Card className="mb-6 p-6">
          <Typography variant="h6" className="font-semibold text-gray-700 mb-4">
            Step 3: Enter Delivery Address
          </Typography>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Full Name</label>
              <Input
                value={address.name}
                onChange={(e) => handleAddressChange("name", e.target.value)}
                label="Full Name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <Input
                value={address.phone}
                onChange={(e) => handleAddressChange("phone", e.target.value)}
                label="Phone Number"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Area</label>
              <Input
                value={address.area}
                onChange={(e) => handleAddressChange("area", e.target.value)}
                label="Area"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Street</label>
              <Input
                value={address.street}
                onChange={(e) => handleAddressChange("street", e.target.value)}
                label="Street"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Landmark</label>
              <Input
                value={address.landmark}
                onChange={(e) => handleAddressChange("landmark", e.target.value)}
                label="Landmark"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Pincode</label>
              <Input
                value={address.pincode}
                onChange={(e) => handleAddressChange("pincode", e.target.value)}
                label="Pincode"
              />
            </div>
          </div>
        </Card>

        {/* Step 4: Submit the order */}
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid()}
          fullWidth
          color="green"
          size="lg"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}
