import React from 'react';

// components
import Container from '../components/Container';

// data
import notFound from '../data/notFound';

export default function NotFound() {
  return <Container main>{notFound.content}</Container>;
}
