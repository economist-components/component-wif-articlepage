/* eslint one-var: 0 */
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import { defaultGenerateClassNameList } from '@economist/component-variantify';

import { ArticleHeaderContainer, ImageContainer } from '@economist/component-articletemplate/header';
import { getSrcSet } from '@economist/component-articletemplate/utils';
import { isImage } from '@economist/component-articletemplate/proptypes';

const extendedSectionHeaderItemClasses = [
  'margin-l-1',
  'gutter-l',
];
const extendedHeaderItemClasses = [
  'margin-l-1',
  'gutter-l',
  'col-10',
];
export class WifHeader extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      mainImage: isImage,
      sectionName: PropTypes.string,
      flytitle: PropTypes.string,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList, mainImage, sectionName, flytitle, title } = this.props;

    let mainImageEl, sectionEl, flytitleEl, titleEl;
    if (mainImage) {
      mainImageEl = (
        <img
          className={classnames(generateClassNameList(`ArticleTemplate--image`))}
          src={`${mainImage.src['1.0x']}`}
          srcSet={getSrcSet(mainImage.src)}
          alt={mainImage.alt}
          itemProp="image"
        />
      );
    }
    if (sectionName) {
      sectionEl = (
        <h2
          itemProp="articleSection"
          className={classnames(generateClassNameList('ArticleTemplate--header-section'),
                                ...extendedSectionHeaderItemClasses)}
        >
          {sectionName}
        </h2>
      );
    }
    if (flytitle) {
      flytitleEl = (
        <h1
          itemProp="headline"
          className={classnames(generateClassNameList('ArticleTemplate--flytitle'), ...extendedHeaderItemClasses)}
        >
          {flytitle}
        </h1>
      );
    }
    if (title) {
      titleEl = (
        <h3
          itemProp="alternativeHeadline"
          className={classnames(generateClassNameList('ArticleTemplate--title'), ...extendedHeaderItemClasses)}
        >
          {title}
        </h3>
      );
    }

    return (
      <ImageContainer generateClassNameList={generateClassNameList}>
        {mainImageEl}
        <ArticleHeaderContainer generateClassNameList={generateClassNameList}>
          {sectionEl}
          {flytitleEl}
          {titleEl}
        </ArticleHeaderContainer>
      </ImageContainer>
    );
  }
}
