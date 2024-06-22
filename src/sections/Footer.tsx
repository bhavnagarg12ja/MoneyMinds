import MoneyMinds from "../assets/logos/moneyminds_logo_transparent.png";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";

function Footer() {
  return (
    <section className="bg-gray-700">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img
              className="mb-4 w-36"
              src={MoneyMinds}
              alt="Light version of MoneyMinds logo"
            />
            <p className="font-semibold">Start spending the smart way</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-400">Product</p>
              <a href="#">Overview</a>
              <a href="#">Features</a>
              <a href="#">Solutions</a>
              <a href="#">Contact</a>
              <a href="#">Releases</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-gray-400">Resources</p>
              <a href="#">Blog</a>
              <a href="#">Newsletter</a>
              <a href="#">Events</a>
              <a href="#">Help Centre</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="w-fit">
            <h2 className="font-semibold">Get the app</h2>
            <StoreLinks type={BtnTypes.Variant} />
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-900 pt-10">
          <p className="w-[16ch] font-semibold text-gray-400 md:w-full">
            &copy; 2024 MoneyMinds. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank">
              <img src={Twitter} alt="Twitter logo" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
