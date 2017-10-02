import React from 'react';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>

    <ul>
      <li>
        <a href="https://moz.com/beginners-guide-to-seo">The beginners guide to SEO</a>
      </li>
      <li>
        <a href="https://moz.com/learn/seo/what-is-seo">What is SEO?</a>
      </li>
      <li>
        <a href="http://www.seomarketingworld.com/seo-faq/crawlers.php">
          What are Crawlers? How do they work?
        </a>
      </li>
      <li>
        <a href="https://moz.com/learn/seo/robotstxt">robots.txt</a>
      </li>
      <li>
        <a href="http://www.oncrawl.com/importance-xml-sitemap/">
          The importance of XML sitemap in SEO
        </a>
      </li>
      <li>
        <a href="https://searchenginewatch.com/sew/how-to/2067564/how-to-use-html-meta-tags">
          How to use HTML meta tags
        </a>
      </li>
    </ul>
  </ContentSlide>
);

slide.title = 'Reference';

export default slide;
