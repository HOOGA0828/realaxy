import styled from "@emotion/styled";

// img
import what from "img/home/web/what.png";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`;
const Left = styled.div`
  width: 550px;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Photo = styled.div`
  align-self: center;
  width: 450px;
  height: 318px;
`;
const Right = styled.div`
  min-height: 100%;
  margin-left: 40px;
  p {
    width: 560px;
    margin-top: 30px;
    font-size: ${({ theme }) => theme.font.size.primary};
  }
`;
const ButtonWrapper = styled.div`
`;
const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
  background: rgb(3, 193, 255);
  align-self:center;
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
