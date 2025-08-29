import { useState } from "react";
import ModalFormInput from "./ModalFormInput";

function ModalForm2({ prevStep, nextStep }) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    holderNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const handleConfirm = () => {
    let newErrors = {};

    if (!formData.cardNumber) newErrors.cardNumber = "Card Number is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry Date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";
    if (!formData.holderNumber)
      newErrors.holderNumber = "Holder Number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      {/* Stepper */}
      <div className="flex justify-center flex-col">
        <div className="flex justify-center gap-2 text-[9px]">
          <div className="text-white bg-primary px-3 py-2 rounded-full">1</div>
          <div className="bg-primary text-white border px-3 py-2 rounded-full">
            2
          </div>
          <div className="bg-graylight border px-3 py-2 rounded-full">3</div>
        </div>
      </div>

      {/* Form */}
      <div className="flex gap-3 pt-4">
        <img src="CreditCard.png" alt="" className="h-32" />
        <div className="flex flex-col">
          {/* Card Number */}
          <ModalFormInput
            type="number"
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-xs">{errors.cardNumber}</p>
          )}

          {/* Expiry Date + CVV */}
          <div className="flex gap-2 my-3">
            <div>
              <ModalFormInput
                type="text"
                label="Expiry Date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
              {errors.expiryDate && (
                <p className="text-red-500 text-xs">{errors.expiryDate}</p>
              )}
            </div>

            <div>
              <ModalFormInput
                type="text"
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs">{errors.cvv}</p>
              )}
            </div>
          </div>

          {/* Holder Number */}
          <ModalFormInput
            type="number"
            label="Holder Number"
            name="holderNumber"
            value={formData.holderNumber}
            onChange={handleChange}
          />
          {errors.holderNumber && (
            <p className="text-red-500 text-xs">{errors.holderNumber}</p>
          )}

          {/* Save card */}
          <span className="text-[12px] flex items-center gap-2 p-3">
            <input type="checkbox" />
            <p>Save this Card for future use</p>
          </span>
        </div>
      </div>

      {/* Confirm Button */}
      <div
        className="flex justify-center p-2 bg-primary text-white mt-8 rounded font-bold cursor-pointer"
        onClick={handleConfirm}
      >
        Confirm
      </div>
    </div>
  );
}

export default ModalForm2;
