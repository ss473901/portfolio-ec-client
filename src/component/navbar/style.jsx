import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//Left
export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

// Center
export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

// Right
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Item = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
