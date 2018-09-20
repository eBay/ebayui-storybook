// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withNotes } from '@storybook/addon-notes';
import CarouselContinuous from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/01-continuous/template.marko';
import CarouselStartingIndex from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/02-starting-index/template.marko';
import CarouselFewItems from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/03-few-items/template.marko';
import CarouselVariableWidthItems from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/04-variable-width-items/template.marko';
import CarouselSingleItemPerSlide from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/05-single-item-per-slide/template.marko';
import CarouselStartingSlide from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/06-starting-slide/template.marko';
import CarouselTwoItemsPerSlide from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/07-two-items-per-slide/template.marko';
import CarouselThreeItemsPerSlide from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/08-three-items-per-slide/template.marko';
import CarouselA11yText from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/09-a11y-text/template.marko';
import CarouselAutoplay from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/10-autoplay/template.marko';
import CarouselItemsPerSlidePartialItem from '@ebay/ebayui-core/dist/components/ebay-carousel/examples/11-items-per-slide-partial-item/template.marko';
import CarouselReadme from '@ebay/ebayui-core/dist/components/ebay-carousel/README.md';

import './ebay-carousel.less'

storiesOf('ebayui/ebay-carousel', module)
  .addDecorator(withNotes)
  .add('continuous', () => {
    return CarouselContinuous.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('starting-index', () => {
    return CarouselStartingIndex.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('few-items', () => {
    return CarouselFewItems.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('variable-width-items', () => {
    return CarouselVariableWidthItems.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('single-item-per-slide', () => {
    return CarouselSingleItemPerSlide.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('starting-slide', () => {
    return CarouselStartingSlide.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('two-items-per-slide', () => {
    return CarouselTwoItemsPerSlide.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('three-items-per-slide', () => {
    return CarouselThreeItemsPerSlide.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('accessibility-text', () => {
    return CarouselA11yText.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('autoplay', () => {
    return CarouselAutoplay.renderSync({});
  }, { notes: { markdown: CarouselReadme } })
  .add('items per slide partial item', () => {
    return CarouselItemsPerSlidePartialItem.renderSync({});
  }, { notes: { markdown: CarouselReadme } });
