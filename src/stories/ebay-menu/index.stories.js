// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Menu from '@ebay/ebayui-core/dist/components/ebay-menu/';
import MenuBasic from '@ebay/ebayui-core/dist/components/ebay-menu/examples/01-basic/template.marko';
import MenuFake from '@ebay/ebayui-core/dist/components/ebay-menu/examples/02-fake/template.marko';
import MenuFixWidth from '@ebay/ebayui-core/dist/components/ebay-menu/examples/03-fix-width/template.marko';
import MenuReverse from '@ebay/ebayui-core/dist/components/ebay-menu/examples/04-reverse/template.marko';
import MenuBorderless from '@ebay/ebayui-core/dist/components/ebay-menu/examples/05-borderless/template.marko';
import MenuSmall from '@ebay/ebayui-core/dist/components/ebay-menu/examples/06-small/template.marko';
import MenuPrimary from '@ebay/ebayui-core/dist/components/ebay-menu/examples/07-primary/template.marko';
import MenuNoText from '@ebay/ebayui-core/dist/components/ebay-menu/examples/08-no-text/template.marko';
import MenuIconWithText from '@ebay/ebayui-core/dist/components/ebay-menu/examples/09-icon-with-text/template.marko';
import MenuIconWithToggle from '@ebay/ebayui-core/dist/components/ebay-menu/examples/10-icon-with-toggle/template.marko';
import MenuIconWithoutToggle from '@ebay/ebayui-core/dist/components/ebay-menu/examples/11-icon-without-toggle/template.marko';
import MenuRadio from '@ebay/ebayui-core/dist/components/ebay-menu/examples/12-radio/template.marko';
import MenuCheckbox from '@ebay/ebayui-core/dist/components/ebay-menu/examples/13-checkbox/template.marko';
import MenuScrollable from '@ebay/ebayui-core/dist/components/ebay-menu/examples/14-scrollable/template.marko';
import MenuReadme from '@ebay/ebayui-core/dist/components/ebay-menu/README.md';

storiesOf('ebayui/ebay-menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const label = text('label', 'eBay Menu');
    const expanded = boolean('expanded', false);
    const type = text('type', 'fake');
    const reverse = boolean('reverse', false);
    const fixWidth = boolean('fix-width', false);
    const borderless = boolean('borderless', false);
    const checked = number('checked', 1);
    const items = object('items', [
      { renderBody: 'Item 1', href: '', type: 'Button', checked: 'false', current: 'true'  },
      { renderBody: 'Item 1', href: '', type: '', checked: 'false', current: 'false'  },
      { renderBody: 'Item 1', href: '', type: '', checked: 'false', current: 'false'  }
    ]);
    
    return Menu.renderSync({
      label,
      expanded,
      type,
      reverse,
      fixWidth,
      borderless,
      checked,
      items
    });
  }, { notes: { markdown: MenuReadme } })
  .add('basic', () => {
    return MenuBasic.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('fake', () => {
    return MenuFake.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('fix width', () => {
    return MenuFixWidth.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('reverse', () => {
    return MenuReverse.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('borderless', () => {
    return MenuBorderless.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('small', () => {
    return MenuSmall.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('primary', () => {
    return MenuPrimary.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('no text', () => {
    return MenuNoText.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('icon with text', () => {
    return MenuIconWithText.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('icon with toggle', () => {
    return MenuIconWithToggle.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('icon without toggle', () => {
    return MenuIconWithoutToggle.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('radio', () => {
    return MenuRadio.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('checkbox', () => {
    return MenuCheckbox.renderSync({});
  }, { notes: { markdown: MenuReadme } })
  .add('scrollable', () => {
    return MenuScrollable.renderSync({});
  }, { notes: { markdown: MenuReadme } });
