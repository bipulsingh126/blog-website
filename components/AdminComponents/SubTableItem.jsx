import React from "react";

const SubTableItem = ({ email ,date , mongoId , deleteEmail }) => {
  const emailDate = new Date(date);

  return (
    <tr className=" bg-white border-b text-left  ">
      <th
        className=" px-6 py-4 font-medium  text-gray-900 whitespace-nowrap  "
        scope="row"
      >
        {email ? email : " No Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td onClick={()=>deleteEmail(mongoId)} className="px-6 py-4 cursor-pointer hover:text-red-600 duration-300 ">X</td>
    </tr>
  );
};

export default SubTableItem;
