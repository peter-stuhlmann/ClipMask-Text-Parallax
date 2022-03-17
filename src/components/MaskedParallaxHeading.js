import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function MaskedParallaxHeading(props) {
  const { image, children } = props;

  return <Heading background={image}>{children}</Heading>;
}

const Heading = styled.h2`
  font-family: Archivo;
  font-size: clamp(70px, 20vw, 250px);
  text-transform: uppercase;
  margin: 0;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-attachment: fixed;
  -webkit-background-clip: text;
  color: transparent;
`;

MaskedParallaxHeading.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
