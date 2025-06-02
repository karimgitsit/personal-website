import React from 'react';
import styled from 'styled-components';
import bioData from '../../../data/bio.json';

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

const LinkText = styled.span`
  color: #0000ff;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    background: #c0c0c0;
  }
`;

function AboutMe() {
  const handleMirrorClick = () => {
    window.open(bioData.socialLinks.mirror, '_blank');
  };

  const bioWithLink = `${bioData.bio}

---

Read my writing: `;

  return (
    <Container>
      <TextContent>
        {bioWithLink}
        <LinkText onClick={handleMirrorClick}>
          {bioData.socialLinks.mirror}
        </LinkText>
      </TextContent>
    </Container>
  );
}

export default AboutMe; 