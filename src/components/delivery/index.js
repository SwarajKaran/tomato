import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    icon: <i class="fi fi-rr-apps-sort"></i>,
    title: 'Delivery Time',
  },
  {
    id: 6,
    title: 'Great Offers',
  },
];
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Order food online in DLF Cyber City, Gachibowli"
      />
    </div>
  );
};

export default Delivery;
