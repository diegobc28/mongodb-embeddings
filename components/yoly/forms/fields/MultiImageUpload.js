import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/outline";

//this component handles multiple image uploads
const MultiUploadImages = ({
  id,
  name,
  dimensions = "",
  label = "",
  errorMessage = "",
  register,
  uploadLabel = "Sube tus fotos",
  sublabel1 = "De 15 a 25 fotos",
  sublabel2 = "Formato: PNG/JPG/JPEG",
  sublabel3 = "Hasta 4MB por foto",
  gridClassNames = "",
  imageSources,
  totalImagesSize,
}) => {
  return (
    <div className="w-full ">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 "
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <div className="w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <div className="ICON w-full flex justify-center text-black">
              <div className="w-12">
                <PhotoIcon />
              </div>
            </div>
            <span className="h-24 w-24 text-gray-500 rounded-md overflow-hidden bg-gray-100"></span>
            <div className="flex text-sm justify-center text-gray-600">
              <label
                htmlFor={name}
                className="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black"
              >
                {imageSources ? (
                  <div className="length">
                    <span className="underline">Cambiar Archivos</span>
                  </div>
                ) : (
                  <span className="underline">{uploadLabel}</span>
                )}
                <input
                  id={name}
                  name={name}
                  type="file"
                  multiple
                  className="sr-only"
                  {...register}
                />
              </label>
            </div>
            <p className="text-xs  text-gray-500">{sublabel1}</p>
            <p className="text-xs  text-gray-500">{sublabel2}</p>
            <p className="text-xs  text-gray-500">{sublabel3}</p>

            {imageSources && imageSources.length > 0 && (
              <>
                <div className="info ">
                  <p className="text-xs text-gray-500 ">
                    {`${imageSources.length} fotos cargadas 📸`}
                  </p>
                  <p className="text-xs text-gray-500 pb-4">
                    Peso Total: {totalImagesSize}mb
                  </p>
                </div>
                <div
                  className={
                    gridClassNames
                      ? gridClassNames
                      : "grid grid-cols-5 grid-flow-row gap-2 bg-gray-100 p-4"
                  }
                >
                  {imageSources.map((imageSource, index) => {
                    return (
                      <div className="" key={index}>
                        <Image
                          src={imageSource}
                          alt={`image ${index}`}
                          width={150}
                          height={150}
                          objectFit="cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            <p className="text-xs text-gray-500">{dimensions}</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      </div>
    </div>
  );
};

export default MultiUploadImages;
