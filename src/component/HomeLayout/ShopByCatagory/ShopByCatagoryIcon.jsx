import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopByCatagoryCard from "./ShopByCatagoryCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopByCatagoryIcon = () => {
  const [catagory, setCatagory] = useState("");
  const [singleCatagory, setSingleCatagory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const notify = (massage) => {
    toast(massage);
  };

  useEffect(() => {
    fetch(
      `https://jisan-repo-production.up.railway.app/toysByCategory/${catagory}`
    )
      .then((res) => res.json())
      .then((singleData) => {
        setSingleCatagory(singleData);
        setLoading(false);
      });
  }, [catagory]);

  const handelCatagiry = (name) => {
    setCatagory(name);
    setLoading(true);
  };

  const handleCategory = () => {
    setCatagory(inputValue);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (index == 0) {
      handelCatagiry("Car Toy");
    } else if (index == 1) {
      handelCatagiry("Bus Toy");
    } else if (index == 2) {
      handelCatagiry("Truck Toy");
    }
  };

  return (
    <div className="p-4 bg-slate-50  mt-20">
      <h1 className="text-2xl font-semibold text-center">
        Shop With Us in Defferent Catagory
      </h1>

      <ToastContainer />

      <Tabs className="lg:ml-12 ml-0 mt-12">
        <TabList className="flex justify-center items-center mb-8">
          <Tab
            className={`text-center p-4 rounded-md ${
              activeTab === 0 ? "shadow bg-white" : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            Car Category
          </Tab>
          <Tab
            className={`ml-4 p-4 text-center ${
              activeTab === 1 ? "shadow bg-white" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Bus Category
          </Tab>
          <Tab
            className={`ml-4 p-4 text-center ${
              activeTab === 2 ? "shadow bg-white" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Truck Category
          </Tab>
        </TabList>

        <TabPanel>
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
        </TabPanel>
        <TabPanel>
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
        </TabPanel>
        <TabPanel>
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
        </TabPanel>
      </Tabs>

      <div className="mt-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {singleCatagory?.map((singleDataCatagory) => (
          <ShopByCatagoryCard singleDataCatagory={singleDataCatagory} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCatagoryIcon;
