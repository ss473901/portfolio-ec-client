import * as Styled from "./style";

export const Register = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Title>CREATE ACCOUNT</Styled.Title>
        <Styled.Form>
          <Styled.Input placeholder="name" />
          <Styled.Input placeholder="last name" />
          <Styled.Input placeholder="username" />
          <Styled.Input placeholder="email" />
          <Styled.Input placeholder="password" />
          <Styled.Input placeholder="confirm password" />
          <Styled.Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Styled.Agreement>
          <Styled.Button>CREATE</Styled.Button>
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
