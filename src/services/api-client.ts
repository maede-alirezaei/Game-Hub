import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "da906274e6a942f6aef87cff9377b33a",
  },
});
