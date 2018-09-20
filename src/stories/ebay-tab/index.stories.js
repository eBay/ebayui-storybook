// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Tab from '@ebay/ebayui-core/dist/components/ebay-tab/';
import TabBasic from '@ebay/ebayui-core/dist/components/ebay-tab/examples/01-basic/template.marko';
import TabStartingIndex from '@ebay/ebayui-core/dist/components/ebay-tab/examples/02-starting-index/template.marko';
import TabFake from '@ebay/ebayui-core/dist/components/ebay-tab/examples/03-fake/template.marko';
import TabFakeWithStartingIndex from '@ebay/ebayui-core/dist/components/ebay-tab/examples/04-fake-with-starting-index/template.marko';
import TabReadme from '@ebay/ebayui-core/dist/components/ebay-tab/README.md';

storiesOf('ebayui/ebay-tab', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
      const index = text('index', '0');
      const fake = boolean('fake', false);

      const headings = object('headings', [
        { renderBody: 'Tab 1' },
        { renderBody: 'Tab 2' },
        { renderBody: 'Tab 3' }
      ]);

      const panels = object('panels', [
        { renderBody: 'Tab 1 content' },
        { renderBody: 'Tab 2 content' },
        { renderBody: 'Tab 3 content' }
      ]);

      return Tab.renderSync({
          index,
          fake,
          headings,
          panels
      });
  }, { notes: { markdown: TabReadme } })
  .add('basic', () => {
    return TabBasic.renderSync({});
  }, { notes: { markdown: TabReadme } })
  .add('starting index', () => {
    return TabStartingIndex.renderSync({});
  }, { notes: { markdown: TabReadme } })
  .add('fake', () => {
    return TabFake.renderSync({});
  }, { notes: { markdown: TabReadme } })
  .add('fake with starting index', () => {
    return TabFakeWithStartingIndex.renderSync({});
  }, { notes: { markdown: TabReadme } });
