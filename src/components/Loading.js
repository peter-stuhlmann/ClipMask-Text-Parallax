import React from 'react';

// components
import Container from './Container';

// data
import loading from '../data/loading';

export default function Loading() {
  return <Container main>{loading.content}</Container>;
}
