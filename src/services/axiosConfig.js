import axios from "axios";
import { toast } from "react-toastify";

 const axiosConfig = async (method, url, data) => {
  try {
    const res = await axios({
      method: method,
      url: url,
      data: data
    });
    return res;
  } catch (error) {
    console.log(error);
    toast.error("Something went Wrong");
    throw error;
  }
};
export default axiosConfig;
