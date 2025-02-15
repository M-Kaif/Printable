import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {
  Button,
  Input,
  Textarea,
  Typography,
  Radio,
} from "@material-tailwind/react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function ContactUs() {
  const [error , setError] = useState("")
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message:"" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email.includes("@").test(formData.email)) {
      setError("Enter a valid email ");
      return;
    }
    if (!formData.phone.includes(!/^[0-9]+$/.test(formData.phone))) {
      setError("Enter a valid phone number");
      return;
    }
    
   
    }
    
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const [selectedInquiry, setSelectedInquiry] = useState("general");

  return (
    <section className="px-6 py-12  lg:py-16 bg-gray-900 text-gray-200">

      <div className="container mx-auto text-center mt-2">
        <Typography variant="h5" className="mb-4 text-lg lg:text-2xl text-gray-400">
          Customer Care
        </Typography>
        <Typography variant="h1" className="mb-4 text-3xl lg:text-5xl font-bold text-white">
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 text-lg lg:mb-16 mx-auto max-w-3xl text-gray-400">
          Have a question about our services? Need technical support? We are here to assist you. Reach out to us and we&apos;ll respond as soon as possible.
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        <div style={{width: '100%'}} className="rounded-xl overflow-hidden"><iframe width="100%" height="400" frameBorder="0"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Kishinchand%20Chellaram%20College,%20Vidyasagar%20Principal%20K.M.%20Kundnani%20Chowk,%20124,%20Dinshaw%20Wachha%20Road,%20Churchgate,%20Mumbai%20-%20400%20020.+(InkMudra)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker</a></iframe></div>
    
          
          <form className="flex flex-col gap-3 bg-gray-900 text-gray-100 p-6 lg:p-8 rounded-xl shadow-lg">
            
           {error && <p className="text-red-400">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input 
                    value={formData.firstName}
                    onChange={handleChange}
                     label="First Name" name="first-name" variant="outlined" color="white" className="text-white placeholder:text-white" />
              </div>
              <div>
                <Input 
                    value={formData.lastName}
                    onChange={handleChange}
                    label="Last Name" name="first-name" variant="outlined" color="white" className="text-white placeholder:text-white" />
              </div>
            </div>
            <div>
              <Input 
                    value={formData.email}
                    onChange={handleChange}
                    label="Email" name="email" variant="outlined" color="white" className="text-white placeholder:text-white" />
            </div>
            <div>
              <Input 
                    value={formData.phone}
                    onChange={handleChange}
                    label="Phone Number" type="number" maxLength={10} max={10} name="number" variant="outlined" color="white" className="text-white placeholder:text-white" />
            </div>
            <div>
              
              <Textarea               
              value={formData.message}
              onChange={handleChange}
              rows={5} label="Your Message" name="message" variant="outlined" color="white" className="outline-none " />
              
            </div>
            <Button 
            onClick={handleSubmit}
            className="w-full bg-white text-black hover:bg-gray-300 transition ">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
