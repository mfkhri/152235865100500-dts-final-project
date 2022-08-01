import axios from "axios";

// Di sini kita membuat instance dari axios
const mldbInstance = axios.create({
  baseURL: "https://themealdb.com/api/json/v1/1",
  // params: {
  //   // TODO: Jangan lupa masukkan API_KEY yang benarnya di sini yah !
  //   api_key: process.env.REACT_APP_TMDB_KEY,
  // },
});

// Jangan lupa diexport karena akan digunakan di tempat lainnya
export default mldbInstance;
