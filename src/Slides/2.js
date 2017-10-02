import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <li>Also often referred to as crawlers or spiders</li>
      <li>Programs that search engines use to scan and analyze websites</li>
      <li>
        Determines the importance or the ranking in the results of internet searches for certain
        keywords
      </li>
    </ul>

    <Step index={1}>
      <div>
        <ContentSlide.SubTitle>Off-Site SEO</ContentSlide.SubTitle>
        <ul>
          <li>
            Actions taken outside of your own website to impact your rankings within search engine
            results pages
          </li>
          <li>
            Other reputable places on the Internet (pages, sites, people, etc.) linking to or
            promoting your website
          </li>
          <li>
            Getting links from other sites (especially those that are reputable and trustworthy)
          </li>
          <li>It will "vouches" the quality of your content</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Robots everywhere';

export default slide;
