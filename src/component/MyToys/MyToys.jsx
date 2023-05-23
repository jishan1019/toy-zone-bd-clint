import React, { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import MyToysTable from "./MyToysTable";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToys = () => {
  useDynamicTitle("Toy Zone | My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMtToy] = useState([]);

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch(`https://jisan-repo-production.up.railway.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((myToysData) => setMtToy(myToysData));
  }, [user]);

  const handelDeleteNew = (_id) => {
    notify("Please Wait");
    fetch(`https://jisan-repo-production.up.railway.app/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          notify("Delete Success");
          setMtToy((prevMyToys) => prevMyToys.filter((toy) => toy._id !== _id));
        }
      });
  };

  return (
    <div>
      <ToastContainer />
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Seller</th>
            <th>Gmail</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        {myToy?.map((singleMyToy) => (
          <tbody>
            <MyToysTable
              key={singleMyToy._id}
              singleMyToy={singleMyToy}
              handelDeleteNew={handelDeleteNew}
            ></MyToysTable>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyToys;
