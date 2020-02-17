import axios from "axios";
const instance = axios.create({
  baseURL: "https://markitworld.com/api/v2/user/products",
  headers: {
    UserAddressId: 2378,
    StoreId: 1,
    Authorization: "446a6828200604377695aa034cf57e36"
  }
});

// instance.defaults.headers.common["Authorization"] =
//   "446a6828200604377695aa034cf57e36";

export default instance;
