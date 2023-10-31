import axios from "axios";

export const newsServ = {
  news: (url) => {
    return axios({
      url: url,
      method: "GET",
    });
  },
};
