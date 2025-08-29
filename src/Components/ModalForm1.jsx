import { useState } from "react";
import { CiBank, CiCreditCard1 } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import ModalFormInput from "./ModalFormInput";

function ModalForm1({ prevStep, nextStep }) {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    lastName: "",
    address: "",
    phone: "",
    payment: "",
  });

  const [error, setError] = useState("");

  const paymentMethods = [
    {
      id: "credit",
      label: "Credit Card",
      icon: <CiCreditCard1 className="text-lg" />,
    },
    { id: "paypal", label: "PayPal", icon: <FaPaypal className="text-lg" /> },
    { id: "bank", label: "Bank Card", icon: <CiBank className="text-lg" /> },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const { firstName, email, lastName, address, phone, payment } = formData;

    if (!firstName || !email || !lastName || !address || !phone || !payment) {
      setError("Please fill all fields and select a payment method.");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div>
      {/* Step Indicator */}
      <div className="flex justify-center flex-col">
        <div className="flex justify-center gap-2 text-[9px]">
          <div className="text-white bg-primary px-3 py-2 rounded-full">1</div>
          <div className="bg-graylight border px-3 py-2 rounded-full">2</div>
          <div className="bg-graylight border px-3 py-2 rounded-full">3</div>
        </div>
      </div>

      {/* Form */}
      <div className="flex justify-center pt-4 gap-7 flex-wrap sm:flex-nowrap">
        <div className="left flex flex-col gap-3 w-full max-w-sm">
          <ModalFormInput
            type="text"
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <ModalFormInput
            type="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Payment Section */}
          <h1 className="text-xs font-semibold mt-2">
            Select Method of Payment:
          </h1>
          <div className="flex flex-col gap-2">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  {method.icon} {method.label}
                </span>
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={formData.payment === method.id}
                  onChange={handleChange}
                  className="accent-primary"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="right flex flex-col gap-2">
          <ModalFormInput
            type="text"
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <textarea
            className="bg-graylight p-2 text-[9px] w-full text-neutralDark h-full"
            placeholder="Address Delivery"
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          <ModalFormInput
            type="tel"
            label="Mobile Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs text-center mt-3">{error}</p>
      )}

      {/* Submit Button */}
      <div
        className="flex justify-center p-2 bg-primary text-white mt-8 rounded font-bold cursor-pointer hover:bg-primary/80"
        onClick={handleNext}
      >
        Go to Payment
      </div>
    </div>
  );
}

export default ModalForm1;
