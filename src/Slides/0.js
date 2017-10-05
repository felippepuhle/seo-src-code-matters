import React from 'react';
import { TitleSlide } from '../common';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2>
      <TitleSlide.FontAwesome icon="github" />{' '}
      <a href="https://github.com/felippepuhle/seo-src-code-matters">
        github.com/felippepuhle/seo-src-code-matters
      </a>
    </h2>
    <p>(Use the right and left arrow keys to navigate)</p>
  </TitleSlide>
);

slide.title = 'SEO - Why your source code matters?';

export default slide;
