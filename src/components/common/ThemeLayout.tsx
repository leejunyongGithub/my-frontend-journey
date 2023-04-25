"use client";
import { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useEffect, useState } from "react";
import { getItem, setItem } from "@/utils";
import { LAYOUT_KEY } from "@/constants";
import Loading from "../Loading";

const light = {
  colors: {
    background: "#fbfbfa",
    color: "#5d5d5d",
    selected: "#5882fa",
    postBackground: "#fff",
    hover: "#ededed",
    scroll: "#58acfa",
    content: "#fff",
    tooltip: "",
    text: "#000",
    contentHover: "#95c3f5",
    borderBottom: "#ededed",
  },
};

const dark = {
  colors: {
    background: "#353332",
    color: "#fff",
    selected: "#e52b88",
    postBackground: "#272727",
    hover: "#5d5959",
    scroll: "#ca1560",
    content: "#292929",
    tooltip: "#e52b88",
    text: "#fff",
    contentHover: "#353332",
    borderBottom: "#3f3f3f",
  },
};

function ThemeLayout(props: any) {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useRecoilState(recoilStateOption);
  const { mode } = option;

  useEffect(() => {
    const data = getItem(LAYOUT_KEY);
    const path = window.location.pathname;
    const parsePath =
      path === "/"
        ? "logo"
        : path.split("/").length >= 3
        ? path.substring(1, path.lastIndexOf("/"))
        : path.substring(1);
    if (!data) {
      const payload = {
        expanded: true,
        subExpanded: false,
        mode: "light",
        title: "title",
        subTitle: "title",
        menu: parsePath,
        category: [],
      };
      setItem(LAYOUT_KEY, payload);
      setOption(payload);
    } else {
      if (data.menu !== parsePath) {
        setItem(LAYOUT_KEY, {
          ...data,
          menu: parsePath,
        });
        setOption({
          ...data,
          menu: parsePath,
        });
      } else {
        setOption(data);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return <ThemeProvider theme={mode === "dark" ? dark : light}>{loading ? <Loading /> : children}</ThemeProvider>;
}

export default ThemeLayout;
