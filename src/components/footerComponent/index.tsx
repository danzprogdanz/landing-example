import React from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/style/color';
import { useTheme } from '../../context/themeProvider';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme?.footerBackground};
  color: ${({ theme }) => theme?.footerText};
  padding: 3rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${colors.grey};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h4 {
    margin-bottom: 1.5rem;
    color: ${colors.primary};
    font-size: 1.2rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  svg {
    flex-shrink: 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    color: inherit;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${colors.primary};
    }
  }
`;

const FeaturedProperties = styled.div`
  display: grid;
  gap: 1rem;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const FooterComponent: React.FC = () => {
  const { isDarkMode } = useTheme();

  // Replace these with actual property images
  const sampleProperties = [
    'https://via.placeholder.com/200x120',
    'https://via.placeholder.com/200x120',
    'https://via.placeholder.com/200x120',
  ];

  return (
    <FooterStyled>
      <FooterContent>
        <FooterColumn>
          <h4>About Us</h4>
          <p>Your trusted partner in real estate since 2010. We specialize in helping families find their dream homes.</p>
        </FooterColumn>

        <FooterColumn>
          <h4>Quick Links</h4>
          <FooterList>
            <li><a href="/">Home</a></li>
            <li><a href="/listings">Properties</a></li>
            <li><a href="/agents">Our Agents</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <h4>Featured Properties</h4>
          <FeaturedProperties>
            {sampleProperties.map((img, index) => (
              <img key={index} src={img} alt={`Property ${index + 1}`} />
            ))}
          </FeaturedProperties>
        </FooterColumn>

        <FooterColumn>
          <h4>Contact Us</h4>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>123 Main Street, Real Estate City, RE 12345</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <span>(555) 123-4567</span>
          </ContactInfo>
          <ContactInfo>
            <FaEnvelope />
            <span>info@homeselling.com</span>
          </ContactInfo>
          
          <SocialIcons>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>

      <BottomBar>
        <div>
          © {new Date().getFullYear()} HomeSelling Inc. All rights reserved.
        </div>
        <LegalLinks>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/sitemap">Sitemap</a>
        </LegalLinks>
      </BottomBar>
    </FooterStyled>
  );
};