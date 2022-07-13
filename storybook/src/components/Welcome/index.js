import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Welcome = ({ img, title, subtitle }) => (
  <S.Wrapper>
    <S.Heading>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Heading>
    <S.Image src={img} role="img" aria-label={title} />
  </S.Wrapper>
);

Welcome.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Welcome;
