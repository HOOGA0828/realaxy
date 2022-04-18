import styled from "@emotion/styled";

// 將指定資料夾下所有指定副檔名的檔案路徑全部匯入並以陣列的型式宣告為icon01Arr
function importAllImagesWithArray(theRequireContext) {
  let images = [];
  const requireContext = theRequireContext;
  requireContext.keys().map((item, index) => {
    images[index] = requireContext(item);
    return ""; //return非必要，不加的話瀏覽器會報警告所以才加
  });
  return images;
}
const logoArr = importAllImagesWithArray(
  require.context("img/home/social", false, /^\.\/.*\.(webp|svg|png)$/)
);
const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  background: rgb(253, 253, 253);
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0 0 0;
  @media (max-width: 768px) {
    width: 340px;
  }
`;
const LogoWrapper = styled.div`
  display: grid;
  justify-content:center;
  grid-template-columns: repeat(auto-fill, 180px);
  @media (max-width: 768px){
  grid-template-columns: repeat(auto-fill, 110px);

  }
`;
const Logo = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  margin: 0 auto;
  img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @media (max-width: 768px){
      width:90px;
      height:90px;
  }
`;
export default function HomeSocial() {
  return (
    <Wrapper>
      <Container>
        <h1>合作企業</h1>
        <LogoWrapper>
          {logoArr.map((item, index) => {
            return (
              <Logo key={`logo${index}`}>
                <img src={item} alt="" />
              </Logo>
            );
          })}
        </LogoWrapper>
      </Container>
    </Wrapper>
  );
}
