import React from 'react';
import { ContentSlide as ReactPresentsContentSlide } from 'react-presents';
import Globals from '../Globals';

const ContentSlide = props => <ReactPresentsContentSlide {...props} />;

ContentSlide.Title = props => <h1 style={{ color: Globals.colors.main }} {...props} />;
ContentSlide.SubTitle = props => (
  <h2 style={{ marginTop: 50, fontSize: '2rem', color: Globals.colors.main }} {...props} />
);

export default ContentSlide;
