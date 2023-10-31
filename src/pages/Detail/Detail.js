import React, { Fragment, useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment"; //npm i moment
import { NavLink } from "react-router-dom";
import { layThongTinPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapActions";
const TabPane = Tabs.TabPane;
export default function Detail(props) {
  const thongTinPhim = useSelector(
    (state) => state.QuanLyPhimReducer.filmDetail
  );
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //Lấy thông tin param từ url
    let { id } = props.match.params;

    dispatch(layThongTinPhimAction(id));
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  console.log("thongTinPhim", thongTinPhim.heThongRapChieu);
  return (
    <div
      style={{
        backgroundImage: `url(${thongTinPhim.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                src={thongTinPhim.hinhAnh}
                style={{ width: "100%", height: 300 }}
                alt="123"
              />
              <div className="col-span-2 ml-5" style={{ marginTop: "25%" }}>
                <p className="text-sm">
                  Ngày chiếu:{" "}
                  {moment(thongTinPhim.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-4xl leading-10">{thongTinPhim.tenPhim}</p>
                <p>{thongTinPhim.moTa}</p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <h1
              style={{
                marginLeft: "15%",
                color: "yellow",
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Đánh giá
            </h1>
            <h1
              style={{ marginLeft: "5%" }}
              className="text-green-400 text-2xl"
            >
              <Rate
                allowHalf
                value={thongTinPhim.danhGia / 2}
                style={{ color: "#78ed78", fontSize: 30 }}
              />
            </h1>
            <div className={`c100 p${thongTinPhim.danhGia * 10} big`}>
              <span className="text-white">{thongTinPhim.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1" style={{ minHeight: 300 }}>
              <Tabs tabPosition="top">
                {thongTinPhim?.heThongRapChieu?.map((heThongRap, index) => {
                  let { tabPosition } = "left";
                  return (
                    <TabPane
                      tab={
                        <img
                          src={heThongRap.logo}
                          width="50"
                          className="rounded-full"
                          alt={heThongRap.logo}
                        />
                      }
                      key={index + 10}
                    >
                      <Tabs tabPosition={tabPosition}>
                        {heThongRap.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <TabPane
                              tab={
                                <div
                                  style={{ width: "300px", display: "flex" }}
                                >
                                  <img src={cumRap?.hinhAnh} width="50" />{" "}
                                  <br />
                                  <div className="text-left ml-2">
                                    {cumRap?.tenCumRap}
                                    <p className="text-red-200">
                                      {cumRap?.diaChi}
                                    </p>
                                  </div>
                                </div>
                              }
                              key={index}
                            >
                              {/*Load phim tương ứng */}
                              {cumRap.lichChieuPhim
                                .slice(0, 12)
                                .map((lich, index) => {
                                  console.log("lich", lich);
                                  return (
                                    <Fragment key={index}>
                                      <div className="my-5">
                                        <div className="row pb-2 mt-0 showTimes__row">
                                          <div className="col-12 col-md-9 col-lg-10 mt-md-0">
                                            <span>Tên rạp: {lich.tenRap}</span>
                                            <br />
                                            <span>Giá vé: {lich.giaVe}</span>
                                            <p>
                                              <a href="#">
                                                FULL SYNOPSIS{" "}
                                                <i className="fa fa-angle-right" />
                                              </a>
                                            </p>
                                            <div className="row showTimes__runingTimes">
                                              <div className="col-12 col-md-9 align-items-start  ">
                                                <span>
                                                  <i className="fa fa-clock mb-2    " />{" "}
                                                  VIEWING TIMES
                                                </span>
                                                <div className="grid grid-cols-6 gap-6 text-center">
                                                  <NavLink
                                                    className=" bg-gray-200 p-2 d-block rounded-sm "
                                                    to={`/checkout/${lich.maLichChieu}`}
                                                    key={index}
                                                  >
                                                    {moment(
                                                      lich.ngayChieuGioChieu
                                                    ).format("hh:mm ")}
                                                    <br />
                                                    {moment(
                                                      lich.ngayChieuGioChieu
                                                    ).format("A ")}
                                                  </NavLink>
                                                </div>
                                              </div>
                                              <div
                                                className="
                col-12 col-md-3
                text-md-right
                mt-3 mt-md-0
                showTimes__mins
              "
                                              >
                                                <span>Thời lượng</span>
                                                <span>{lich.thoiLuong}</span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Fragment>
                                  );
                                })}
                            </TabPane>
                          );
                        })}
                      </Tabs>
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
