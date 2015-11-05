import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import TabView from '@economist/component-tabview';
import { defaultGenerateClassNameList } from '@economist/component-variantify';

import { ArticleFooterContainer } from '@economist/component-articletemplate/footer';
import { getSrcSet } from '@economist/component-articletemplate/utils';
import { isSectionArticles } from '@economist/component-articletemplate/proptypes';

function WifTabView({ generateClassNameList = defaultGenerateClassNameList, currentArticleId, sections }) {
  return (
    <TabView generateClassNameList={generateClassNameList}>
      {sections.map((section, key) => (
        <div
          key={key}
          title={section.title}
          itemScope
          itemType="http://schema.org/itemList"
        >
          <div className={classnames(generateClassNameList(`TabView--Views--Tint`))}></div>
          {(section.articles || [])
            .filter((article) => currentArticleId !== article.id)
            .map((article, articleKey) => (
            <a
              key={articleKey}
              href={`/article/${article.id}/${article.slug}`}
              itemProp="url"
            >
              <figure className={classnames(generateClassNameList(`TabView--View--Content`))}>
                <img
                  src={`${article.tileImage.src['1.0x']}`}
                  srcSet={getSrcSet(article.tileImage.src)}
                  alt={article.tileImage.alt}
                  itemProp="image"
                />
                <figcaption itemProp="caption">{article.toc}</figcaption>
              </figure>
            </a>
          ))}
        </div>
      ))}
    </TabView>
  );
}
WifTabView.propTypes = {
  generateClassNameList: PropTypes.func,
  id: PropTypes.number,
  sections: isSectionArticles.isRequired,
};

export class WifFooter extends Component {

  static get propTypes() {
    return {
      generateClassNameList: PropTypes.func,
      sections: isSectionArticles.isRequired,
    };
  }

  static get defaultProps() {
    return {
      generateClassNameList: defaultGenerateClassNameList,
    };
  }

  render() {
    const { generateClassNameList } = this.props;
    return (
      <ArticleFooterContainer generateClassNameList={generateClassNameList}>
        <WifTabView {...this.props} />
      </ArticleFooterContainer>
    );
  }
}
