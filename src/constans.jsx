import axios from "axios";

export const API_BASE_URL = "https://interview-api.pilihjurusan.id/";
export const cfAccessClientId = "8853ca70ca342d5659242857edb234de.access";
export const cfAccessClientSecret =
  "eec6df88a2637183a3df2171f944a2b58eed7ed645eb368edb51437ee8cdd777";

// Create an Axios instance with the custom headers
export const axiosLogin = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "CF-Access-Client-Id": cfAccessClientId,
    "CF-Access-Client-Secret": cfAccessClientSecret,
    "Content-Type": "application/json", // Set your desired content type
  },
});
