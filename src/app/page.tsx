"use client";
import { RecoilRoot } from "recoil";
import Layout from "./components/templates/Layout/Layout";
import { ThemeProvider } from "styled-components";

const theme = {
  light: {
    background: "#FFFFFF",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#FFFFFF",
  },
};

export default function Home() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </RecoilRoot>
  );
}
