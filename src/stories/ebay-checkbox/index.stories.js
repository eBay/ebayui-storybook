// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Checkbox from '@ebay/ebayui-core/dist/components/ebay-checkbox/';
import CheckboxDefault from '@ebay/ebayui-core/dist/components/ebay-checkbox/examples/01-default/template.marko';
import CheckboxDisabled from '@ebay/ebayui-core/dist/components/ebay-checkbox/examples/02-disabled/template.marko';
import CheckboxGroupedCheckbox from '@ebay/ebayui-core/dist/components/ebay-checkbox/examples/03-grouped-checkbox/template.marko';
import CheckboxCustomColor from '@ebay/ebayui-core/dist/components/ebay-checkbox/examples/04-custom-color/template.marko';
import CheckboxReadme from '@ebay/ebayui-core/dist/components/ebay-checkbox/README.md';

storiesOf('ebayui/ebay-checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const disabled = boolean('disabled', false);
    return Checkbox.renderSync({
      disabled
    });
  }, { notes: { markdown: CheckboxReadme } })
  .add('default', () => {
    return CheckboxDefault.renderSync({});
  })
  .add('disabled', () => {
    return CheckboxDisabled.renderSync({});
  })
  .add('grouped checkbox', () => {
    return CheckboxGroupedCheckbox.renderSync({});
  })
  .add('custom color', () => {
    return CheckboxCustomColor.renderSync({});
  });
