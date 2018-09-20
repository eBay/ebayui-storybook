// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Radio from '@ebay/ebayui-core/dist/components/ebay-radio';
import RadioDefault from '@ebay/ebayui-core/dist/components/ebay-radio/examples/01-default/template.marko';
import RadioDisabled from '@ebay/ebayui-core/dist/components/ebay-radio/examples/02-disabled/template.marko';
import RadioGroupedRadio from '@ebay/ebayui-core/dist/components/ebay-radio/examples/03-grouped-radio/template.marko';
import RadioCustomColor from '@ebay/ebayui-core/dist/components/ebay-radio/examples/04-custom-color/template.marko';
import RadioReadme from '@ebay/ebayui-core/dist/components/ebay-radio/README.md';

storiesOf('ebayui/ebay-radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const disabled = boolean('disabled', false);
    return Radio.renderSync({
      disabled
    });
  }, { notes: { markdown: RadioReadme } })
  .add('default', () => {
    return RadioDefault.renderSync({});
  }, { notes: { markdown: RadioReadme } })
  .add('disabled', () => {
    return RadioDisabled.renderSync({});
  }, { notes: { markdown: RadioReadme } })
  .add('grouped radio', () => {
    return RadioGroupedRadio.renderSync({});
  }, { notes: { markdown: RadioReadme } })
  .add('custom color', () => {
    return RadioCustomColor.renderSync({});
  }, { notes: { markdown: RadioReadme } });
