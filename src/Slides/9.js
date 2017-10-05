import React from 'react';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>

    <ul>
      <li>
        <a href="https://seositecheckup.com/">SEO Site Checkup</a>
      </li>
      <li>
        <a href="https://www.google.com/webmasters/tools/home">Google Search Console</a>
      </li>
      <li>
        <a href="https://analytics.google.com/">Google Analytics</a>
      </li>
      <li>
        <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a>
      </li>
    </ul>
  </ContentSlide>
);

slide.title = 'Tools';

export default slide;
