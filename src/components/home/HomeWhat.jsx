import styled from "@emotion/styled";

// img
import what from "img/home/web/what.png";
import what_bg from "img/home/mobile/what_bg.png";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: rgb(230, 230, 230);
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {
    display: block;
    height: 480px;
    background-image: url(${what_bg});
    background-repeat: no-repeat;
    background-size: cover;
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
  width: 550px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const Photo = styled.div`
  align-self: center;
  ${'' /* width: 450px; */}
  ${'' /* height: 318px; */}
  @media (max-width: 768px) {
    width: 315px;
    height: 223px;
  }
`;
const Right = styled.div`
  height: 318px;
  margin-left: 40px;
  display: grid;
  p {
    max-width: 560px;
    font-size: ${({ theme }) => theme.font.size.primary};
  }
  @media (max-width: 768px) {
    display: block;
    margin: 10px 0 0 0;
    h1 {
      font-size: ${({ theme }) => theme.font768.size.homeTitle};
      margin: 3px auto;
      width: 300px;
    }
    p {
      font-size: ${({ theme }) => theme.font768.size.primary};
      line-height:22px;
      width: 300px;
      margin: 3px auto;
    }
  }
`;
const ButtonWrapper = styled.div`
  align-self: end;
  @media (max-width: 768px){
    text-align:center;
    margin: 30px 0;
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
export default function HomeWhat() {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Photo>
            <img src={what} alt="" />
          </Photo>
        </Left>
        <Right>
          <h1>什麼是Regal幣和R點?</h1>
          <p>
            {
              "Regal幣是<Regalaxy>平臺的主要功能型代幣，可用於參與平臺所有經濟活動。"
            }
          </p>
          <p>金幣則主要在遊戲內部作為強化、購買某些道具等消耗。</p>
          <ButtonWrapper>
            <Button>前往購買</Button>
          </ButtonWrapper>
        </Right>
      </Container>
    </Wrapper>
  );
}
