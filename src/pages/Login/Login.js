import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import styleLogin from "./Login.module.css";
// import "./login.css";
export default function Login(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
    },
  });

  return (
    <div>
      <div className style={{ height: '"100vh"}}' }}>
        <div className={styleLogin.background}>
          <div className={styleLogin.shape} />
          <div className={styleLogin.shape} />
        </div>
        <div className={styleLogin.background}>
          <div className={styleLogin.shape} />
          <div className={styleLogin.shape} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <h3>Login Here</h3>
          <label htmlfor="username">Username</label>
          <input
            name="taiKhoan"
            onChange={formik.handleChange}
            type="text"
            placeholder="Email or Phone"
          />
          <label htmlfor="password">Password</label>
          <input
            type="password"
            name="matKhau"
            onChange={formik.handleChange}
            placeholder="Password"
          />
          <button
            className="bg-indigo-500 text-gray-100  w-2/3 p-2  rounded-full tracking-wide
  //         font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
  //         shadow-lg"
          >
            Đăng nhập
          </button>
          <br />
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản?
            <NavLink
              to="register"
              className="cursor-pointer ml-3 text-white hover:text-indigo-800"
            >
              Đăng ký
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
