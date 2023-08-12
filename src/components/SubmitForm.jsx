import React, { useEffect, useState } from "react";
import { statusOptions, typeOptions } from "../assets/optionsArray";
import { useDispatch } from "react-redux";

const SubmitForm = ({ fetchData }) => {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [originalDate, setOriginalDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let data = { status, type, originalDate };
    dispatch(fetchData(data));
  }, [dispatch, fetchData, status, type, originalDate]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(status, type, originalDate);
  //   let data = { status, type, originalDate };
  //   dispatch(fetchData(data));
  // };

  return (
    <section
      className=" w-11/12 m-auto border rounded-md p-5 -mt-10"
      style={{ marginTop: "32px" }}
    >
      <form noValidate>
        <div className="w-full flex flex-wrap align-middle justify-around">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              htmlFor="status"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Status:
            </label>
            <div className="relative">
              <select
                id="status"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {statusOptions.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* type */}
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Type:
            </label>
            <div className="relative">
              <select
                id="type"
                name="type"
                onChange={(e) => setType(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {typeOptions.map((option, i) => (
                  <option value={option.value} key={i}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* date */}
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              htmlFor="datepicker"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Original Launch:
            </label>
            <div className="relative">
              <input
                name="datepicker"
                aria-label="datepicker"
                type="datetime-local"
                id="datepicker"
                value={originalDate}
                onChange={(e) => setOriginalDate(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>

          {/* button */}
          {/* <div className="w-full md:w-1/4 flex justify-center aline-center mt-6 mb-6 md:mb-0">
            <button
              className="flex justify-center items-center w-64 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded"
              type="button"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div> */}
        </div>
      </form>
    </section>
  );
};

export default SubmitForm;
