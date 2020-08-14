import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Linkwrapper = styled.div`
  display: inline-block;
  padding: .5rem 1rem;
  text-align: center;
`

export const StyledLink = styled(Link)`
   text-decoration: none;
   font-size: 1.6rem;
   font-weight: bold;
   font-family: ${props => props.theme.secondaryFont};
   color: ${props => props.theme.white};
   text-transform: uppercase;
`