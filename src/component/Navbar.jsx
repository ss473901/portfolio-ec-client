import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//mui
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Left
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

// Center
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

// Right
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Item = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <SLink to={`/`}>
            <Logo>Clothes.</Logo>
          </SLink>
        </Center>

        <Right>
          <Item>REGISTER</Item>

          <Item>SIGN IN</Item>

          <Item>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Item>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
