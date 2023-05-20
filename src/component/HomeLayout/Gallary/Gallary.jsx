import React from "react";

const Gallary = () => {
  return (
    <section className=" mt-12 pl-6 pr-6 w-full">
      <h1 className="font-semibold text-center lg:text-2xl">
        VISIT OUR TOYS GALLARY.
      </h1>

      {/* Gallary Card */}

      <div className="grid grid-cols-1 text-orange-800 lg:grid-cols-3 lg:w-1/2 w-full mx-auto mt-8 gap-2">
        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/vXsfBVS/81-QPr-OUKk-CL-AC-UL600-FMwebp-QL65-600x472.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Sports Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://m.media-amazon.com/images/I/81BHCcmEqcL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Truck Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/frjhNGy/612im-Uh-CFe-L-AC-UL600-FMwebp-QL65-600x472.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Regular Car Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/K2hGJCM/81-D6-Gojp0k-L-AC-UL600-FMwebp-QL65-600x472.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Mini Fire Truck Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/xMHnTKW/710-Lhx-S-g-L-AC-UL600-FMwebp-QL65-600x472-1.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Mini Police Car Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/NsWx439/814-ZDx6krw-L-AC-UL600-FMwebp-QL65-600x472.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Bus Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://m.media-amazon.com/images/I/61ZkSEQaNcL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Mini Train Toys Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://i.ibb.co/7RJHZVM/71kflj9q-w-L-AC-UL600-FMwebp-QL65-600x392.webp"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Boat Gallary</h1>
          </div>
        </div>

        <div className="bg-rose-100 p-2 rounded">
          <div className="w-full">
            <img
              src="https://m.media-amazon.com/images/I/61MJL72vXeL._AC_UL600_FMwebp_QL65_.jpg"
              alt=""
            />
          </div>
          <div className="h-6 w-full">
            <h1 className="font-semibold">Bike Gallary</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
