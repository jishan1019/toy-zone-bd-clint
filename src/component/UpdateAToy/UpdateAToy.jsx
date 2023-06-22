import React, { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateAToy = () => {
  useDynamicTitle("Toy Zone | Update A Toy");
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [serverData, setServerData] = useState({});

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch(`https://toy-server-one.vercel.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((result) => setServerData(result));
  }, []);

  const {
    toyPhotoUrl,
    toyName,
    sellerName,
    sellerEmail,
    toyRating,
    subCatagoryName,
    toyPrise,
    toyQuentitiy,
    toyDescription,
  } = serverData || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    notify("Please Wait");

    fetch(`https://toy-server-one.vercel.app/updateToys/${data?._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          notify("Data Update Successfully");
        }
      });
  };

  return (
    <div className="bg-rose-100 m-8 rounded-md">
      <h1 className="font-semibold text-2xl text-center mt-8 pt-10 mb-2">
        Wellcome Back
      </h1>
      <p className="text-center text-orange-800">
        Please give all info for add a toy
      </p>
      <ToastContainer />
      <div className="mt-8 mb-8 p-4 min-h-[70vh]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
            <input
              defaultValue={toyName}
              className="p-3 rounded-md w-full block"
              placeholder="Enter Toy Name"
              {...register("toyName", { required: true })}
            />

            <input
              defaultValue={toyPhotoUrl}
              className="p-3 rounded-md w-full block "
              placeholder="Enter Toy Photo Url"
              {...register("toyPhotoUrl", { required: true })}
            />

            <input
              defaultValue={user?.displayName}
              className="p-3 rounded-md w-full hidden "
              placeholder="Enter Seller Name"
              {...register("sellerName", { required: true })}
            />

            <input
              defaultValue={id}
              className="p-3 rounded-md w-full hidden "
              placeholder="Enter Seller Id"
              {...register("_id", { required: true })}
            />

            <input
              defaultValue={user?.email}
              className="p-3 rounded-md w-full hidden "
              placeholder="Enter Seller Email"
              {...register("sellerEmail", { required: true })}
            />

            <input
              defaultValue={subCatagoryName}
              className="p-3 rounded-md w-full block "
              placeholder="Enter Sub Catagory Name ex:(car)"
              {...register("subCatagoryName", { required: true })}
            />

            <input
              type="number"
              defaultValue={toyPrise}
              className="p-3 rounded-md w-full block "
              placeholder="Enter Toy Prise ex:(20)"
              {...register("toyPrise", { required: true })}
            />

            <input
              type="number"
              defaultValue={toyRating}
              className="p-3 rounded-md w-full block "
              placeholder="Enter Toy Rating ex:(4.5)"
              {...register("toyRating", { required: true })}
            />

            <input
              type="number"
              defaultValue={toyQuentitiy}
              className="p-3 rounded-md w-full block "
              placeholder="Enter Avalable Quentity ex:(110)"
              {...register("toyQuentitiy", { required: true })}
            />

            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <textarea
            defaultValue={toyDescription}
            cols="5"
            rows="5"
            className="p-3 rounded-md w-full block mt-4"
            placeholder="Enter Toy Description"
            {...register("toyDescription", { required: true })}
          />

          <input
            className="w-full text-center p-3 mt-8 bg-blue-600 text-white font-semibold"
            type="submit"
            value="Update A Toys"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateAToy;
