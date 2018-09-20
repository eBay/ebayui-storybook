// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Pagination from '@ebay/ebayui-core/dist/components/ebay-pagination/';
import PaginationBasicLinks from '@ebay/ebayui-core/dist/components/ebay-pagination/examples/01-basic-links/template.marko';
import PaginationArrowsDisabled from '@ebay/ebayui-core/dist/components/ebay-pagination/examples/02-arrows-disabled/template.marko';
import PaginationWithoutArrowsInput from '@ebay/ebayui-core/dist/components/ebay-pagination/examples/03-without-arrows-input/template.marko';
import PaginationA11yText from '@ebay/ebayui-core/dist/components/ebay-pagination/examples/04-a11y-text/template.marko';
import PaginationButtons from '@ebay/ebayui-core/dist/components/ebay-pagination/examples/05-buttons/template.marko';
import PaginationReadme from '@ebay/ebayui-core/dist/components/ebay-pagination/README.md';

storiesOf('ebayui/ebay-pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('<dynamic>', () => {
    const href = text('href', '#');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
    const accessibilityCurrent = text('accessibility-current', '');
    const hijax = boolean('hijax', '');
    const items = object('items', [
        { renderBody: '1', type: 'page', disabled: false },
        { renderBody: '2', type: 'page', disabled: false },
        { renderBody: '3', type: 'page', disabled: false }
      ]);

    return Pagination.renderSync({
      href,
      accessibilityPrev,
      accessibilityNext,
      accessibilityCurrent,
      hijax,
      items
    });
  }, { notes: { markdown: PaginationReadme } })
  .add('basic links', () => {
    return PaginationBasicLinks.renderSync({});
  }, { notes: { markdown: PaginationReadme } })
  .add('hijax', () => {
    return PaginationHijax.renderSync({});
  }, { notes: { markdown: PaginationReadme } })
  .add('arrows disabled', () => {
    return PaginationArrowsDisabled.renderSync({});
  }, { notes: { markdown: PaginationReadme } })
  .add('without arrows input', () => {
    return PaginationWithoutArrowsInput.renderSync({});
  }, { notes: { markdown: PaginationReadme } })
  .add('accessibility text', () => {
    return PaginationA11yText.renderSync({});
  }, { notes: { markdown: PaginationReadme } })
  .add('buttons', () => {
    return PaginationButtons.renderSync({});
  }, { notes: { markdown: PaginationReadme } });
