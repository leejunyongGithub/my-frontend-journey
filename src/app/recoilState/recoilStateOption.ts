import { atom } from "recoil";

interface Option {
  expanded: boolean;
  subExpanded: boolean;
  mode: string;
  title: string;
  subTitle: string;
  menu: string;
}

export const recoilStateOption = atom<Option>({
  key: "option",
  default: {
    expanded: true,
    subExpanded: false,
    mode: "light",
    title: "title",
    subTitle: "title",
    menu: "logo",
  },
});
