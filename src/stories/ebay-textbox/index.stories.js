// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withNotes } from '@storybook/addon-notes';
import Textbox from '@ebay/ebayui-core/dist/components/ebay-textbox/';
import TextboxReadme from '@ebay/ebayui-core/dist/components/ebay-textbox/README.md';
import TextboxStorybook from './textbox-storybook.marko';
import {withKnobs, boolean, text} from "@storybook/addon-knobs/src/index";

storiesOf('ebayui/ebay-textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('usage', () => {
    return TextboxStorybook.renderSync({});
  }, { notes: { markdown: TextboxReadme } })
  .add('dynamic', () => {
    const value = text('value', '');
    const placeholder = text('placeholder', 'test');
    const fluid = boolean('fluid', '');
    const multiline = boolean('multiline', '');
    const disabled = boolean('disabled', '');
    const invalid = boolean('invalid', '');
    return Textbox.renderSync({
      value,
      placeholder,
      fluid,
      multiline,
      disabled,
      invalid
    });
  }, { notes: { markdown: TextboxReadme } });