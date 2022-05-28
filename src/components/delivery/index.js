import React from 'react';
import Filters from '../common/filters';
import './delivery.css';
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
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
    </div>
  );
};

export default Delivery;
