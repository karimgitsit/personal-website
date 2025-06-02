import React from 'react';
import styled from 'styled-components';
import investmentsData from '../../../data/investments.json';

const Container = styled.div`
  padding: 20px;
  background: #ece9d8;
  font-family: 'Tahoma', sans-serif;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  margin-bottom: 20px;
  border-bottom: 2px solid #316ac5;
  padding-bottom: 10px;
`;

const Title = styled.h1`
  margin: 0;
  color: #316ac5;
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 5px 0 0 0;
  color: #666;
  font-size: 12px;
`;

const InvestmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
`;

const InvestmentCard = styled.div`
  background: white;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  padding: 15px;
  box-shadow: inset -1px -1px #808080, inset 1px 1px #dfdfdf;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 2px;
`;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #000080;
  text-decoration: underline;
  cursor: pointer;
`;

const Description = styled.p`
  margin: 8px 0;
  font-size: 11px;
  color: #000;
  line-height: 1.4;
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #666;
  margin-top: 10px;
  border-top: 1px solid #e0e0e0;
  padding-top: 8px;
`;

const StatusBadge = styled.span`
  background: ${props => props.status === 'Active' ? '#90EE90' : '#FFB6C1'};
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 9px;
  font-weight: bold;
`;

function AngelInvestments() {
  const handleCompanyClick = (website) => {
    if (website) {
      window.open(website, '_blank');
    }
  };

  return (
    <Container>
      <Header>
        <Title>💼 Angel Investments Portfolio</Title>
        <Subtitle>Early-stage technology investments and partnerships</Subtitle>
      </Header>
      
      <InvestmentGrid>
        {investmentsData.map(investment => (
          <InvestmentCard key={investment.id}>
            <CompanyHeader>
              <CompanyLogo 
                src={investment.logo} 
                alt={investment.companyName}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMDA3YWNjIi8+CjwvZz4=';
                }}
              />
              <CompanyName onClick={() => handleCompanyClick(investment.website)}>
                {investment.companyName}
              </CompanyName>
            </CompanyHeader>
            
            <Description>{investment.description}</Description>
            
            <MetaInfo>
              <div>
                <div><strong>Sector:</strong> {investment.sector}</div>
                <div><strong>Stage:</strong> {investment.investmentStage}</div>
                <div><strong>Year:</strong> {investment.investmentYear}</div>
              </div>
              <StatusBadge status={investment.status}>
                {investment.status.toUpperCase()}
              </StatusBadge>
            </MetaInfo>
            
            {investment.notes && (
              <Description style={{ fontStyle: 'italic', marginTop: '10px', fontSize: '10px' }}>
                "{investment.notes}"
              </Description>
            )}
          </InvestmentCard>
        ))}
      </InvestmentGrid>
    </Container>
  );
}

export default AngelInvestments; 