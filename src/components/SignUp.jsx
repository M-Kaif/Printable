import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import  AuthLayout  from "./AuthLayout";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    password: "",
    acceptTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verify");
  };

  return (
    <AuthLayout title="Sign up" showBack={false}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputText
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
        <InputText
          placeholder="Enter Email ID / Phone No."
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          required
        />
        <InputText
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.checked })}
          />
          <label htmlFor="terms" className="text-sm text-gray-500 leading-none">
            I agree with Terms of Service and Privacy Policy
          </label>
        </div>
        <Button className="w-full bg-amber-300 hover:bg-amber-400" type="submit">
          Sign up
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Button variant="link" className="text-amber-500 p-0" onClick={() => navigate("/login")}>
            Sign in
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SignUp;
