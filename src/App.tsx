import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import { All_European_brands, Keep_Exploring, footer } from "./data/constants";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
function App() {
  const [modal, setModal] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setModal(true);
  //   }, 2000);
  // }, []);
  return modal ? (
    <Modal setModal={setModal} />
  ) : (
    <main className="relative bg-white w-full min-h-screen items-center flex flex-col">
      <Nav />
      {/* Honeycomb */}
      <section className="HoneyComb text-lg px-4 py-2 text-black/60 border-[1px] border-black/10 w-full">
        Home / All European brands
      </section>
      {/* Items */}
      <section className="w-[clamp(250px,1000px,90vw)] flex-1 flex flex-col gap-2 py-4">
        <div className="heading text-3xl text-cormorant-garamond-light">
          All European brands
        </div>
        <div className="desc">
          Shop independent brands from around the world at wholesale prices.
        </div>
        <br />
        <div className="items grid grid-cols-4 gap-2 border-1 border-black/10">
          {All_European_brands.map((item, ind) => {
            return (
              <div
                key={ind}
                className="flex w-auto flex-col gap-4 items-center border-[1px] border-black/20"
              >
                <div className="img relative flex items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full aspect-square"
                  />
                  <div className="left-0"></div>
                </div>
                <div className="name font-medium text-sm">{item.name}</div>
                <div className="star flex gap-0.5 items-center">
                  <MdOutlineStarPurple500 />
                  {item.star}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Pagination */}
      <section className="w-screen py-4 px-3 flex gap-10 items-center justify-center border-[1px] border-black/20">
        <div className="previous px-10 leading-snug border-[1px] border-black">
          Previous
        </div>
        <div className="pagination flex gap-2 text-sm text-black/40">
          {Array.from({ length: 11 }, (_, index) => index).map((e, i) => {
            return (
              <div
                className="flex items-center justify-center p-2 px-3.5 rounded-full"
                key={i}
                style={i == 0 ? { background: "black", color: "white" } : {}}
              >
                {i + 1}
              </div>
            );
          })}
          ...{" "}
          <div className="flex items-center justify-center p-2 px-4 rounded-full">
            72
          </div>
        </div>
        <div className="previous px-10 leading-snug border-[1px] border-black">
          Next
        </div>
      </section>
      {/* keep Exploring */}
      <section className="flex flex-col relative w-[clamp(250px,1000px,90vw)] py-6 gap-6">
        <div className="heading text-cormorant-garamond-light text-3xl w-full flex items-center justify-center">
          Keep exploring
        </div>
        <div className="imgs grid grid-cols-3 gap-3">
          {Keep_Exploring.map((ele, ind) => {
            return (
              <div
                className="flex flex-col gap-3 w-auto items-center"
                key={ind}
              >
                <img src={ele.image} alt="" className="w-full" />
                <div className="name underline text-sm">{ele.name}</div>
              </div>
            );
          })}
        </div>
      </section>
      {/* You may be wondering */}
      <section className="flex gap-4 flex-col items-center my-[10vh]">
        <div className="heading text-cormorant-garamond-light text-4xl">
          You may be wondering
        </div>
        <div className="accordian border-t-[1px] border-b-[1px] border-black/20 py-5 w-[clamp(250px,1000px,90vw)] flex justify-between px-5 items-center cursor-pointer">
          How can I buy All European brands products at wholesale prices for my
          store?
          <FaAngleDown />
        </div>
        <div className="accordian border-t-[1px] border-b-[1px] border-black/20 py-5 w-[clamp(250px,1000px,90vw)] flex justify-between px-5 items-center cursor-pointer">
          How can I buy All European brands products at wholesale prices for my
          store?
          <FaAngleDown />
        </div>
      </section>
      {/* Ready to start buying wholesale online? */}
      <section className="w-full bg-[#595540] flex items-center justify-center py-[8vh] flex-col text-white gap-6">
        <div className="heading text-5xl text-cormorant-garamond-light ">
          Ready to start buying <br /> wholesale online?
        </div>
        <ul className="">
          <li className="flex gap-2 items-center">
            <GoArrowRight /> 60-day payment terms
          </li>
          <li className="flex gap-2 items-center">
            <GoArrowRight /> Free returns on all opening orders{" "}
          </li>{" "}
          <li className="flex gap-2 items-center">
            <GoArrowRight /> Unique products curated for your store
          </li>
        </ul>
        <div className="signupto px-5 py-3 bg-white text-black">
          Sign up to Shop
        </div>
      </section>
      {/* Discover products for your store on the Faire wholesale marketplace */}
      <section className="w-[clamp(250px,1300px,90vw)] my-[8vh] items-center justify-center gap-4 text-black/60">
        <div className="heading font-medium">
          Discover products for your store on the Faire wholesale marketplace
        </div>
        <div className="desc font">
          At Faire, we're empowering small business owners and independent
          brands to buy and sell wholesale goods online. If you're a retailer
          shopping for wholesale products, Faire offers you straight-forward
          financial terms and logistics that were previously only available to
          large retail chains. We also provide powerful sales, marketing, and
          analytics tools for brands, so sellers can simplify their wholesale
          businesses and expand their reach of independent shop owners.
        </div>
      </section>
      {/* Footer */}
      <section className="w-[clamp(250px,1400px,90vw)] flex justify-between my-9">
        <div className="menu grid grid-cols-3 gap-8">
          {footer.map((ele, i) => {
            return (
              <div className="col flex flex-col gap-3" key={i}>
                <div className="head font-medium">{ele.name}</div>
                <div className="items flex flex-col gap-1">
                  {ele.items.map((e, i) => (
                    <span className="" key={i}>
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="desc flex flex-col">
          <div className="heading text-xl">Get the Faire app</div>
          <div className="desc">
            Shop on the go, message brands, and track <br /> orders with the
            Faire app.
          </div>
          <div className="img flex gap-3">
            <img
              className="w-[140px] h-auto "
              src="https://cdn.faire.com/static/download-badges/app-store-en.svg"
              alt=""
            />
            <img
              className="w-[140px] h-auto "
              src="https://cdn.faire.com/static/download-badges/google-play-en.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Last */}
      <section className="w-full border-[1px] border-black/20 flex items-center justify-center py-8 mt-10">
        <div className="box w-[clamp(250px,1400px,90vw)] flex justify-between items-center">
          <div className="col flex flex-col gap-1 ">
            <span>©2024 Faire Wholesale, Inc.</span>
            <span>
              Terms of Service • Privacy Policy • Cookie Policy • IP Policy •
              Sitemap
            </span>
          </div>
          <div className="lang flex gap-1">
            <TbWorld className="text-2xl text-black/50" />
            English (US)
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
