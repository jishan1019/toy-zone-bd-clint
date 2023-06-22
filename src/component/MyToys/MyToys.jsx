import React, { useContext, useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import MyToysTable from "./MyToysTable";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const MyToys = () => {
  useDynamicTitle("Toy Zone | My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMtToy] = useState([]);
  const [loading, setLoading] = useState(true);

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch(`https://toy-server-one.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((myToysData) => {
        setMtToy(myToysData);
        setLoading(false);
      });
  }, [user]);

  const handelDeleteNew = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Do You Wan't to delete this item?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://toy-server-one.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              notify("Delete Success");
              setMtToy((prevMyToys) =>
                prevMyToys.filter((toy) => toy._id !== _id)
              );
            }
          });

        swal("Delete Success!", {
          icon: "success",
        });
      } else {
        swal("Delete Cancel");
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div className="text-center mb-4 mt-4">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70 }}
          >
            <small className="text-[10px]">Loading..</small>
          </div>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Toy Image</th>
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
