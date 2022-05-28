import React from 'react';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './deliveryCollections.css';
const deliveryItems = [
  {
    id: 1,
    title: 'Home Style',
    cover:
      'https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png',
  },
  {
    id: 2,
    title: 'Biryani',
    cover:
      'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
  },
  {
    id: 3,
    title: 'Chicken',
    cover:
      'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
  },
  {
    id: 4,
    title: 'Pizza',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
  },
  {
    id: 5,
    title: 'Dosa',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',
  },
  {
    id: 6,
    title: 'Burger',
    cover:
      'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
  },
  {
    id: 7,
    title: 'Shawarma',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png',
  },
  {
    id: 8,
    title: 'Shake',
    cover:
      'https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png',
  },
  {
    id: 9,
    title: 'Paratha',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
  },
  {
    id: 10,
    title: 'Ice Creame',
    cover:
      'https://b.zmtcdn.com/data/o2_assets/4c7697178c268c50e1b1641fca205c231634401116.png',
  },
  {
    id: 11,
    title: 'Chaat',
    cover:
      'https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png',
  },
  {
    id: 12,
    title: 'Noodles',
    cover:
      'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',
  },
];
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
      </div>
    </div>
  );
};

export default DeliveryCollections;
