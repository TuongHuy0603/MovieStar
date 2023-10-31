import React, { useEffect, useState } from "react";
import { Button, Tabs } from "antd";
import { newsServ } from "../../services/newsService";

export default function News() {
  let [check, setCheck] = useState("Xem thêm");
  let [arr, setArr] = useState([]);
  let [children0, setChildren0] = useState(<></>);
  let [children1, setChildren1] = useState(<></>);
  let [children2, setChildren2] = useState(<></>);
  const items = [
    {
      key: "1",
      label: (
        <div className="text-[#e5383b] font-medium text-[18px]">
          Điện Ảnh 24h
        </div>
      ),
      children: children0,
      url: "https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02",
    },
    {
      key: "2",
      label: (
        <div className="text-[#e5383b] font-medium text-[18px]">Review</div>
      ),
      children: children1,
      url: "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02",
    },
    {
      key: "3",
      label: (
        <div className="text-[#e5383b] font-medium text-[18px]">Khuyến mãi</div>
      ),
      children: children2,
      url: "https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02",
    },
  ];
  let cloneArr = [];

  useEffect(() => {
    items.map((item, index) => {
      newsServ
        .news(item.url)
        .then((res) => {
          cloneArr[index] = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    setArr(cloneArr);
  }, []);

  let contentChildren = (index) => {
    let contentHTML = arr[index].map((item, index) => {
      if (index <= 3) {
        if (index <= 1) {
          return (
            <div key={index} className="space-y-2 p-3 lg:col-span-3">
              <img src={item.img} className="rounded-lg w-full" />
              <p className="font-bold">{item.title}</p>
              <p className="item-content">{item.text}</p>
            </div>
          );
        } else {
          return (
            <div
              key={index}
              className="space-y-2 p-3 lg:col-span-2 lg:row-span-4"
            >
              <img src={item.img} className="rounded-lg w-full" />
              <p className="font-bold">{item.title}</p>
              <p className="item-content text-justify pr-30">{item.text}</p>
            </div>
          );
        }
      } else {
        return (
          <div
            key={index}
            className="space-y-2 p-3 flex space-x-3 lg:col-span-2"
          >
            <img src={item.img} className="rounded-lg w-[50px]" />
            <p className="truncate">{item.title}</p>
          </div>
        );
      }
    });
    if (index == 0) {
      setChildren0(contentHTML);
    } else if (index == 1) {
      setChildren1(contentHTML);
    } else {
      setChildren2(contentHTML);
    }
  };
  let test = () => {
    if (check == "Rút gọn") {
      setCheck("Xem thêm");
      document.querySelector("#news .ant-tabs-content-holder").style.display =
        "none";
      items.map((item) => {
        return (item.children = "");
      });
    } else {
      setCheck("Rút gọn");
      document.querySelector("#news .ant-tabs-content-holder").style.display =
        "block";
      items.map((item, index) => {
        return contentChildren(index);
      });
    }
  };

  return (
    <div
      id="news"
      className="lg:px-48 md:px-10 mt-10 flex justify-center flex-col"
    >
      <Tabs items={items} centered />
      <div className="text-center py-10">
        <button
          type="button"
          className=" text-white font-bold py-2 px-4 rounded"
          style={{ backgroundColor: "tomato" }}
          onClick={test}
        >
          {check}
        </button>
      </div>
    </div>
  );
}
