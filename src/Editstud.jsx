import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleStud, updateStud } from "./services/allApi";
import { toast } from "react-toastify";


const Editstud = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stud, setstud] = useState({
    studname: "",
    email: "",
    course: "",
    phone: "",
  });
  useEffect(() => {
    getSingleStud();
  }, []);
  const getSingleStud = async () => {
    try {
      const response = await singleStud(id);
      setstud(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const onEdit = async () => {
    const response = await updateStud(id, stud);
    if (response.status == 200) {
      toast.success("Success");
      navigate("/allstud")
    }
  };
  return <div>
    <input
        value={stud.studname}
        onChange={(e) => setstud({ ...stud, studname: e.target.value })}
        type="text"
        placeholder="Enter Name"
      />
      <input
        value={stud.email}
        onChange={(e) => setstud({ ...stud, email: e.target.value })}
        type="email"
        placeholder="Enter Email"
      />
      <input
        value={stud.course}
        onChange={(e) => setstud({ ...stud, course: e.target.value })}
        type="text"
        placeholder="Enter course"
      />
      <input
        value={stud.phone}
        onChange={(e) => setstud({ ...stud, phone: e.target.value })}
        type="text"
        placeholder="Enter Phone"
      />
      <button onClick={onEdit}>Add Student</button>
  </div>;
};

export default Editstud;
