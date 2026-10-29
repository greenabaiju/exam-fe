import axiosConfig from "./axiosConfig";
import { BASEURL } from "./BaseURL";

export const addStud = async (reqBody) => {
  return await axiosConfig("post", `${BASEURL}/student`, reqBody);
};
export const getStud = async () => {
  return await axiosConfig("get", `${BASEURL}/student`);
};
export const deleteStud = async (id) => {
  return await axiosConfig("delete", `${BASEURL}/student/${id}`);
};
export const singleStud = async (id) => {
  return await axiosConfig("get", `${BASEURL}/student/${id}`);
};
export const updateStud = async (id, reqBody) => {
  return await axiosConfig("put", `${BASEURL}/student/${id}`, reqBody);
};
