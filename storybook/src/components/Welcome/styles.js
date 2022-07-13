import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Image = styled.div`
  ${({ theme, src }) => css`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.primary};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    position: absolute;
    text-align: center;
    color: ${theme.colors.white};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
    letter-spacing: 5px;
  `}
`;

export const Subtitle = styled.span`
  font-weight: 200;
`;
