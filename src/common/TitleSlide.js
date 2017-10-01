import React from 'react';
import { TitleSlide as ReactPresentsTitleSlide } from 'react-presents';
import FontAwesome from './FontAwesome';

const TitleSlide = props => <ReactPresentsTitleSlide {...props} />;

TitleSlide.FontAwesome = props => <FontAwesome style={{ color: '#777872' }} {...props} />;

export default TitleSlide;
