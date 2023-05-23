import React, { useEffect, useState } from "react";
import useDynamicTitle from "../CustomHook/useDynamicTitle";
import AllToysTableBody from "./AllToysTableBody";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllToys = () => {
  useDynamicTitle("Toy Zone | All Toy");
  const [allToys, setAllToys] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch("https://jisan-repo-production.up.railway.app/allToys")
      .then((res) => res.json())
      .then((allToysData) => {
        setAllToys(allToysData.slice(0, 20));
        setLoading(false);
      });
  }, []);

  const handleCategory = () => {
    notify("Please Wait Searching");
    fetch(
      `https://jisan-repo-production.up.railway.app/toysByName/${inputValue}`
    )
      .then((res) => res.json())
      .then((allToysData) => {
        setAllToys(allToysData);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="mt-8 mb-8 ml-4 mr-4">
          <div className="flex">
            <input
              className="p-4 border-2 border-gray-400 flex-grow rounded-md"
              type="text"
              placeholder="Search By Name......."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <ToastContainer />
            <button
              onClick={() => handleCategory()}
              className="p-4 bg-orange-600 -ml-2 text-white font-semibold rounded-md border-t-2 border-r-2 border-b-2 border-gray-400"
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center mb-4">
            <div
              className="radial-progress bg-primary text-primary-content border-4 border-primary"
              style={{ "--value": 70 }}
            >
              <small className="text-[10px]"> Loading..</small>
            </div>
          </div>
        ) : (
          ""
        )}

        <table className="table w-full">
          {/* head */}

          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}

            {allToys?.map((singleToy) => (
              <tr key={singleToy?._id}>
                <AllToysTableBody singleToy={singleToy}></AllToysTableBody>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
