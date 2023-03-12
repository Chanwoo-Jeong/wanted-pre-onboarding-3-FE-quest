import { Link } from "react-router-dom"
import styled from "styled-components"

const OptionsContainer =styled.div`
display:flex;

`
const Option = styled.div`
    margin-right : 5px;
    margin : 20px;
`

const HomeOption = styled.div`
    position: fixed;
  top: 20px;
  /* width: 100% */
 font-size : 25px;
  right: 20px;

`


function LoginOptions () {

    return<>
    <OptionsContainer>
        <Option><Link to={{pathname : `/login`}}>
        login</Link></Option>
        <Option><Link to={{pathname : `/Jwtlogin`}}>
        Jwtlogin</Link></Option>
        <Option><Link to={{pathname : `/localLogin`}}>
        localstorage login</Link></Option>
        <HomeOption><Link to={{pathname : `/`}}>
        Home</Link></HomeOption>
    </OptionsContainer>
    </>
}

export default LoginOptions