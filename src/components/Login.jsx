import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "@material-tailwind/react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ contact: "", password: "", confirmPassword: "", verificationCode: "" });
  const [error, setError] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [contactType, setContactType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 560); // Adjust 768px as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Update on resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.contact.includes("@") && !/^[0-9]+$/.test(formData.contact)) {
      setError("Enter a valid email or phone number");
      return;
    }
    
    setContactType(formData.contact.includes("@") ? "email" : "phone number");
    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setIsCodeSent(true);
  };

  return (
    <div className="flex  items-center justify-center h-screen bg-gray-200 min-h-screen p-4">
      <div className="relative w-full max-w-4xl h-full sm:h-4/5 md:h-3/4 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-row">
        
        
        <motion.div
          className={`absolute z-50 left-0 right-0  sm:top-0 sm:bottom-0 w-full sm:w-1/2  bg-blue-500 flex flex-col justify-center items-center text-white  rounded-2xl transition-all duration-500 ${ isMobile ? (isLogin ? "top-0 rounded-b-full pb-5" : "pt-5 top-full -translate-y-full rounded-t-full") :
            (isLogin ? "left-0 " : "left-1/2")
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold">
            {isLogin ? "Welcome Back!" : "Join Us Today!"}
          </h2>
          <p className="text-sm md:text-base mt-2 text-center px-6">
            {isLogin ? "Sign in to continue your journey with us." : "Create an account to get started!"}
          </p>
          <p className="mt-4 text-center text-white">
                {isLogin ? "Don't have an account?" : "Already have an account?"}<br />
                <Button
                variant="outlined"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                    setIsCodeSent(false);
                  }}
                  className="ml-2 mt-2 text-white font-bold border-4 border-white outline-none  focus:outline-none"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </Button>
              </p>
        </motion.div>

        
        <div className="relative z-40 w-full flex ">
          <AnimatePresence mode="wait">
          <motion.div
          

          
  key={isLogin ? "login" : "signup"}
  initial={isMobile?({ y: isLogin ? 50 : -50, opacity: 0 }):({ x: isLogin ? -100 : 100, opacity: 0 })}
  animate={{ x: 0, opacity: 1 }}
  exit={isMobile?({ y: isLogin ? 50 : -50, opacity: 0 }):({ x: isLogin ? -100 : 100, opacity: 0 })}
  transition={{
    x: { duration: 0.1 }, 
    opacity: { delay: 0.2, duration: 0.3 }, 
  }}
  className={`absolute top-0 bottom-0 w-full sm:w-1/2 p-8 flex flex-col justify-center items-center bg-white transition-all duration-500 ${
   isMobile?(isLogin? "left-0": "left-0"):( isLogin ? "left-1/2" : "left-0")
  }`}
>

              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
                {isLogin ? "Login" : "Sign Up"}
              </h2>

              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              {!isCodeSent ? (
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Email or Mobile Number"
                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    required
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      required
                    />
                    <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                  </div>
                  
                  {!isLogin && (
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        required
                      />
                      <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105"
                  >
                    {isLogin ? "Login" : "Continue"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); alert("Verification successful!"); }} className="space-y-4 w-full">
                  <p className="text-center font-semibold mb-2">Enter the verification code</p>
                  <p className="text-center text-sm text-gray-600 mb-4">We have sent a code to your {contactType}</p>
                  <input
                    type="text"
                    name="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    placeholder="Verification Code"
                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform transform hover:scale-105"
                  >
                    Verify Code
                  </button>
                </form>
              )}

              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
