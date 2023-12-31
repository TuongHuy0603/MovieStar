import React, { Fragment } from "react";
import { Tabs, Radio, Space } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";
const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };
  componentDidMount() {}

  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition} className=" overflow-scroll">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg"
                        width="50"
                      />{" "}
                      <br />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-200">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {/*Load phim tương ứng */}
                  <div
                    className=" overflow-scroll"
                    style={{ maxHeight: "1000px" }}
                  >
                    {cumRap.danhSachPhim.slice(0, 20).map((phim, index) => {
                      console.log("zxczxc", phim);
                      return (
                        <Fragment key={index}>
                          <div className="my-5">
                            <div className="row pb-2 mt-0 showTimes__row w-full">
                              <div className="col-12 col-md-3 col-lg-2">
                                <img
                                  className="img-fluid"
                                  src={
                                    phim.hinhAnh
                                      ? phim.hinhAnh
                                      : "https://avatars.githubusercontent.com/u/86156244?s=400&v=4"
                                  }
                                  style={{ height: 200, width: 150 }}
                                  alt
                                />
                              </div>
                              <div className="col-12 col-md-9 col-lg-10 mt-md-0">
                                <h3>{phim.tenPhim}</h3>
                                <p>{phim.moTa}</p>
                                <p>{cumRap.diaChi}</p>
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
                                      {phim.lstLichChieuTheoPhim
                                        ?.slice(0, 12)
                                        .map((lichChieu, index) => {
                                          return (
                                            <NavLink
                                              className=" bg-gray-200 p-2 d-block rounded-sm "
                                              to={`/checkout/${lichChieu.maLichChieu}`}
                                              key={index}
                                            >
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("hh:mm ")}
                                              <br />
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("A ")}
                                            </NavLink>
                                          );
                                        })}
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
                                    <span>105 MINS</span>
                                    <span>15</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <div className="bg-white" style={{ border: "2px solid orange" }}>
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </div>
    );
  }
}
