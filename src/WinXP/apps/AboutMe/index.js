import React from 'react';
import styled from 'styled-components';
import bioData from '../../../data/bio.json';

const Container = styled.div`
  padding: 20px;
  background: #ece9d8;
  font-family: 'Tahoma', sans-serif;
  height: 100%;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #316ac5;
  padding-bottom: 15px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 20px;
  border: 2px solid #c0c0c0;
  box-shadow: inset -1px -1px #808080, inset 1px 1px #dfdfdf;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  margin: 0 0 5px 0;
  color: #316ac5;
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.h2`
  margin: 0 0 8px 0;
  color: #666;
  font-size: 14px;
  font-weight: normal;
`;

const Location = styled.p`
  margin: 0;
  color: #666;
  font-size: 11px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #000080;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 5px;
`;

const Bio = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #000;
`;

const ExperienceItem = styled.div`
  background: white;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: inset -1px -1px #808080, inset 1px 1px #dfdfdf;
`;

const ExperienceTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 13px;
  color: #000080;
`;

const ExperienceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const Company = styled.span`
  font-size: 11px;
  color: #666;
  font-weight: bold;
`;

const Period = styled.span`
  font-size: 10px;
  color: #666;
  font-style: italic;
`;

const ExperienceDescription = styled.p`
  margin: 0;
  font-size: 11px;
  color: #000;
  line-height: 1.4;
`;

const InterestsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const InterestTag = styled.span`
  background: #316ac5;
  color: white;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: bold;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: #000080;
  text-decoration: underline;
  font-size: 11px;
  cursor: pointer;
  
  &:hover {
    color: #316ac5;
  }
`;

function AboutMe() {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Container>
      <Header>
        <ProfileImage 
          src={bioData.profileImage} 
          alt={bioData.name}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjNmM3NTdkIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj5LPC90ZXh0Pgo8L3N2Zz4=';
          }}
        />
        <ProfileInfo>
          <Name>{bioData.name}</Name>
          <Title>{bioData.title}</Title>
          <Location>📍 {bioData.location}</Location>
        </ProfileInfo>
      </Header>

      <Section>
        <SectionTitle>About</SectionTitle>
        <Bio>{bioData.bio}</Bio>
      </Section>

      <Section>
        <SectionTitle>Experience</SectionTitle>
        {bioData.experience.map((exp, index) => (
          <ExperienceItem key={index}>
            <ExperienceTitle>{exp.title}</ExperienceTitle>
            <ExperienceDetails>
              <Company>{exp.company}</Company>
              <Period>{exp.period}</Period>
            </ExperienceDetails>
            <ExperienceDescription>{exp.description}</ExperienceDescription>
          </ExperienceItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Areas of Interest</SectionTitle>
        <InterestsList>
          {bioData.interests.map((interest, index) => (
            <InterestTag key={index}>{interest}</InterestTag>
          ))}
        </InterestsList>
      </Section>

      <Section>
        <SectionTitle>Connect with Me</SectionTitle>
        <SocialLinks>
          <SocialLink onClick={() => handleSocialClick(bioData.socialLinks.linkedin)}>
            LinkedIn
          </SocialLink>
          <SocialLink onClick={() => handleSocialClick(bioData.socialLinks.twitter)}>
            Twitter
          </SocialLink>
          <SocialLink onClick={() => handleSocialClick(`mailto:${bioData.socialLinks.email}`)}>
            Email
          </SocialLink>
        </SocialLinks>
      </Section>
    </Container>
  );
}

export default AboutMe; 