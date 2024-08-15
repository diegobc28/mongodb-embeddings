/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Headerbsp = ({ isHome }) => {
  return (
    <header
      className={`flex justify-between items-center p-5 ${
        isHome ? "flex-col text-center" : ""
      }`}
    >
      <div
        className={`flex items-center w-full ${
          isHome ? "justify-center" : "justify-start"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center ${
            isHome ? "justify-center mt-12" : ""
          }`}
        >
          <img
            src="/images/logo.png"
            alt="CASADEPAW Logo"
            className={`cursor-pointer ${isHome ? "h-24 md:h-32" : "h-12"}`}
          />
        </Link>
      </div>
      {/* 
      {!isHome && (
        <div className="flex items-center mt-4 md:mt-0">
          <a
            href="https://wa.me/+528130902546?text=Hola,%20quiero%20listar%20una%20propiedad!"
            className="flex items-center text-red-500"
          >
            <button className="flex items-center bg-red-500 text-white px-3 py-1.5 rounded md:px-3 md:py-1.5 lg:px-2 lg:py-1">
              <img
                src="/images/whatsapp_icon.png"
                alt="WhatsApp"
                className="h-5 mr-2 md:h-5 lg:h-4"
              />
              <strong className="text-xs md:text-xs lg:text-xs">
                Lista tu Propiedad!
              </strong>
            </button>
          </a>
        </div>
      )}
      */}
    </header>
  );
};

export default Headerbsp;
