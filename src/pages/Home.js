import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

// components
import Container from '../components/Container';
import Octocat from '../components/Octocat';
import MaskedParallaxHeading from '../components/MaskedParallaxHeading';

// data
import sections from '../data/sections';
import github from '../data/github';

export default function Home() {
  return (
    <>
      <Octocat url={github.url} />
      {sections.map((section) => (
        <Container key={section.name}>
          <MaskedParallaxHeading image={section.image}>
            {section.name}
          </MaskedParallaxHeading>
          <Paragraph>{section.text}</Paragraph>
          <Link to={section.href}>Read More</Link>
        </Container>
      ))}
    </>
  );
}

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
