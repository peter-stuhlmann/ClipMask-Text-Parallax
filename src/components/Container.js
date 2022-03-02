import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export default function Container(props) {
  const { footer, header, main, children } = props;

  switch (true) {
    case footer:
      return (
        <Footer>
          <div>{children}</div>
        </Footer>
      );
    case header:
      return (
        <Header>
          <div>{children}</div>
        </Header>
      );
    case main:
      return (
        <Main>
          <div>{children}</div>
        </Main>
      );
    default:
      return (
        <Section>
          <div>{children}</div>
        </Section>
      );
  }
}

const baseStyles = css``;

const Footer = styled.footer`
  ${baseStyles}
`;

const Header = styled.header`
  ${baseStyles};
`;

const Main = styled.main`
  ${baseStyles};
`;

const Section = styled.section`
  ${baseStyles};
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  box-sizing: border-box;
  scroll-snap-align: start;

  & > div {
    text-align: center;
  }
`;

Container.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  main: PropTypes.bool,
};
