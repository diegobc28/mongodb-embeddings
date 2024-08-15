/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "yet-another-react-lightbox/styles.css";
import { Lightbox } from "yet-another-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const dynamic = "force-dynamic";

const PropertyDetails = ({ property }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: property.images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setPhotoIndex(next),
  };

  const formattedPrice = property.price.toLocaleString("en-US");

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4"></header>
      <main className="mt-8">
        <h1 className="text-4xl mb-4">{property.title}</h1>
        <p className="text-green-600 text-2xl mb-4">
          {formattedPrice} {property.currency}/{property.period}
        </p>
        <div className="flex flex-wrap mb-8">
          <div className="w-full lg:w-1/2 pr-4">
            {property.images.length > 1 ? (
              <Slider {...settings}>
                {property.images.map((image, index) => (
                  <div key={index} onClick={() => openLightbox(index)}>
                    <img
                      src={image}
                      alt={property.title}
                      className="w-full h-64 object-cover mb-4 cursor-pointer"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-64 object-cover mb-4 cursor-pointer"
                onClick={() => openLightbox(0)}
              />
            )}
          </div>
          <div className="w-full lg:w-1/2 pl-4 mt-8">
            <p className="mb-4">{property.description}</p>
            <ul className="mb-4">
              <li>{property.rooms} Cuartos</li>
              <li>{property.bathrooms} Baños</li>
              <li>Hasta {property.people} personas</li>
              <li>
                Ubicación:{" "}
                <a
                  href={property.adress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {property.adress}
                </a>
              </li>
            </ul>
            <div className="flex gap-2 mb-4">
              {property.allowed.includes("dog") && (
                <span className="bg-green-200 px-2 py-1 rounded-full">
                  Perro
                </span>
              )}
              {property.allowed.includes("cat") && (
                <span className="bg-blue-200 px-2 py-1 rounded-full">Gato</span>
              )}
            </div>
            <Link
              href={`/registro?propertyId=${property.id}&owner=${property.owner}&ownernumber=${property.ownernumber}`}
            >
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Contactar
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center mt-8">
          <div className="ml-4">
            <h3 className="text-xl">Asesor / Propietario: {property.owner}</h3>
            <p>Teléfono: {property.ownernumber}</p>
          </div>
        </div>
      </main>

      {isOpen && (
        <Lightbox
          slides={property.images.map((image) => ({ src: image }))}
          index={photoIndex}
          open={isOpen}
          close={() => setIsOpen(false)}
          onPrev={() =>
            setPhotoIndex(
              (photoIndex + property.images.length - 1) % property.images.length
            )
          }
          onNext={() =>
            setPhotoIndex((photoIndex + 1) % property.images.length)
          }
        />
      )}
    </div>
  );
};

export default PropertyDetails;
