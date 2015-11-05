/* eslint object-shorthand: 0 */
import ArticleTemplate from '@economist/component-articletemplate';
import { createVariant } from '@economist/component-variantify';

import ArticleBody from '@economist/component-articletemplate/body';
import { WifHeader } from './header';
import { WifSubheader } from './subheader';
import { WifFooter } from './footer';

export default createVariant({
  ArticleHeader: WifHeader,
  ArticleSubheader: WifSubheader,
  ArticleBody: ArticleBody,
  ArticleFooter: WifFooter,
}, 'world-if')(ArticleTemplate);
