// @flow
import React from 'react';

type Props = {
  icon: string,
};

const FontAwesome = ({ icon, ...props }: Props) => <i className={`fa fa-${icon}`} {...props} />;

export default FontAwesome;
