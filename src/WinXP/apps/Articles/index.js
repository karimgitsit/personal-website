import React, { useState } from 'react';
import styled from 'styled-components';
import articlesData from '../../../data/articles.json';

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

const FilterSection = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: 11px;
  color: #000;
  font-weight: bold;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#316ac5' : 'white'};
  color: ${props => props.active ? 'white' : '#000'};
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  padding: 4px 8px;
  font-size: 10px;
  cursor: pointer;
  box-shadow: inset -1px -1px #808080, inset 1px 1px #dfdfdf;
  
  &:hover {
    background: ${props => props.active ? '#4c7cd6' : '#f0f0f0'};
  }
`;

const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ArticleCard = styled.div`
  background: white;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  padding: 15px;
  box-shadow: inset -1px -1px #808080, inset 1px 1px #dfdfdf;
  cursor: pointer;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const ArticleTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #000080;
  text-decoration: underline;
  flex: 1;
`;

const FeaturedBadge = styled.span`
  background: #ffd700;
  color: #000;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 9px;
  font-weight: bold;
  margin-left: 10px;
`;

const ArticleDescription = styled.p`
  margin: 8px 0;
  font-size: 11px;
  color: #000;
  line-height: 1.4;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: #666;
  border-top: 1px solid #e0e0e0;
  padding-top: 8px;
  margin-top: 8px;
`;

const Publication = styled.span`
  font-weight: bold;
`;

const ReadTime = styled.span`
  font-style: italic;
`;

const Date = styled.span`
  color: #999;
`;

const CategoryTag = styled.span`
  background: #e6f3ff;
  color: #000080;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 9px;
  font-weight: bold;
`;

function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(articlesData.map(article => article.category))];
  
  const filteredArticles = selectedCategory === 'All' 
    ? articlesData 
    : articlesData.filter(article => article.category === selectedCategory);

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    // Featured articles first, then by date
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.publishDate) - new Date(a.publishDate);
  });

  const handleArticleClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Container>
      <Header>
        <Title>📝 Published Articles</Title>
        <Subtitle>Insights and thoughts on technology, investing, and entrepreneurship</Subtitle>
      </Header>
      
      <FilterSection>
        <FilterLabel>Filter by category:</FilterLabel>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterSection>

      <ArticlesList>
        {sortedArticles.map(article => (
          <ArticleCard 
            key={article.id} 
            onClick={() => handleArticleClick(article.url)}
          >
            <ArticleHeader>
              <ArticleTitle>{article.title}</ArticleTitle>
              {article.featured && <FeaturedBadge>FEATURED</FeaturedBadge>}
            </ArticleHeader>
            
            <ArticleDescription>{article.description}</ArticleDescription>
            
            <ArticleMeta>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Publication>{article.publication}</Publication>
                <CategoryTag>{article.category}</CategoryTag>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <ReadTime>{article.readTime}</ReadTime>
                <Date>{formatDate(article.publishDate)}</Date>
              </div>
            </ArticleMeta>
          </ArticleCard>
        ))}
      </ArticlesList>
      
      {filteredArticles.length === 0 && (
        <div style={{ textAlign: 'center', color: '#666', fontSize: '12px', marginTop: '20px' }}>
          No articles found in the "{selectedCategory}" category.
        </div>
      )}
    </Container>
  );
}

export default Articles; 