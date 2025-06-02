import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 8px;
  background: white;
  font-family: 'Courier New', monospace;
  height: 100%;
  overflow-y: auto;
  border: none;
`;

const TextContent = styled.pre`
  margin: 0;
  font-size: 11px;
  line-height: 1.4;
  color: #000;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

function AngelInvestments() {
  return (
    <Container>
      <TextContent>I'll update this soon. Maybe.</TextContent>
    </Container>
  );
}

export default AngelInvestments; 