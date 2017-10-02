import React from 'react';
import { Step, Code } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <li>
        A text file webmasters create to instruct the search engine robots how to crawl pages on
        their website
      </li>
      <li>Indicate whether certain user agents (web-crawling software) can or cannot crawl</li>
    </ul>

    <Step index={1} exact>
      <div>
        <ContentSlide.SubTitle>Blocking all web crawlers from all content</ContentSlide.SubTitle>
        <Code
          value={`
User-agent: *
Disallow: /
        `}
        />
      </div>
    </Step>

    <Step index={2} exact>
      <div>
        <ContentSlide.SubTitle>
          Allowing all web crawlers access to all content
        </ContentSlide.SubTitle>
        <Code
          value={`
User-agent: *
Disallow:
        `}
        />
      </div>
    </Step>

    <Step index={3} exact>
      <div>
        <ContentSlide.SubTitle>
          Blocking a specific web crawler from a specific folder
        </ContentSlide.SubTitle>
        <Code
          value={`
User-agent: Googlebot
Disallow: /example-subfolder/
        `}
        />
      </div>
    </Step>

    <Step index={4} exact>
      <div>
        <ContentSlide.SubTitle>
          Blocking a specific web crawler from a specific web page
        </ContentSlide.SubTitle>
        <Code
          value={`
User-agent: Bingbot
Disallow: /example-subfolder/blocked-page.html
        `}
        />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'robots.txt';

export default slide;
