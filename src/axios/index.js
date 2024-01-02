import axios from "axios";
import { Alert } from "react-native";
axios.defaults.baseURL = "http://192.168.1.12:8000/api";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response) {
    //   // Yêu cầu đã được gửi và nhận được phản hồi lỗi từ máy chủ
    //   console.log("Lỗi phản hồi:", error.response.data);
    //   console.log("Mã phản hồi:", error.response.status);
    //   console.log("Thông báo lỗi:", error.response.statusText);
    // } else if (error.request) {
    //   // Yêu cầu đã được gửi nhưng không nhận được phản hồi
    //   console.log("Không có phản hồi từ máy chủ:", error.request);
    // } else {
    //   // Có lỗi xảy ra trong quá trình gửi yêu cầu
    //   console.log("Lỗi:", error.message);
    // }
    Alert.alert(
      "Lỗi mạng",
      "Ứng dụng chỉ dành cho nội bộ công ty, vui lòng kết nối wifi công ty để tiếp tục.",

      [
        {
          text: "Đóng",
        },
      ]
    );
    return Promise.reject(error);
  }
);
export default customerAxios = axios;
