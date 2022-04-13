import styled from "@emotion/styled";
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
    ${({focus}) => focus ? "color:red" : "color: black"}
  }
  a{
      text-decoration:none;
  }
`;
export default function SideNav() {
  const pathName = useLocation().pathname;
    console.log(pathName)
  return (
    <Wrapper>
      <Link to="/home">
        <li>
          <img src={icon1} alt="" />
          <p focus={(+pathName === "/home")}>首頁</p>
        </li>
      </Link>
      <Link to="/game">
        <li>
          <img src={icon2} alt="" />
          <p focus={+(pathName === "/game")}>遊戲</p>
        </li>
      </Link>
      <Link to="/map">
        <li>
          <img src={icon3} alt="" />
          <p focus={+(pathName === "/map")}>地圖</p>
        </li>
      </Link>
      <Link to="/market">
        <li>
          <img src={icon4} alt="" />
          <p focus={+(pathName === "/market")}>市場</p>
        </li>
      </Link>
      <Link to="/community">
        <li>
          <img src={icon5} alt="" />
          <p focus={+(pathName === "/community")}>社群</p>
        </li>
      </Link>
      <Link to="/groupBuy">
        <li>
          <img src={icon6} alt="" />
          <p focus={+(pathName === "/groupBuy")}>團購</p>
        </li>
      </Link>
    </Wrapper>
  );
}
