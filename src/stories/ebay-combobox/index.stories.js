// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Combobox from '@ebay/ebayui-core/dist/components/ebay-combobox/';
import ComboboxBasic from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/01-basic/template.marko';
import ComboboxSelectedOption from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/02-selected-option/template.marko';
import ComboboxNestedOptions from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/03-nested-options/template.marko';
import ComboboxBorderless from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/04-borderless/template.marko';
import ComboboxDisabled from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/05-disabled/template.marko';
import ComboboxFluid from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/06-fluid/template.marko';
import ComboboxScrollable from '@ebay/ebayui-core/dist/components/ebay-combobox/examples/07-scrollable/template.marko';
import ComboboxReadme from '@ebay/ebayui-core/dist/components/ebay-combobox/README.md';

storiesOf('ebayui/ebay-combobox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const name = text('name', '');
    const selected = number('selected', 1);
    const borderless = boolean('borderless', false);
    const disabled = boolean('disabled', false);

    const options = object('options', [
      { label: 'Option 1', value: 'Option 1'},
      { label: 'Option 2', value: 'Option 2'}
    ]);

    return Combobox.renderSync({
      name,
      selected,
      borderless,
      disabled,
      options
    });
  }, { notes: { markdown: ComboboxReadme } })
  .add('basic', () => {
    return ComboboxBasic.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('selected option', () => {
    return ComboboxSelectedOption.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('nested options', () => {
    return ComboboxNestedOptions.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('borderless', () => {
    return ComboboxBorderless.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('disabled', () => {
    return ComboboxDisabled.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('fluid', () => {
    return ComboboxFluid.renderSync({});
  }, { notes: { markdown: ComboboxReadme } })
  .add('scrollable', () => {
    return ComboboxScrollable.renderSync({});
  }, { notes: { markdown: ComboboxReadme } });
