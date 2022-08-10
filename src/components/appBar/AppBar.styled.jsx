import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    background-color: white;
    width: 100%;
    z-index: 2;
`;

export const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;

    @media (min-width: 768px) {
        height: 80px;
    }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;