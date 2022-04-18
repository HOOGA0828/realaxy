import styled from "@emotion/styled";

// img
import main from "img/home/web/create.png";
import MBbg from "img/home/mobile/create_bg.png";
const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: rgb(3, 193, 255);
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    background-image: url(${MBbg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 440px;
  }
`;
const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: grid;
    width: 340px;
  }
`;
const Left = styled.div`
  color: white;
  h1 {
    text-align: center;
    margin: 50px 0 20px 0;
  }
  p {
    font-size: ${({ theme }) => theme.font.size.primary};
    max-width: 560px;
    line-height: 30px;
    margin: 10px 0 20px 0;
  }
  @media (max-width: 768px) {
    color: black;
    grid-area: 2/1/2/2;
    h1 {
      margin: 10px 0 0px 0;
      font-size: ${({ theme }) => theme.font768.size.homeTitle};
    }
    p {
      font-size: ${({ theme }) => theme.font768.size.primary};
      line-height: 22px;
      width: 300px;
      margin: 3px auto;
    }
  }
`;
const Right = styled.div``;
const Photo = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    margin: 10px 0 0 0;
  }
`;
const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 20px;
  background: ${({ theme }) => theme.button.background.home_create};
`;
export default function HomeCreate() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <h1>創作屬於自己的樂園</h1>
          <p>
            {
              "在<Regalaxy>中，用戶可以購買土地組建版圖，並通過建造與升級建築、招募各式各樣的居民，打造具個人魅力，獨一無二的繁華都市。"
            }
          </p>
          <ButtonWrapper>
            <Button>前往遊戲</Button>
          </ButtonWrapper>
        </Left>
        <Right>
          <Photo>
            <img src={main} alt="" />
          </Photo>
        </Right>
      </Container>
    </Wrapper>
  );
}
