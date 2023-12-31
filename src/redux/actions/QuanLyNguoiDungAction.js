import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  GET_THONG_TIN_DAT_VE,
  GET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  console.log("abcxx", thongTinDangNhap);
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      console.log("abc");
      dispatch({
        type: DANG_NHAP_ACTION,
        thongTinDangNhap: result.data.content,
      });

      history.goBack();
      history.push("/");
    } catch (error) {
      alert(error.response.data.content);
      console.log("error", error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      console.log("action " + thongTinDangNhap);
      const result = await quanLyNguoiDungService.layThongTinNguoiDung(
        thongTinDangNhap
      );
      console.log("8888888" + result);
      dispatch({
        type: SET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data.content,
      });

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);

      alert("Đăng Ký thành công!!!");
      history.push("/login");
    } catch (error) {
      alert(error.response.data.content);
      console.log("error");
    }
  };
};
export const layUserAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layUser(taiKhoan);
      console.log("user", result);

      dispatch({
        type: GET_THONG_TIN_DAT_VE,
        thongTinDatVe: result.data.content.thongTinDatVe,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
export const layUsersAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layUsers();
      console.log("user", result);

      dispatch({
        type: GET_THONG_TIN_NGUOI_DUNG,
        quanLyThongTin: result.data.content,
      });
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const xoaUserAction = (maUser) => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyNguoiDungService.xoaUsers(maUser);
      console.log("result", result.data.content);
      alert("Xoá user thành công !");
      //Sau khi xoá load lại danh sách phim mới;
      dispatch(layUsersAction());
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
