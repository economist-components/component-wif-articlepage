import ArticleBodyTemplate from '@economist/component-articletemplate/body';
import { createVariant } from '@economist/component-variantify';

import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-wifgobbet';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import Gallery from '@economist/component-gallery';

export default createVariant({
  AnimatedPanel,
  Gobbet,
  ImageCaption,
  Video,
  Gallery,
})(ArticleBodyTemplate);
