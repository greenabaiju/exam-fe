import React from "react";
import { useState } from "react";
import { addStud } from "./services/allApi";
import { toast } from "react-toastify";

const Home = () => {
  const [stud, setStud] = useState({
    studname: "",
    email: "",
    course: "",
    phone: "",
  });
  const onBtnClick = async () => {
    try {
      const response = await addStud(stud);
      if (response.status == 201) {
        toast.success("Student added Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <input
        value={stud.studname}
        onChange={(e) => setStud({ ...stud, studname: e.target.value })}
        type="text"
        placeholder="Enter Name"
      />
      <input
        value={stud.email}
        onChange={(e) => setStud({ ...stud, email: e.target.value })}
        type="email"
        placeholder="Enter Email"
      />
      <input
        value={stud.course}
        onChange={(e) => setStud({ ...stud, course: e.target.value })}
        type="text"
        placeholder="Enter course"
      />
      <input
        value={stud.phone}
        onChange={(e) => setStud({ ...stud, phone: e.target.value })}
        type="text"
        placeholder="Enter Phone"
      />
      <button onClick={onBtnClick}>Add Student</button>
    </>
  );
};

export default Home;
