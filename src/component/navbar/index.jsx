import * as Styled from "./style";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Navbar = () => {
  return (
    <Styled.Container role="header">
      <Styled.Wrapper>
        <Styled.Left>
          <Styled.SearchContainer>
            <Styled.Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </Styled.SearchContainer>
        </Styled.Left>

        <Styled.Center>
          <Styled.SLink to={`/`}>
            <Styled.Logo>Clothes.</Styled.Logo>
          </Styled.SLink>
        </Styled.Center>

        <Styled.Right>
          <Styled.Item>REGISTER</Styled.Item>

          <Styled.Item>SIGN IN</Styled.Item>

          <Styled.Item>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Styled.Item>
        </Styled.Right>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
