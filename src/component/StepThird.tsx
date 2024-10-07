import React, { useState, useEffect, useRef } from 'react';
import './StepThird.css';
import Footer from './Footer';
import iconLogo from "../assets/Group.png";
import Spinner from './Spinner';

// Define the type for the article
interface Article {
  id: number;
  title: string;
  created_at: string;
  prompt: string;
  short_description: string;
  content: string;
  image_url: string;
}

const CarouselLayout: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Refs for photography and learning carousels
  const photographyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const learningRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fetch articles from the API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
          headers: {
            'Authorization': 'Token 97848e8babeb149f26a044838f1fcb6f52d60e7b'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data: Article[] = await response.json();
        setArticles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Function to scroll an item into view
  const scrollToArticle = (index: number, type: 'Photography' | 'Learning') => {
    const refs = type === 'Photography' ? photographyRefs : learningRefs;
    const selectedArticle = refs.current[index];

    if (selectedArticle) {
      selectedArticle.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center' // Scroll horizontally to the center of the screen
      });
    }
  };

  // If loading, show a loading message
  if (loading) {
    return <div> <Spinner /></div>;
  }

  // If there's an error, show an error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter articles by prompt
  const photographyArticles = articles.filter(article => article.prompt === 'Photography');
  const learningArticles = articles.filter(article => article.prompt === 'Learning');

  return (
    <>
      <div className="containers">
        {/* Header Section */}
        <header className="header">
          <div className="logo-container">
          <div className="logo">
              <img src={iconLogo} alt="Logo" className="logo-image" />
            </div>
          </div>
          <div className="welcome-text">
            <h2>Welcome <span className="highlight">Test</span></h2>
            <p>Hope you are having a good day!</p>
          </div>
        </header>

        {/* Photography Section */}
        <section className="section">
          <h3>Photography</h3>
          <div className="carousel">
            {photographyArticles.map((article, index) => (
              <div
                key={article.id}
                className="carousel-item"
                ref={(el) => (photographyRefs.current[index] = el)} // Set the reference
              >
                <img src={article.image_url} alt={article.title} />
                <h4>{article.title}</h4>
              </div>
            ))}
          </div>
          <div className="pagination-dots">
            {photographyArticles.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === 0 ? 'active' : ''}`}
                onClick={() => scrollToArticle(index, 'Photography')} // Scroll on click
              ></span>
            ))}
          </div>
        </section>

        {/* Learning Section */}
        <section className="section">
          <h3>Learning</h3>
          <div className="carousel">
            {learningArticles.map((article, index) => (
              <div
                key={article.id}
                className="carousel-item"
                ref={(el) => (learningRefs.current[index] = el)} // Set the reference
              >
                <img src={article.image_url} alt={article.title} />
                <h4>{article.title}</h4>
              </div>
            ))}
          </div>
          <div className="pagination-dots">
            {learningArticles.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === 0 ? 'active' : ''}`}
                onClick={() => scrollToArticle(index, 'Learning')} // Scroll on click
              ></span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CarouselLayout;
