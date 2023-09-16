import React from 'react';

import {
  Promo,
  BeforeAfter,
  Advantages,
  ShopPreview,
  AfterBeforePreview,
  Subscription,
  AboutUs,
  Map,
} from 'widgets';

import { Page } from '../page';

export const Home = () => {
  return (
    <Page>
      <Promo /> 
      <BeforeAfter />
      <Advantages />
      <ShopPreview />
      <AfterBeforePreview />
      <Subscription />
      <AboutUs />
      <Map />
    </Page>
  );
};
