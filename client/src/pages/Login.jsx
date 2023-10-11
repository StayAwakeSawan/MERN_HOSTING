import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setData } from "../redux/user/userSlice";
import { useNavigate } from "react-router";
import postLoginApi from "../services/auth/postLoginApi";

function Login() {
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("rerendinring");

  function getMeData() {}

  async function onSubmit(data) {
    // e.preventDefault();
    // console.log(name, password);
    console.log(data);

    // api call

    try {
      await postLoginApi({ name: data.name, password: data.password });
    } catch (e) {}

    // {token, userdata}
    dispatch(
      setData({ token: "adsfadssweqr", userData: { name: "random name" } })
    );
    navigate("/");
  }

  console.log(errors);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <h2>Login Form</h2>

      {/* <LoginForm getMeData={getMeData} /> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="input"
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}

            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-600 font-sm">Name is required</p>
          )}
        </div>
        <div className="mt-1">
          <label htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            {...register("password", { required: true })}
          />
        </div>
        <button className="primary-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
