import React, { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import MyToysTable from "./MyToysTable";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyToys = () => {
  useDynamicTitle("Toy Zone | My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMtToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((myToysData) => setMtToy(myToysData));
  }, [user]);

  const handelDeleteNew = (_id) => {
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          // Remove the deleted item from the myToy state
          setMtToy((prevMyToys) => prevMyToys.filter((toy) => toy._id !== _id));
        }
      });
  };

  return (
    <div>
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
