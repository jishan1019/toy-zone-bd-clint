import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const OnSellProduct = () => {
  return (
    <div className="mt-16 mb-12">
      <h1 className="font-semibold text-center lg:text-2xl">
        On-Sale Product.
      </h1>
      <p className="text-center mt-3 mb-6 text-orange-800">
        Check out on-sale Producs
      </p>

      {/* On Sell Product */}
      <div className="w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-2 mx-auto gap-2 ">
        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24"
              src="https://i.ibb.co/Pzs3nqP/61-KTa66-Qlj-L-AC-UL600-FMwebp-QL65-300x220.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Baby Toy Truck</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-200" />
            </p>
            <p className="text-sm">Prise: $12.04</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24"
              src="https://static-01.daraz.com.bd/p/mdc/c4a22220159be859ff101960dbc3b145.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Turbo Thunder</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-200" />
              <StarIcon className="h-6 w-6 text-orange-200" />
            </p>
            <p className="text-sm">Prise: $8.00</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24 ml-2"
              src="https://static-01.daraz.com.bd/p/fd10ce362d5ff2639c691db922a4942f.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Lightning Bolt</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
            </p>
            <p className="text-sm">Prise: $16.00</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24"
              src="https://static-01.daraz.com.bd/p/443f156b79e1f592a9a8d9a07485bc2d.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Super Duper Racher</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-200" />
            </p>
            <p className="text-sm">Prise: $7.00</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24 ml-4"
              src="https://static-01.daraz.com.bd/p/1e3ef4b6cf46eda79a3f0d0d3c3a61ef.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Chu Chu Train</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-200" />
              <StarIcon className="h-6 w-6 text-orange-200" />
            </p>
            <p className="text-sm">Prise: $20.00</p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow">
          <figure>
            <img
              className="h-24"
              src="https://static-01.daraz.com.bd/p/e18bd27ea832a6756e5fee0820b303df.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">Music Toy Car</h2>
            <p className="flex">
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-500" />
              <StarIcon className="h-6 w-6 text-orange-200" />
            </p>
            <p className="text-sm">Prise: $15.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSellProduct;
