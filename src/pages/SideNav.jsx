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

const Wrapper = styled.ul`
  width: 100px;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
  background: rgb(255, 255, 255);
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
    margin: 15px 0 0;
  }
  p {
    text-align: center;
    font-weight:bold;
  }
  a{
      text-decoration:none;
  }
  @media(max-width: 768px){
    position:absolute;
    left:-100px;
  }
`;
export default function SideNav() {
  const pathName = useLocation().pathname;
  return (
    <Wrapper>
      <Link to="/home">
        <li>
          <img src={icon1} alt="" />
          <p style={pathName === "/home" ? {color: "rgb(3,192,255)"} : {color: "black"}}>首頁</p>
        </li>
      </Link>
      <Link to="/game">
        <li>
          <img src={icon2} alt="" />
          <p style={pathName === "/game" ? {color: "rgb(3,192,255)"} : {color: "black"}}>遊戲</p>
        </li>
      </Link>
      <Link to="/map">
        <li>
          <img src={icon3} alt="" />
          <p style={pathName === "/map" ? {color: "rgb(3,192,255)"} : {color: "black"}}>地圖</p>
        </li>
      </Link>
      <Link to="/market">
        <li>
          <img src={icon4} alt="" />
          <p style={pathName === "/market" ? {color: "rgb(3,192,255)"} : {color: "black"}}>市場</p>
        </li>
      </Link>
      <Link to="/community">
        <li>
          <img src={icon5} alt="" />
          <p style={pathName === "/community" ? {color: "rgb(3,192,255)"} : {color: "black"}}>社群</p>
        </li>
      </Link>
      <Link to="/groupBuy">
        <li>
          <img src={icon6} alt="" />
          <p style={pathName === "/groupBuy" ? {color: "rgb(3,192,255)"} : {color: "black"}}>團購</p>
        </li>
      </Link>
    </Wrapper>
  );
}
