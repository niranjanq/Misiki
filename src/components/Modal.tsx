import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({setModal}:{setModal:any}) => {
  return (
      <div className="modal w-full h-full flex items-center justify-center sticky bg-black/30 w-screen h-screen">
        <div className="box w-[clamp(250px,500px,90vw)] h-[90vh] bg-white flex flex-col gap-4 p-8 items-center text-black overflow-y-scroll no-scrollbar relative">
          <div
            className="absolute top-2 right-2 text-xl float-right p-2"
            onClick={(e) => setModal(false)}
          >
            <IoClose />
          </div>
          <img
            src="https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?dpr=1&fit=crop&format=jpg&height=144&width=144"
            alt=""
            className="w-[120px] aspect-square "
          />
          <div className="heading text-cormorant-garamond-light text-3xl ">
            Enjoy 50% off your first order,
            <br /> up to $100 off
          </div>
          <div className="desc text-black/80 text-sm">
            Purchase from over 1,00,000 unique brands. Sign up for free!
          </div>
          <div className="input flex gap-2 flex-col w-full">
            <div className="text w-full text-left">Business email address</div>
            <input
              className="px-4 pt-2.5 pb-3 bg-transparent border-[1px] border-black/80"
              type="text"
              name=""
              id=""
              placeholder="you@yourstore.com"
            />
          </div>
          <div className="signupBtn w-full bg-black px-4 pt-2.5 pb-3 text-white">
            Sign up for free
          </div>
          <div className="signin underline">Sign in</div>
          <div className="or">or</div>
          <div className="google w-full border-[0.5px] border-gray-800 px-4 pt-2.5 pb-3 mb-1">
            <div className="googleicon"></div>
            <div className="text">Continue with Google</div>
          </div>
          <div className="text-lg">
            Are you a brand?{" "}
            <span className="underline">Sign up to sell on Faire</span>
          </div>
          <div className="text-sm">
            By proceeding, you're agreeing to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy Policy.</span>
            50% off expires 7 days after signup. Applied at checkout.
          </div>
        </div>
      </div>
    )
};

export default Modal;
