import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Component/Header";
import SideNav from "../Component/SideNav";
import { useParams } from "react-router-dom";

const ParentBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const Ment = styled.div`
  text-align : center;
  line-height : 25px;

`

function Home() {
  const { PageId } = useParams();
  return (
    <>
      <Header />
      <ParentBody>
        <SideNav />
        <MainContainer>
          {PageId ? <Outlet /> : <Ment>"Welcome Login Study" <br />
          로그인 , Jwt로그인 , Jwt&LocalStorage <br />
          다양한 로그인을 경험해보세요!<br /><br />
          환영멘트를 변경하시려면 Login - localstorage login에서 로그인해주세요😊
          </Ment>}
        </MainContainer>
      </ParentBody>
    </>
  );
}

export default Home;
