import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <Step index={1}>
        <li>Page title and description</li>
      </Step>
      <Step index={2}>
        <li>Keywords (in the content)</li>
      </Step>
      <Step index={3}>
        <li>Headings (H1 and H2)</li>
      </Step>
      <Step index={4}>
        <li>robots.txt and sitemap.xml</li>
      </Step>
      <Step index={5}>
        <li>No broken links</li>
      </Step>
      <Step index={6}>
        <li>Friendly URLs</li>
      </Step>
      <Step index={7}>
        <li>Image alt</li>
      </Step>
      <Step index={8}>
        <li>Use Google Analytics</li>
      </Step>
      <Step index={9}>
        <li>Favicon</li>
      </Step>
      <Step index={10}>
        <li>Connect with social media</li>
      </Step>
      <Step index={11}>
        <li>Fast to load (GZIP, requests, cache, minification, etc)</li>
      </Step>
      <Step index={12}>
        <li>Use microdata</li>
      </Step>
      <Step index={13}>
        <li>Use responsive design functionalities</li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Improving your SEO score';

export default slide;
