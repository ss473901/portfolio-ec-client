import * as Styled from "./style";

export const Login = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>SIGN IN</Styled.Title>
        <Styled.Form>
          <Styled.Input placeholder="username" />
          <Styled.Input placeholder="password" />
          <Styled.Button>LOGIN</Styled.Button>
          <Styled.Link>DO NOT YOU REMEMBER THE PASSWORD?</Styled.Link>
          <Styled.Link>CREATE A NEW ACCOUNT</Styled.Link>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
