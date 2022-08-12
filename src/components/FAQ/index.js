import React, { useState } from "react";
import { i18next } from "../../translate/i18n";

export function Faq() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <div>
        <div
          className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 text-white"
          id="faq"
        >
          <h4 className="text-4xl mb-6 mt-16 text-white font-serif lg:text-center">
            FAQ
          </h4>
          <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 space-y-4 w-full">
            <div className="bg-white shadow rounded p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    {i18next.t("faq.appH2q1")}
                  </h2>
                </div>
                <button
                  onClick={() => setBox1(!box1)}
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box1 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul className="">
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      {i18next.t("faq.appPa1")}
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-5 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    {i18next.t("faq.appH2q2")}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box2 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      {i18next.t("faq.appPa2")}
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-5 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    {i18next.t("faq.appH2q3")}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  datamenu="true"
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box3 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      {i18next.t("faq.appPa3")}
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="bg-white shadow rounded p-5 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold leading-none text-gray-800">
                    {i18next.t("faq.appH2q4")}
                  </h2>
                </div>
                <button
                  onClick={() => setBox4(!box4)}
                  datamenu="true"
                  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
                >
                  {box4 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box4 && (
                <ul>
                  <li>
                    <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                      {i18next.t("faq.appPa4")}
                    </p>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
