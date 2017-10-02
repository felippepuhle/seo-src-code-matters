import React from 'react';
import { Step, Code } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <li>It’s like an archive of every webpage in your website</li>
      <li>
        Helps search engine robots to easily understand your website structure while crawling it
      </li>
      <li>Are known as URL inclusion protocols as they advise search engines on what to crawl</li>
      <li>
        While having no XML sitemap is not penalized, creating yours is highly recommended because
        it can improve your SEO
      </li>
    </ul>

    <Step index={1}>
      <div>
        <ContentSlide.SubTitle>Example</ContentSlide.SubTitle>
        <Code
          value={`
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
        `}
        />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'sitemap.xml';

export default slide;
