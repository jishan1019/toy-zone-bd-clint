import React from "react";

const MyToysTable = () => {
  return (
    <>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://media.istockphoto.com/id/687165852/photo/toys.jpg?b=1&s=170667a&w=0&k=20&c=aECJBVRGL3jNtrbiHOTMq1-5rSv3xeNUpZywEZYwvX4="
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
          </div>
        </div>
      </td>

      <td>Jishan Hossain</td>
      <td>p@gmail.com</td>
      <td>Car-Toys</td>

      <td>$:10.16</td>
      <td>325</td>
      <th>
        <button className="btn btn-ghost btn-xs pl-4 pr-4 pt-3 pb-6 text-white font-semibold bg-orange-600">
          details
        </button>
        <button className="btn btn-ghost btn-xs outline pl-4 ml-4 pr-4 pt-3 pb-6  font-semibold bg-white">
          Delete
        </button>
      </th>
    </>
  );
};

export default MyToysTable;
