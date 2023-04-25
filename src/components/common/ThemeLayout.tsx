"use client";
import { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";
import { recoilStateOption } from "@/recoilState/recoilStateOption";
import { useEffect, useState } from "react";
import { getItem, setItem } from "@/utils";
import { LAYOUT_KEY, dark, light } from "@/constants";
import Loading from "../Loading";

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
