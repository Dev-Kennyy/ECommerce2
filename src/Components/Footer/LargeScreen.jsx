import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function LargeScreen() {
  return (
    <div className="bg-footerColor xs:block hidden">
      <div className=" p-24 flex justify-between flex-col shadow mt-7 gap-9">
        <div className="theTop flex justify-between gap-x-28 flex-wrap gap-y-9">
          <div>
            <img src="FOOTER.png" alt="" width="100" />
            <p className="text-[11px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Follow Us</h2>
            <p className="text-[11px]">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
              <span className="flex gap-2">
                <BsTwitter />
                <FaFacebook />
              </span>
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Contact Us</h2>
            <p className="text-[11px]">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="theDown flex justify-between gap-x-28 flex-wrap">
          <div>
            <h2 className="font-semibold">Information</h2>
            <ul className="text-[13px] pt-3">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Service</h2>
            <ul className="text-[13px] pt-3">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">My Account</h2>
            <ul className="text-[13px] pt-3">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Offers</h2>
            <ul className="text-[13px] pt-3">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-2 border-white" />
    </div>
  );
}

export default LargeScreen;
