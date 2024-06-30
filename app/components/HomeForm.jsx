"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "../store/userStore";
import axios from "axios";
const HomeForm = () => {
  const router = useRouter();
  const { setUser } = useStore();
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    agree_to_division: "no",
    state: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/readStates")
      .then((response) => {
        setStates(response.data.data.states);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/auth/checkEligibility", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        router.push("/step-form");
      })
      .catch((error) => {
        console.error("Error in POST request:", error);
      });
  };

  useEffect(() => {
    // console.log("Updated Form Data:", formData);
  }, [formData]);

  return (
    <div className="bg-white rounded-[8px] w-full lg:w-[80%] shadow-lg p-4 lg:p-8">
      <div>
        <h3 className="text-[35px] mb-[5px]">See if you Qualify</h3>
        <p className="text-[17px] mb-[5px]">
          Can you and your spouse agree to the division of property, assets and
          all child related issues?
        </p>
      </div>

      <div className="flex mb-[20px]">
        <span className="text-[18px] mr-[20px]">
          <input
            className="mr-[5px]"
            type="radio"
            id="yes"
            name="agree_to_division"
            value="yes"
            onChange={handleInputChange}
          />
          <label htmlFor="yes">Yes</label>
        </span>

        <span className="text-[18px]">
          <input
            className="mr-[5px]"
            type="radio"
            id="no"
            name="agree_to_division"
            value="no"
            onChange={handleInputChange}
          />
          <label htmlFor="no">No</label>
        </span>
      </div>

      <div className="mb-[20px]">
        <select
          name="state"
          id="state-select"
          value={formData.state}
          onChange={handleInputChange}
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
        >
          {states.map((state) => (
            <option key={state.id} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-between mb-[20px]">
        <input
          className="w-[45%] py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <input
          className="w-[45%] py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="text"
          name="lastname"
          id="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
      </div>

      <div className="mb-[20px]">
        <input
          className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Your Email"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#ffc137] py-[16px] px-[10px] border-[1px] rounded-[5px] mb-[10px] outline-none transition-all duration-200 hover:focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
      >
        Check Eligibility
      </button>

      <span className="text-[14px] text-gray-600 w-full">
        By clicking “Check Eligibility” you agree to the{" "}
        <a href="#" className="font-bold">
          Terms of Service
        </a>
      </span>
    </div>
  );
};

export default HomeForm;
