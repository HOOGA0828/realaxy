import styled from "@emotion/styled";

// icon
import facebook from "img/icon/global/facebook.webp";
import twitter from "img/icon/global/twitter.webp";
import discord from "img/icon/global/discord.webp";
import telegram from "img/icon/global/telegram.webp";
import medium from "img/icon/global/medium.webp";
const Wrapper = styled.div`
  width: 100%;
  background: rgb(52, 79, 88);
`;
const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  h2 {
    color: ${({ theme }) => theme.font.color.footer};
    margin: 20px 0;
  }
  li {
    list-style: none;
    color: white;
    font-size: ${({ theme }) => theme.font.size.primary};
    margin: 5px 0;
  }
  hr {
    margin: 50px 0 10px 0;
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
      font-size: ${({ theme }) => theme.font768.size.title};
      margin: 10px 0 0 0;
    }
    li {
      text-align: center;
      font-size: ${({ theme }) => theme.font768.size.primary};
    }
  }
`;
const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr minmax(min-content, max-content);
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const About = styled.ul`
  /* <row-start> / <column-start> / <row-end> / <column-end> */
  > div {
    display: grid;
  }
  @media (max-width: 768px) {
    grid-area: 1/1/2/3;
    >div{
        grid-template-columns:100px 100px;
        justify-content:center;
    }
  }
`;
const Help = styled.ul`
  > div {
    display: grid;
  }
`;
const Social = styled.ul`
  > div {
    display: flex;
    flex-wrap: wrap;
    width: 420px;
    li {
      margin: 5px 60px 5px 0;
    }
  }
  @media (max-width: 768px) {
    grid-area: 3/1/4/3;
    > div {
      width: 300px;
      margin: 0 auto;
      justify-content: center;
      li {
        width: 80px;
        margin: 5px auto;
      }
    }
  }
`;
const Law = styled.ul`
  > div {
    display: grid;
  }
  @media (max-width: 768px) {
    grid-area: 2/2/3/3;
  }
`;
const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Copyright = styled.p`
  color: white;
  margin: 15px 0;
  @media (max-width: 768px){
      margin: 10px auto;
      font-size: ${({ theme }) => theme.font768.size.primary};
  }
`;
const SocialLink = styled.div`
  display: flex;
  flex-direction: row-reverse;
  img {
    width: 40px;
    height: 40px;
    margin: 0 8px;
  }
  @media (max-width: 768px){
      justify-content:center;
      grid-area: 1/1/2/2;
      img{
          width:25px;
          height:25px;
          margin: 10px;
      }
  }
`;
export default function HomeFooter() {
  return (
    <Wrapper>
      <Container>
        <LinkWrapper>
          <About>
            <h2>關於 REGALAXY</h2>
            <div>
              <li>關於我們</li>
              <li>相關報導</li>
              <li>白皮書</li>
              <li>APP下載</li>
            </div>
          </About>
          <Help>
            <div>
              <h2>問題幫助</h2>
              <li>常見問題</li>
              <li>操作說明</li>
            </div>
          </Help>
          <Social>
            <h2>合作企業</h2>
            <div>
              <li>企業名稱</li>
              <li>企業名稱</li>
              <li>企業名稱</li>
              <li>企業名稱</li>
              <li>企業名稱</li>
              <li>企業名稱</li>
              <li>企業名稱</li>
            </div>
          </Social>
          <Law>
            <h2>法律條款</h2>
            <div>
              <li>免責聲明</li>
              <li>隱私權政策</li>
            </div>
          </Law>
        </LinkWrapper>
        <hr size="1" color="#8E8E8E" />
        <Footer>
          <Copyright>© REGALAXY 版權所有 2022</Copyright>
          <SocialLink>
            <img src={medium} alt="" />
            <img src={discord} alt="" />
            <img src={telegram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </SocialLink>
        </Footer>
      </Container>
    </Wrapper>
  );
}
