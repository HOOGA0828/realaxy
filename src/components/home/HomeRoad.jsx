import styled from "@emotion/styled";

//img
import main from "img/home/web/road_bg.png";
import MBmain from "img/home/mobile/road.png";

const Wrapper = styled.div`
  width: 100%;
  background: rgb(168, 218, 235);
  position: relative;
  img {
    width: 100%;
    :nth-of-type(2) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    img {
      :nth-of-type(1) {
        display: none;
      }
      :nth-of-type(2) {
        display: block;
      }
    }
  }
`;

const Right = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 10%;
  h1 {
    padding: 35% 0 5% 0;
  }
  p {
    font-size: ${({ theme }) => theme.font.size.primary};
    max-width: 400px;
  }
  @media (max-width: 1260px) {
    right: 2%;

    h1 {
      padding: 5% 0;
    }
  }
  @media (max-width: 768px) {
    position: static;
    h1 {
      text-align: center;
      font-size: ${({ theme }) => theme.font768.size.homeTitle};
      padding: 10px 0;
    }
    p {
      font-size: ${({ theme }) => theme.font768.size.primary};
      line-height: 22px;
      width: 280px;
      margin: 3px auto;
    }
  }
`;
const ButtonWrapper = styled.div`
  padding: 20% 0;
  @media (max-width: 768px) {
    text-align: center;
    padding: 20px 0;
  }
`;
const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
  background: rgb(3, 193, 255);
`;
export default function HomeRoad() {
  return (
    <Wrapper>
      <img src={main} alt="" />
      <img src={MBmain} alt="" />
      <Right>
        <h1>未來展望白皮書</h1>
        <p>{"查看<REGALAXY>的歷程圖及未來展望，隨時取得新一手的消息"}</p>
        <ButtonWrapper>
          <Button>前往查看白皮書</Button>
        </ButtonWrapper>
      </Right>
    </Wrapper>
  );
}
