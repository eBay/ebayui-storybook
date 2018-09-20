// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Button from '@ebay/ebayui-core/dist/components/ebay-button/';
import ButtonPrimary from '@ebay/ebayui-core/dist/components/ebay-button/examples/01-primary/template.marko';
import ButtonRaw from '@ebay/ebayui-core/dist/components/ebay-button/examples/02-raw/template.marko';
import ButtonSmall from '@ebay/ebayui-core/dist/components/ebay-button/examples/03-small/template.marko';
import ButtonLarge from '@ebay/ebayui-core/dist/components/ebay-button/examples/04-large/template.marko';
import ButtonFake from '@ebay/ebayui-core/dist/components/ebay-button/examples/05-fake/template.marko';
import ButtonDisabled from '@ebay/ebayui-core/dist/components/ebay-button/examples/06-disabled/template.marko';
import ButtonPartiallyDisabled from '@ebay/ebayui-core/dist/components/ebay-button/examples/07-partially-disabled/template.marko';
import ButtonFluid from '@ebay/ebayui-core/dist/components/ebay-button/examples/08-fluid/template.marko';
import ButtonPrimaryLargeFluid from '@ebay/ebayui-core/dist/components/ebay-button/examples/09-primary-large-fluid/template.marko';
import ButtonReadme from '@ebay/ebayui-core/dist/components/ebay-button/README.md';
import ButtonExamplesReadme from './readme.md.js';

storiesOf('ebayui/ebay-button', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const priority = text('priority', 'primary');
    const size = text('size', 'medium');
    const href = text('href', '');
    const fluid = boolean('fluid', '');
    const disabled = boolean('disabled', false);
  	const partiallyDisabled = boolean('partially-disabled', false);
    const renderBody = text('renderBody', 'Hello');

    return Button.renderSync({
      priority,
      size,
      href,
      fluid,
      disabled,
      partiallyDisabled,
      renderBody
    });
  }, { notes: { markdown: ButtonReadme } })
  .add('primary', () => {
    return ButtonPrimary.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.primary } })
  .add('raw', () => {
    return ButtonRaw.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.raw } })
  .add('small', () => {
    return ButtonSmall.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.small } })
  .add('large', () => {
    return ButtonLarge.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.large } })
  .add('fake', () => {
    return ButtonFake.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.fake } })
  .add('disabled', () => {
    return ButtonDisabled.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.disabled } })
  .add('partially disabled', () => {
    return ButtonPartiallyDisabled.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.partiallydisabled } })
  .add('fluid', () => {
    return ButtonFluid.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.fluid } })
  .add('primary large fluid', () => {
    return ButtonPrimaryLargeFluid.renderSync({});
  }, { notes: { markdown: ButtonExamplesReadme.primarylargefluid } });             
