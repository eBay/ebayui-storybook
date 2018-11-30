// Copyright 2018 eBay Inc. All rights reserved.
// Licensed under the MIT License.
// https://github.com/eBay/ebayui-storybook/blob/master/LICENSE.txt

import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Breadcrumb from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/';
import BreadcrumbHeadingLevel from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/examples/01-breadcrumb-heading-level/template.marko';
import BreadcrumbLastPageAsCurrent from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/examples/02-last-page-as-current/template.marko';
import BreadcrumbLastPageAsParent from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/examples/03-last-page-as-parent/template.marko';
import BreadcrumbPageWithCustomAttributes from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/examples/04-page-with-custom-attributes/template.marko';
import BreadcrumbHijax from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/examples/05-hijax/template.marko';
import BreadcrumbReadme from '@ebay/ebayui-core/dist/components/ebay-breadcrumb/README.md';
import BreadcrumbExamplesReadme from './readme.md.js';
import BreadcrumbStoryBook from './breadcrumb-storybook.marko';

storiesOf('ebayui/ebay-breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('usage', () => {
    return BreadcrumbStoryBook.renderSync({});
  }, { notes: { markdown: BreadcrumbReadme } })
  .add('<dynamic>', () => {
    const headingText = text('headingText', 'Page navigation');
    const headingLevel = text('headingLevel', 'h3');
    const hijax = boolean('hijax', false);
    const items = object('items', [
      { href: 'http://www.ebay.com/sch/nikon', renderBody: 'Search nikon' },
      { href: 'http://www.ebay.com/sch/nike', renderBody: 'Search nike' }
    ]);
    
    return Breadcrumb.renderSync({
      headingText,
      headingLevel,
      hijax,
      items
    });
  }, { notes: { markdown: BreadcrumbReadme } });
