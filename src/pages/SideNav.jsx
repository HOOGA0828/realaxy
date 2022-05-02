import styled from "@emotion/styled";
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// icon
import icon1 from "img/icon/icon_side_00.png";
import icon2 from "img/icon/icon_side_01.png";
import icon3 from "img/icon/icon_side_02.png";
import icon4 from "img/icon/icon_side_03.png";
import icon5 from "img/icon/icon_side_04.png";
import icon6 from "img/icon/icon_side_05.png";
import coin from "img/icon/coin.png";
import diamond from "img/icon/diamond.png";
// context
import { appContext } from "App";
import { FormattedMessage } from "react-intl";
const Wrapper = styled.ul`
  width: 100px;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
  background: rgb(255, 255, 255);
  transition: 0.3s;
  z-index:50;
  /* 右側單邊陰影*/
  box-shadow: 5px 0 8px -8px #000;
  li {
    list-style: none;
    display: grid;
    justify-content: center;
    cursor: pointer;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 15px auto 0;
  }
  p {
    text-align: center;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    height: calc(100vh - 40px);
    width: 120px;
    position: fixed;
    top: 40px;
    left: ${({ isMenu }) => (isMenu ? 0 : -120)}px;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: ${({ theme }) => theme.font768.size.primary};
    }
  }
`;
const PlayerName = styled.h5`
  display: none;
  @media (max-width: 768px) {
    max-width:120px;
    overflow: hidden;
    text-overflow:ellipsis;
    display: block;
    text-align:center;
    font-size:${({ theme }) => theme.font768.size.big};
    margin: 10px 0;
  }
`;
const Money = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    div {
      display: flex;
      align-items: center;
      margin: 10px 0 0 5px;
      img {
        margin: 0;
        width: 20px;
        height: 20px;
      }
      p{
        max-width:120px;
    overflow: hidden;
    text-overflow:ellipsis;
      }
    }
  }
`;
export default function SideNav() {
  const pathName = useLocation().pathname;
  const { isMenu } = useContext(appContext);
  return (
    <Wrapper isMenu={isMenu}>
      <PlayerName>testPlayer003</PlayerName>
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
      <Link to="/home">
        <li>
          <img src={icon1} alt="" />
          <p
            style={
              pathName === "/home"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav1" />
          </p>
        </li>
      </Link>
      <Link to="/game">
        <li>
          <img src={icon2} alt="" />
          <p
            style={
              pathName === "/game"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav2" />
          </p>
        </li>
      </Link>
      <Link to="/map">
        <li>
          <img src={icon3} alt="" />
          <p
            style={
              pathName === "/map"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav3" />
          </p>
        </li>
      </Link>
      <Link to="/market">
        <li>
          <img src={icon4} alt="" />
          <p
            style={
              pathName === "/market"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav4" />
          </p>
        </li>
      </Link>
      <Link to="/community">
        <li>
          <img src={icon5} alt="" />
          <p
            style={
              pathName === "/community"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav5" />
          </p>
        </li>
      </Link>
      <Link to="/groupBuy">
        <li>
          <img src={icon6} alt="" />
          <p
            style={
              pathName === "/groupBuy"
                ? { color: "rgb(3,192,255)" }
                : { color: "black" }
            }
          >
            <FormattedMessage id="sideNav6" />
          </p>
        </li>
      </Link>
    </Wrapper>
  );
}
