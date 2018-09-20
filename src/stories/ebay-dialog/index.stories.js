// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withNotes } from '@storybook/addon-notes';
import DialogBasic from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/01-basic/template.marko';
import DialogScrolling from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/02-scrolling/template.marko';
import DialogFullscreen from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/03-fullscreen/template.marko';
import DialogPanelLeft from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/04-panel-left/template.marko';
import DialogPanelRight from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/05-panel-right/template.marko';
import DialogFill from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/06-fill/template.marko';
import DialogFocus from '@ebay/ebayui-core/dist/components/ebay-dialog/examples/07-focus/template.marko';
import DialogReadme from '@ebay/ebayui-core/dist/components/ebay-dialog/README.md';
  
storiesOf('ebayui/ebay-dialog', module)
  .addDecorator(withNotes)
  .add('basic', () => {
    return DialogBasic.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('scrolling', () => {
    return DialogScrolling.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('fullscreen', () => {
    return DialogFullscreen.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('panel left', () => {
    return DialogPanelLeft.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('panel right', () => {
    return DialogPanelRight.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('fill', () => {
    return DialogFill.renderSync({});
  }, { notes: { markdown: DialogReadme } })
  .add('focus', () => {
    return DialogFocus.renderSync({});
  }, { notes: { markdown: DialogReadme } });
  