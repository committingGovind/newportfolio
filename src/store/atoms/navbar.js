import { atom } from "recoil";

export const navbaratom = atom({
  key: "navbaratom",
  default: {
    ref: null,
    id: "",
  },
});
