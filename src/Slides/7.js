import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ContentSlide.SubTitle>User Experience is Critical to SEO!!!</ContentSlide.SubTitle>

    <ul>
      <Step index={1}>
        <li>User engagement</li>
      </Step>
      <Step index={2}>
        <li>Page content analyses</li>
      </Step>
      <Step index={3}>
        <li>Page speed</li>
      </Step>
      <Step index={4}>
        <li>Visual appeal</li>
      </Step>
      <Step index={5}>
        <li>Usability</li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'SEO and UX';

export default slide;
