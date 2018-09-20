// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Select from '@ebay/ebayui-core/dist/components/ebay-select/';
import SelectBasic from '@ebay/ebayui-core/dist/components/ebay-select/examples/01-basic/template.marko';
import SelectSelectedOption from '@ebay/ebayui-core/dist/components/ebay-select/examples/02-selected-option/template.marko';
import SelectNestedOptions from '@ebay/ebayui-core/dist/components/ebay-select/examples/03-nested-options/template.marko';
import SelectBorderless from '@ebay/ebayui-core/dist/components/ebay-select/examples/04-borderless/template.marko';
import SelectDisabled from '@ebay/ebayui-core/dist/components/ebay-select/examples/05-disabled/template.marko';
import SelectReadme from '@ebay/ebayui-core/dist/components/ebay-select/README.md';

storiesOf('ebayui/ebay-select', module)
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

    return Select.renderSync({
      name,
      selected,
      borderless,
      disabled,
      options
    });
  }, { notes: { markdown: SelectReadme } })
  .add('basic', () => {
    return SelectBasic.renderSync({});
  }, { notes: { markdown: SelectReadme } })
  .add('selected option', () => {
    return SelectSelectedOption.renderSync({});
  }, { notes: { markdown: SelectReadme } })
  .add('nested options', () => {
    return SelectNestedOptions.renderSync({});
  }, { notes: { markdown: SelectReadme } })
  .add('borderless', () => {
    return SelectBorderless.renderSync({});
  }, { notes: { markdown: SelectReadme } })
  .add('disabled', () => {
    return SelectDisabled.renderSync({});
  }, { notes: { markdown: SelectReadme } });
