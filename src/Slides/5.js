import React from 'react';
import { Step, Code } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <li>These tags are not displayed</li>
      <li>Helps to tell search engines and users what your site is about</li>
    </ul>

    <Step index={1}>
      <div>
        <ContentSlide.SubTitle>Example</ContentSlide.SubTitle>
        <Code
          value={`
<head>
  <title>Not a Meta Tag, but required anyway </title>
  <meta name="description" content="Awesome Description Here">
  <meta name="keywords" content="awesome,description,here">
  <meta http-equiv="content-type" content="text/html;charset=UTF-8">
</head>
        `}
        />
      </div>
    </Step>

    <Step index={2} exact>
      <div>
        <ContentSlide.SubTitle>The Title Tag</ContentSlide.SubTitle>
        <ul>
          <li>It isn’t actually a meta tag</li>
          <li>The title tag is a required page “element” according to the W3C</li>
        </ul>
      </div>
    </Step>

    <Step index={3} exact>
      <div>
        <ContentSlide.SubTitle>The Description Tag</ContentSlide.SubTitle>
        <ul>
          <li>Should be no longer than 155 characters (including spaces)</li>
          <li>Tells the search engine what your page or site is about</li>
          <li>Helps with click through rates to your site</li>
          <li>Description” helps with site rankings</li>
        </ul>
      </div>
    </Step>

    <Step index={4} exact>
      <div>
        <ContentSlide.SubTitle>The Keywords Tag</ContentSlide.SubTitle>
        <ul>
          <li>It was a critical element for early search engines</li>
          <li>The only search engine that looks at the keywords anymore is Microsoft’s Bing</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'HTML meta tags';

export default slide;
