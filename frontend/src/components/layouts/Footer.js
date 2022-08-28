import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-zinc-900 flex py-12 text-zinc-100">
        <div className="w-[40%] pl-4 flex items-center">
          <div className="w-[70%]">
            <img
              src="https://i.ibb.co/4YJYRdJ/LOGO2.png"
              alt=""
              className="h-16 w-auto"
            />
            <p className="mt-4 text-justify text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur dolores illum molestiae rerum esse autem quo ipsam
              atque sed architecto.
            </p>
            <div className="flex gap-4 mt-4">
              <div>FB</div>
              <div>Twitter</div>
              <div>YT</div>
              <div>In</div>
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col gap-4 text-zinc-400">
          <div className="font-semibold text-lg text-zinc-100">SOLUTIONS</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
        </div>
        <div className="w-[20%] flex flex-col gap-4 text-zinc-400">
          <div className="font-semibold text-lg text-zinc-100">LEGAL</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
        </div>
        <div className="w-[20%] flex flex-col gap-4 text-zinc-400">
          <div className="font-semibold text-lg text-zinc-100">COMPANY</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
          <div>Lorem, ipsum dolor.</div>
        </div>
      </div>
      <div className="h-12 px-12 bg-black text-white flex items-center justify-around">
        <div>@KRAKEN PC HOUSE - All Right Reserved</div>
        <div className="flex gap-2">
          <div>Payment Logo1</div>
          <div>Payment Logo1</div>
          <div>Payment Logo1</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
