import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from '@economist/component-variantify';

const extendedSubheaderItemClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
export class WifSubheader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      rubric: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, rubric } = this.props;
    return (
      <p
        itemProp="description"
        className={classnames(generateClassNameList('ArticleTemplate--rubric'), ...extendedSubheaderItemClasses)}
      >
        {rubric}
      </p>
    );
  }
}
