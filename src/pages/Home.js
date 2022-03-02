import React from 'react';

// components
import Container from '../components/Container';

// data
import home from '../data/home';

export default function Home() {
  return <Container main>{home.content}</Container>;
}
