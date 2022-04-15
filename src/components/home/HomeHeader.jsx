import styled from "@emotion/styled";
import { EighteenMp } from "emotion-icons/material";

//img
import city from "img/home/web/header.png";
import MBcity from "img/home/mobile/header.png";
const Wrapper = styled.div`
  width: 100%;
  background: rgb(3, 192, 255);
  position: relative;
  img {
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
        margin: 0 auto;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    justify-content: center;
  }
`;
const Content = styled.div`
  width: 400px;
  background-color: rgba(244, 191, 83, 0.8);
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

const ArticleWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  color: white;
  h4 {
    margin-top: 40px;
  }
  h1 {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.font.size.h1title};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const Button = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  margin: 30px 20px 20px 0;
  border-radius: 20px;
  :nth-of-type(1) {
    color: black;
    background: white;
  }
  :nth-of-type(2) {
    background: #b95ee6;
  }
`;
export default function HomeHeader() {
  return (
    <Wrapper>
      <img src={city} alt="" />
      <img src={MBcity} alt="" />
      <ContentWrapper>
        <Content>
          <ArticleWrapper>
            <h4>副標題副標題</h4>
            <h1>標題標題標題!</h1>
            <ButtonWrapper>
              <Button>創建帳戶</Button>
              <Button>立即買地!!</Button>
            </ButtonWrapper>
          </ArticleWrapper>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
}
