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

const TextContent = styled.div`
  margin: 0;
  font-size: 11px;
  line-height: 1.4;
  color: #000;
`;

const Link = styled.a`
  color: #0000EE;
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: #551A8B;
  }
`;

const Section = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

function AngelInvestments() {
  return (
    <Container>
      <TextContent>
        <SectionTitle>Seed and Pre-seed Investments</SectionTitle>
        
        <Section>
          <div><Link href="https://aura.money/" target="_blank" rel="noopener noreferrer">Aura</Link></div>
          <div><Link href="https://beramonium.io/" target="_blank" rel="noopener noreferrer">Beramonium</Link></div>
          <div><Link href="https://www.bitsafe.finance/" target="_blank" rel="noopener noreferrer">BitSafe</Link></div>
          <div><Link href="https://creator.bid/agents" target="_blank" rel="noopener noreferrer">Creator Bid</Link></div>
          <div><Link href="https://www.inceptionlrt.com/" target="_blank" rel="noopener noreferrer">Inception LRT</Link></div>
          <div><Link href="https://nvg8.io/" target="_blank" rel="noopener noreferrer">Nvg8</Link></div>
          <div><Link href="https://www.oogabooga.io/" target="_blank" rel="noopener noreferrer">Ooga Booga</Link></div>
          <div><Link href="https://odx.so/" target="_blank" rel="noopener noreferrer">Ordinox</Link></div>
          <div><Link href="https://www.osito.finance/" target="_blank" rel="noopener noreferrer">Osito</Link></div>
          <div><Link href="https://www.raiku.com/" target="_blank" rel="noopener noreferrer">Raiku</Link></div>
        </Section>

        <Section>
          <SectionTitle>Advisory</SectionTitle>
          <div><Link href="https://www.bitsafe.finance/" target="_blank" rel="noopener noreferrer">BitSafe</Link></div>
          <div><Link href="https://creator.bid/agents" target="_blank" rel="noopener noreferrer">Creator Bid</Link></div>
        </Section>
      </TextContent>
    </Container>
  );
}

export default AngelInvestments;
