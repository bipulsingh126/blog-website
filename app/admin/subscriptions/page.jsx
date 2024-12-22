"use client";

import SubTableItem from "@/components/AdminComponents/SubTableItem";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmail = async () => {
    try {
      const res = await axios.get("/api/email");
      toast.success(res.data.message);
      setEmails(res.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Error fetching emails");
    }
  };

  const deleteEmail = async (mongoId) => {
    try {
      const res = await axios.delete("/api/email", { params: { id: mongoId } });
      if (res.data.success) {
        toast.success(res.data.message);
        fetchEmail();
      } else {
        toast.error(res.data.message || "Error deleting email");
      }
    } catch (error) {
      console.log(error);
      toast.error(error || "Error deleting email");
    }
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 ">
      <h1>All Subscription</h1>
      <div className=" relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide  ">
        <table className="w-full text-sm  text-gray-500 ">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className=" hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubTableItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
