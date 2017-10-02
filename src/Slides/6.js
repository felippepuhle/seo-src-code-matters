import React from 'react';
import { Step, Code } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    <ul>
      <li>
        It's a <a href="https://www.w3.org/TR/microdata/">specification</a> used to nest metadata
        within existing content on web pages
      </li>
      <li>
        Crawlers can extract and process Microdata from a web page and use it to provide a richer
        browsing experience for users
      </li>
      <li>
        <a>schema.org</a> is the most used vocabulary
      </li>
      <li>You can create a custom vocabulary</li>
    </ul>

    <Step index={1} exact>
      <div>
        <ContentSlide.SubTitle>Example: SportsTeam</ContentSlide.SubTitle>
        <Code
          value={`
<div itemscope itemtype="http://schema.org/SportsTeam">
  <span itemprop="name">San Francisco 49ers</span>
</div>
        `}
        />
      </div>
    </Step>

    <Step index={2} exact>
      <div>
        <ContentSlide.SubTitle>Example: Person</ContentSlide.SubTitle>
        <Code
          value={`
<div itemscope itemtype="http://schema.org/Person">
  <span itemprop="name">Joe Montana</span>
</div>
        `}
        />
      </div>
    </Step>

    <Step index={3} exact>
      <div>
        <ContentSlide.SubTitle>Example: Nested microdata</ContentSlide.SubTitle>
        <Code
          value={`
<div itemscope itemtype="http://schema.org/SportsTeam">
  <span itemprop="name">San Francisco 49ers</span>

  <div itemprop="member" itemscope itemtype="http://schema.org/OrganizationRole">
    <div itemscope itemtype="http://schema.org/Person">
      <span itemprop="name">Joe Montana</span>
    </div>
    <span itemprop="startDate">1979</span>
    <span itemprop="endDate">1992</span>
    <span itemprop="roleName">Quarterback</span>
  </div>
</div>
        `}
        />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Semantic web';

export default slide;
