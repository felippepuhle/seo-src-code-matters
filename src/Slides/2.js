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
        <ContentSlide.SubTitle>How they work</ContentSlide.SubTitle>
        <ul>
          <li>Crawlers are very active</li>
          <li>
            Googlebot will often visit a website several times a day, checking for updates or new
            information
          </li>
          <li>Crawlers are on the lookout for sites that contain high density of keywords</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Robots everywhere';

export default slide;
