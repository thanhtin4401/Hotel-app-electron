import { httpsKLTN } from "./axiosAPI";

export let authService = {
  login: (user) => {
    return httpsKLTN.post("/api/taikhoan/login", user);
  },
};
