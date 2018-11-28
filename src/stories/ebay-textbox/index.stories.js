// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withNotes } from '@storybook/addon-notes';
import TextboxReadme from '@ebay/ebayui-core/dist/components/ebay-textbox/README.md';
import TextBoxForStorybook from './components/textbox-for-storybook/index.marko';
storiesOf('ebayui/ebay-textbox', module)
  .addDecorator(withNotes)
  .add('basic', () => {
    return TextBoxForStorybook.renderSync({});
  }, { notes: { markdown: TextboxReadme } });
