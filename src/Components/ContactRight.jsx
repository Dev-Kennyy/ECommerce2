import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactRight() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSend = () => {
    setSubmitted(true); // hide form after clicking send
    navigate("/");
  };

  return (
    <div className="p-5 shadow">
      {!submitted ? (
        <>
          <label htmlFor="" className="text-gray text-[10px]">
            Fullname:
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your fullname"
            className="p-1 hover:outline-1 outline-primary text-[12px] shadow w-64"
          />
          <br />
          <br />
          <label htmlFor="" className="text-gray text-[10px]">
            Email:
          </label>
          <br />
          <input
            type="email"
            placeholder="kehinde@gmail.com"
            className="p-1 hover:outline-1 outline-primary text-[12px] shadow w-64"
          />
          <br />
          <br />
          <label htmlFor="" className="text-gray text-[10px]">
            Message:
          </label>
          <br />
          <textarea className="p-1 hover:outline-1 outline-primary text-[12px] shadow h-30 w-64"></textarea>

          <div
            className="btn bg-primary text-center p-3 text-white cursor-pointer mt-4"
            onClick={handleSend}
          >
            Send
          </div>
        </>
      ) : (
        <div className="text-center text-primary font-semibold"></div>
      )}
    </div>
  );
}

export default ContactRight;
