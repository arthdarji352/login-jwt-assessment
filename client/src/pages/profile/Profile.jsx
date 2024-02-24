import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("token");
    navigate("/login");
  };

  const userData = async () => {
    const res = await fetch(`/api/auth/getuser`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const userData = await res.json();
    console.log(userData);
    setUser(userData);
  };

  useEffect(() => {
    userData();
  }, []);

  console.log(user);

  return (
    <Layout>
      <div className="  mt-32 lg:mt-20 lg:mx-[30em]">
        <div className="flex items-center justify-center  mb-2">
          <img
            className=" w-20"
            src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
            alt="img"
          />
        </div>
        <h1 className="text-center font-semibold">{user.name}</h1>
        <h1 className="text-center font-semibold">{user.email}</h1>
        <div className=" flex justify-center ">
          <button
            onClick={logout}
            className=" bg-green-700 w-full mt-5 text-white font-bold  px-2 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
