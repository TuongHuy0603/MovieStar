import { SET_CAROUSEL } from "../actions/types/CarouselType";

const stateDefault = {
  arrImg: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh:
        "https://coveredgeekly.com/wp-content/uploads/New-Character-Posters-For-Guardians-Of-The-Galaxy-Vol-.3-Revealed.jpg",
      tenPhim: "Guardians Of The Galaxy 3",
      moTa: "Cho dù vũ trụ này có bao la đến đâu, các Vệ Binh của chúng ta cũng không thể trốn chạy mãi mãi.",
      trailer: "https://www.youtube.com/watch?v=JqcncLPi9zw",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh:
        "https://movies.universalpictures.com/media/02-fx-dm-mobile-banner-1080x745-pl-f01-031323-64108e7aa3468-1.jpg",
      tenPhim: "Fast And Furios X",
      moTa: "Dominic Toretto phải bảo vệ phi hành đoàn và gia đình của mình khỏi Cipher, người hiện đang gia nhập lực lượng với Dante, con trai của trùm ma túy Hernan Reyes, tìm cách trả thù cho cái chết của cha mình.",
      trailer: "https://www.youtube.com/watch?v=M5bu3wYj68Q",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh:
        "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/12/Doraemon-Nobitas-Sky-Utopia-Anime-Movie-Opens-on-March-3-2023-in-Japan.jpg",
      tenPhim: "DORAEMON : NOBITA VÀ VÙNG ĐẤT LÝ TƯỞNG TRÊN BẦU TRỜI.",
      moTa: "Doraemon, Nobita và những người bạn của mình đi tìm Utopia, một vùng đất hoàn hảo trên bầu trời, nơi mọi người sống trong hạnh phúc, sử dụng một phi thuyền có chức năng bẻ cong thời gian. ",
      trailer: "https://www.youtube.com/watch?v=vc4tZj_DuWQ",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      //   state.arrImg = action.arrImg;
      //   return { ...state };
    }

    default:
      return { ...state };
  }
};
