// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Notice from '@ebay/ebayui-core/dist/components/ebay-notice/';
import NoticePage from '@ebay/ebayui-core/dist/components/ebay-notice/examples/01-page-notice/template.marko';
import NoticeInline from '@ebay/ebayui-core/dist/components/ebay-notice/examples/02-inline-notice/template.marko';
import NoticeCustomHeading from '@ebay/ebayui-core/dist/components/ebay-notice/examples/03-custom-heading/template.marko';
import NoticeDismissible from '@ebay/ebayui-core/dist/components/ebay-notice/examples/04-dismissible-notice/template.marko';
import NoticeReadme from '@ebay/ebayui-core/dist/components/ebay-notice/README.md';

storiesOf('ebayui/ebay-notice', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const renderBody = text('renderBody', 'Sample notice text.....');
    const type = text('type', '');
    const status = text('status', '');
    const ariaText = text('aria-text', '');
    const headingLevel = text('heading-level', '');
    const dismissible = boolean('dismissible', false);
    const hidden = boolean('hidden', false);
    const ariaCloseLabel = text('aria-label-close', '');
    
    return Notice.renderSync({
      renderBody,
      type,
      status,
      ariaText,
      headingLevel,
      dismissible,
      hidden,
      ariaCloseLabel
    });
  }, { notes: { markdown: NoticeReadme } })
  .add('page notice', () => {
    return NoticePage.renderSync({});
  }, { notes: { markdown: NoticeReadme } })
  .add('inline notice', () => {
    return NoticeInline.renderSync({});
  }, { notes: { markdown: NoticeReadme } })
  .add('custom heading', () => {
    return NoticeCustomHeading.renderSync({});
  }, { notes: { markdown: NoticeReadme } })
  .add('dismissible notice', () => {
    return NoticeDismissible.renderSync({});
  });   
