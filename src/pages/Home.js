import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Container from '../components/Container';
import Octocat from '../components/Octocat';

// background images
import fire from '../assets/img/fire.jpg';
import water from '../assets/img/water.jpg';
import earth from '../assets/img/earth.jpg';
import air from '../assets/img/air.jpg';

export default function Home() {
  const elements = [
    {
      name: 'Fire',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: fire,
      href: '/',
    },
    {
      name: 'Water',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: water,
      href: '/',
    },
    {
      name: 'Earth',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: earth,
      href: '/',
    },
    {
      name: 'Air',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      image: air,
      href: '/',
    },
  ];

  return (
    <>
      <Octocat url="https://github.com/peter-stuhlmann/ClipMask-Text-Parallax" />
      {elements.map((element) => (
        <Container key={element.name}>
          <Heading background={element.image}>{element.name}</Heading>
          <Paragraph>{element.text}</Paragraph>
          <Link to={element.href}>Read More</Link>
        </Container>
      ))}
    </>
  );
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

const Paragraph = styled.p`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Link = styled(RouterLink)`
  color: #000;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #000;
  text-decoration: none;
  margin-top: 50px;
`;

Heading.propTypes = {
  background: PropTypes.string.isRequired,
};
