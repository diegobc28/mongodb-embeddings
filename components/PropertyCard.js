/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const PropertyCard = ({
  id,
  title,
  location,
  price,
  allowed,
  images,
  currency,
  period,
}) => {
  // Formatear el precio con comas
  const formattedPrice = price.toLocaleString("en-US");

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <Link href={`/propiedades/${id}`} target="_blank">
        <div className="border rounded-lg overflow-hidden cursor-pointer">
          <Image
            src={images[0]}
            alt={title}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl mb-2">{title}</h2>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-800 font-bold">
              {formattedPrice} {currency}/{period}
            </p>
            <div className="flex gap-2 mt-2">
              {allowed.includes("dog") && (
                <span className="bg-green-200 px-2 py-1 rounded-full">
                  Perro
                </span>
              )}
              {allowed.includes("cat") && (
                <span className="bg-blue-200 px-2 py-1 rounded-full">Gato</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
