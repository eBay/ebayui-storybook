// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Icon from '@ebay/ebayui-core/dist/components/ebay-icon/';
import IconBackground from '@ebay/ebayui-core/dist/components/ebay-icon/examples/01-background/template.marko';
import IconInline from '@ebay/ebayui-core/dist/components/ebay-icon/examples/02-inline/template.marko';
import IconInlineCustomColor from '@ebay/ebayui-core/dist/components/ebay-icon/examples/03-inline-custom-color/template.marko';
import IconInlineNonDecorative from '@ebay/ebayui-core/dist/components/ebay-icon/examples/04-inline-non-decorative/template.marko';
import IconReadme from '@ebay/ebayui-core/dist/components/ebay-icon/README.md';

storiesOf('ebayui/ebay-icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const type = text('type', 'background');
    const name = text('name', 'arrow-left');
    return Icon.renderSync({
      type,
      name
    });
  }, { notes: { markdown: IconReadme } })
  .add('background', () => {
    return IconBackground.renderSync({});
  }, { notes: { markdown: IconReadme } })
  .add('inline', () => {
    return IconInline.renderSync({});
  }, { notes: { markdown: IconReadme } })
  .add('inline custom color', () => {
    return IconInlineCustomColor.renderSync({});
  }, { notes: { markdown: IconReadme } })
  .add('inline non decorative', () => {
    return IconInlineNonDecorative.renderSync({});
  }, { notes: { markdown: IconReadme } });
