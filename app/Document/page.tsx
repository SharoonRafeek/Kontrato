"use client";

import React, { useState, ChangeEvent } from "react";

let heading = "Hello World";
let Agreement =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

let ClientName = "John Doe";
let ClientAddress = "123 Main St";
let ClientPhone = "Anytown";
let ClientEmail = "NY";

let AgencyName = "John Doe";
let AgencyAddress = "123 Main St";
let AgencyPhone = "Anytown";
let AgencyEmail = "NY";

let paymentSchedule =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

let projectTimeline =
  "Lorem ipsuLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.m dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

let TermsAndCondition =
  "Lorem ipsuLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.m dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";

const Document = () => {
  const [imagePreview1, setImagePreview1] = useState<string | null>(null);
  const [imagePreview2, setImagePreview2] = useState<string | null>(null);

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    imageIndex: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (imageIndex === 1) {
          setImagePreview1(reader.result as string);
        } else if (imageIndex === 2) {
          setImagePreview2(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      if (imageIndex === 1) {
        setImagePreview1(null);
      } else if (imageIndex === 2) {
        setImagePreview2(null);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <div className="space-y-7 w-full max-w-3xl">
        <h1 className="mt-7 text-6xl font-semibold text-center">{heading}</h1>
        <p className="text-2xl text-center">{Agreement}</p>

        {/* Client Information */}
        <h3 className="font-semibold">Client Information</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-md p text-left ">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Client Name
                </th>
                <td className="px-6 py-4">{ClientName}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Client Address
                </th>
                <td className="px-6 py-4">{ClientAddress}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Client Phone Number
                </th>
                <td className="px-6 py-4">{ClientPhone}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Client Email
                </th>
                <td className="px-6 py-4">{ClientEmail}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Agency Information */}

        <h3 className="font-semibold">Agency Information</h3>
        <div className="relative overflow-x-auto">
          <table className="w-full text-md p text-left ">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Agency Name
                </th>
                <td className="px-6 py-4">{AgencyName}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Agency Address
                </th>
                <td className="px-6 py-4">{AgencyAddress}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Agency Phone number
                </th>
                <td className="px-6 py-4">{AgencyPhone}</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Agency Email
                </th>
                <td className="px-6 py-4">{AgencyEmail}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Schedule */}
        <h3 className="font-semibold">Payment Schedule</h3>
        <div>{paymentSchedule}</div>

        {/* Project Timeline */}
        <h3 className="font-semibold">Project Timeline</h3>
        <div>{projectTimeline}</div>

        {/* Terms and Conditions */}
        <h3 className="font-semibold">Terms and Conditions</h3>
        <div>{TermsAndCondition}</div>

        {/* Signature */}
        <div className="flex justify-between">
          <div className="w-1/2">
            <h3 className="font-semibold">Client Signature</h3>

            <div className="mb-4 mt-5">
              {imagePreview1 && (
                <div id="imagePreview1" className="mt-2">
                  <img
                    src={imagePreview1}
                    className="max-w-xs max-h-xs"
                    alt="Image Preview 1"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 1)}
                className="hidden"
                id="fileInput1"
              />
              <label
                htmlFor="fileInput1"
                className="bg-black rounded-md text-white p-2 cursor-pointer"
              >
                upload
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold">Agency Signature</h3>
            <div className="mt-5">
              {imagePreview2 && (
                <div id="imagePreview2" className="mt-2">
                  <img
                    src={imagePreview2}
                    className="max-w-xs max-h-xs"
                    alt="Image Preview 2"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, 2)}
                className="hidden"
                id="fileInput2"
              />
              <label
                htmlFor="fileInput2"
                className="bg-black rounded-md text-white p-2 cursor-pointer"
              >
                Upload
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
