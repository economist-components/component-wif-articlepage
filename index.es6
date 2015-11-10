/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import { createVariant } from '@economist/component-variantify';

import { WifHeader } from './header';
import { WifSubheader } from './subheader';
import WifArticleBody from './body';
import { WifFooter } from './footer';

export default createVariant({
  ArticleHeader: WifHeader,
  ArticleSubheader: WifSubheader,
  ArticleBody: WifArticleBody,
  ArticleFooter: WifFooter,
}, 'world-if')(ArticleTemplate);
