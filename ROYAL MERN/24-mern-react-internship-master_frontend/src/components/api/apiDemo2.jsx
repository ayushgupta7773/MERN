import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  const postApiData = async () => {
    const user = {
      name: "Ayush",
      age: 20,
      email: "ayush@gmail.com",
      isActive: true,
    };
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user",
        user
      );
      console.log(res);
      console.log(res.data);
      if (res.status === 201) {
        //alert("Data posted successfully..");
        toast.error("🦄 Wow so easy!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        alert("Data not posted..");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1>POST API</h1>
      <button onClick={() => postApiData()}>POST</button>
    </div>
  );
};
