import React from 'react';
import { Step } from 'react-presents';
import { ContentSlide } from '../common';

const slide = () => (
  <ContentSlide>
    <ContentSlide.Title>{slide.title}</ContentSlide.Title>
    Search engine optimization (SEO) is the practice of increasing the quantity and quality of
    traffic to your website through organic search(non-paid) engine results.
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
          <li>It will "vouching" for the quality of your content</li>
        </ul>
      </div>
    </Step>
    <Step index={2}>
      <div>
        <ContentSlide.SubTitle>On-Site SEO</ContentSlide.SubTitle>
        <ul>
          <li>
            Optimizing elements on a website in order to rank higher and earn more relevant traffic
            from search engines
          </li>
          <li>Help search engines to interpret the page content</li>
          <li>Understand what a webpage is about</li>
          <li>Identify that page as relevant to a search query or queries</li>
          <li>Find that page useful and worthy of ranking well on a search engine results page</li>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'What is SEO?';

export default slide;
