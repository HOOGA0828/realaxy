import { useState, useRef, useContext } from "react";
import styled from "@emotion/styled";

// hooks
import useClickOutsideDetector from "hook/useClickOutsideDetector";
//img
import logo from "img/logo/regalaxy_LOGO.png";
import menuNormal from "img/icon/menu_normal.png";
import menuPressed from "img/icon/menu_pressed.png";
//icon
import cart from "img/icon/cart.png";
import coin from "img/icon/coin.png";
import diamond from "img/icon/diamond.png";
import positive from "img/icon/positive.png";
import { Check } from "@emotion-icons/bootstrap/Check";
//component

// context
import { appContext } from "App.js";
const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.bgc.color.header};
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index:50;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 768px) {
    height: 40px;
  }
`;
const Left = styled.div`
  display: none;
  @media (max-width: 768px){
    display: flex;
  }
`;
const MenuImg = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-self: center;
    width: 30px;
    height: 30px;
  }
`;
const Middle = styled.div`
  img {
    width: 100px;
  }
  @media (max-width: 768px) {
    img {
      width: 60px;
    }
  }
`;
const LogoImg = styled.div`
  min-width: 115px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Right = styled.div`
  display: flex;
`;
const Money = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    display: flex;
    align-items: center;
    margin: 0 10px;
    p {
      margin: 0 3px;
      line-height: 33px;
      font-size: ${({ theme }) => theme.font.size.header};
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Chosen = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgb(230, 230, 230);
  cursor: pointer;
  position: relative;

  img {
    width: 33px;
    height: 33px;
  }
  @media (max-width: 768px) {
    width: 50px;
    img {
      width: 28px;
      height: 28px;
    }
    :nth-of-type(3) {
      display: none;
    }
    :nth-of-type(4) {
      display: none;
    }
  }
`;
const LanList = styled.ul`
  position: absolute;
  top: 100%;
  background: ${({ theme }) => theme.bgc.color.header};
  width: 80px;
  height: ${({ changeLan }) => (changeLan ? 120 : 0)}px;
  text-align: center;
  line-height: 60px;
  transition: 0.3s;
  overflow: hidden;
  li {
    list-style: none;
    border-top: 1px solid rgb(230, 230, 230);
  }
`;
const CheckIcon = styled(Check)`
  width: 20px;
  ${({ show }) => (show ? "" : "opacity: 0")}
`;
// click語言
const parseLang = (lang) => {
  switch (lang) {
    case "en":
      return "EN";
    case "zh-TW":
      return "中文";
    default:
      return "中文";
  }
};
export default function Header() {
  const { setLocale, isMenu, setIsMenu } = useContext(appContext);
  // 語言選擇處理
  const [changeLan, setChangeLan] = useState(false);
  const [langText, setLangText] = useState("zh-TW");
  const LangListRef = useRef(null);
  const changeLocale = (locale) => {
    setLocale(locale);
    setLangText(locale);
  };
  useClickOutsideDetector(LangListRef, () => {
    setChangeLan(false);
  });
  return (
    <Wrapper>
      {/* 左邊區塊 */}
      <Left>
        <MenuImg
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          <img src={isMenu ? menuNormal : menuPressed} alt="" />
        </MenuImg>
      </Left>
      {/* 中間logo */}
      <Middle>
        <LogoImg>
          <img src={logo} alt="" />
        </LogoImg>
      </Middle>
      {/* 右邊區塊 */}
      <Right>
        <Money>
          <div>
            <img src={coin} alt="" />
            <p>9453.21</p>
          </div>
          <div>
            <img src={diamond} alt="" />
            <p>16800.00</p>
          </div>
        </Money>
        <Chosen>
          <img src={positive} alt="" />
        </Chosen>
        <Chosen>
          <img src={cart} alt="" />
        </Chosen>
        <Chosen
          ref={LangListRef}
          onClick={() => {
            setChangeLan(!changeLan);
          }}
        >
          <p>{parseLang(langText)}</p>
          <LanList changeLan={changeLan}>
            <li
              onClick={() => {
                changeLocale("zh-TW");
              }}
            >
              中文
              <CheckIcon show={+(langText === "zh-TW")} />
            </li>
            <li
              onClick={() => {
                changeLocale("en");
              }}
            >
              EN
              <CheckIcon show={+(langText === "en")} />
            </li>
          </LanList>
        </Chosen>
      </Right>
      {/* <SideNav/> */}
    </Wrapper>
  );
}
