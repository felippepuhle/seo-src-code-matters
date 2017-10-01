import React from 'react';
import { ContentSlide as ReactPresentsContentSlide } from 'react-presents';
import FontAwesome from './FontAwesome';

const ContentSlide = props => <ReactPresentsContentSlide {...props} />;

ContentSlide.FontAwesome = props => <FontAwesome style={{ color: '#777872' }} {...props} />;

export default ContentSlide;
