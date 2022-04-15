import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";

// theme
import { theme01 } from "theme/theme01.js";
//component
import Header from "pages/Header";
import SideNav from "pages/SideNav";
import Game from "pages/Game";
import GroupBuy from "pages/GroupBuy";
import Map from "pages/Map";
import Market from "pages/Market";
import Home from "pages/Home";
import Community from "pages/Community";
// 多語言套件
import { IntlProvider } from "react-intl";
// 語言包
import zhTW from "lang/zh-TW.json";
import en from "lang/en.json";
// -----------------------------------------------
export const appContext = createContext();

// -----------------------------------------------
const ContentWrapper = styled.div`
  display: flex;
`;
const PageWrapper = styled.div`
/* 減去側邊sidNav */ 
    width: calc(100vw - 100px);
    @media(max-width: 768px){
      width: 100%;
    }
`
const AA = styled.div`
  height: 200vh;
`;
function App() {
  // 多語言切換---------------------------------
  const [lang, setLang] = useState(zhTW);
  const [locale, setLocale] = useState("zh-TW");
  // 取得語言包
  const getLang = async () => {
    const reg = /zh-TW|en/;
    let haveLang = reg.test(locale);
    if (!haveLang) {
      setLocale("en");
      return;
    }

    // 取得src裡的語言包
    switch (locale) {
      case "zh-TW":
        setLang(zhTW);
        break;
      default:
        setLang(en);
        break;
    }
  };
  //--------------------------------------------
  // menu icon 點選狀態
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    const locale = window.navigator.language;
    setLocale(locale);
  }, []);
  // 切換語言
  useEffect(() => {
    getLang();
  }, [locale]);
  // context
  const theContext = {
    setLocale,isMenu,setIsMenu
  };

  return (
    <appContext.Provider value={theContext}>
      <ThemeProvider theme={theme01}>
        <IntlProvider messages={lang} locale={locale} defaultLocale="en">
          <Header />
          <ContentWrapper>
            <SideNav />
            <PageWrapper>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/map" element={<Map />} />
                <Route path="/market" element={<Market />} />
                <Route path="/community" element={<Community />} />
                <Route path="/groupBuy" element={<GroupBuy />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </PageWrapper>
          </ContentWrapper>
        </IntlProvider>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
