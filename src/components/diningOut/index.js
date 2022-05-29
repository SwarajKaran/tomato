import React from 'react';
import Collection from '../common/collection';
import './diningOut.css';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
const collectionList = [
  {
    id: 1,
    title: 'Catch the Match',
    cover:
      'https://b.zmtcdn.com/data/collections/005a1001bd7bc7f626f1425cdaa347dd_1653042396.jpg',
    places: '30 Places',
  },
  {
    id: 2,
    title: 'New in Town',
    cover:
      'https://b.zmtcdn.com/data/collections/e3fe1bbc28cb17b576a41f434278c80b_1653042482.jpg',
    places: '19 Places',
  },
  {
    id: 3,
    title: 'Trending This Week',
    cover:
      'https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040543.png',
    places: '30 Places',
  },
  {
    id: 4,
    title: 'Calling all Bar Hoppers',
    cover:
      'https://b.zmtcdn.com/data/collections/701c1be8afa8d585c69fd02997643498_1653043999.jpg',
    places: '30 Places',
  },
  {
    id: 5,
    title: 'Best of Hyderabad',
    cover:
      'https://b.zmtcdn.com/data/collections/057499abcb8bcb8ac4428d0e4c0f5218_1653044995.jpg',
    places: '64 Places',
  },
  {
    id: 6,
    title: 'For the love of Biryani',
    cover:
      'https://b.zmtcdn.com/data/collections/d716d16f80016a90c3c9fec63663dc6c_1653043562.jpg',
    places: '30 Places',
  },
  {
    id: 7,
    title: 'Happy Hours',
    cover:
      'https://b.zmtcdn.com/data/collections/6ca6779562f818a58d327e487502d51d_1653042262.jpg',
    places: '28 Places',
  },
  {
    id: 8,
    title: 'City Legends',
    cover:
      'https://b.zmtcdn.com/data/collections/3f18937f2fb4ad15c42870df51688bd4_1650265108.png',
    places: '30 Places',
  },
];
const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Open Now',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Online Bookings',
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-apps-sort"></i>,
    title: 'Distance',
  },
  {
    id: 6,
    title: 'Cafes',
  },
];
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters}></Filters>
      </div>
      {/* <ExploreSection list={collectionList} collectionName="Dine Out" /> */}
    </div>
  );
};

export default DiningOut;
