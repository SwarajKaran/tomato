import React from 'react';
import Collection from '../common/collection';
import './nightLife.css';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { nightlife } from '../../data/nightlife';

const collectionList = [
  {
    id: 1,
    title: 'Calling all Bar Hoppers',
    cover:
      'https://b.zmtcdn.com/data/collections/701c1be8afa8d585c69fd02997643498_1653043999.jpg?output-format=webp',
    places: '29 Places',
  },
  {
    id: 2,
    title: 'Happy Hours',
    cover:
      'https://b.zmtcdn.com/data/collections/6ca6779562f818a58d327e487502d51d_1653042262.jpg?output-format=webp',
    places: '27 Places',
  },
];
const nightlifeFilters = [
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
    icon: <i className="fi fi-rr-apps-sort"></i>,
    title: 'Distance',
  },
  {
    id: 4,
    title: 'Pubs & Bars',
  },
];
const restaurantList = nightlife;
const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightlifeFilters}></Filters>
      </div>
      <ExploreSection
        list={restaurantList}
        collectionName="Nightlife Restaurants in Gachibowli"
      />
    </div>
  );
};

export default NightLife;
