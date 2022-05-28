import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topBrands.css';
const topBrandList = [
  {
    id: 1,
    title: 'Mehfil',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png',
    time: '38 min',
  },
  {
    id: 2,
    title: 'Shah Ghouse Hotel & Restaurant',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png',
    time: '28 min',
  },
  {
    id: 3,
    title: 'Pista House',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png',
    time: '43 min',
  },
  {
    id: 4,
    title: "Domino's Pizza",
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png',
    time: '30 min',
  },
  {
    id: 5,
    title: 'KFC',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png',
    time: '22 min',
  },
  {
    id: 6,
    title: "Udipi's Upahar",
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/5c34d65e95f5544664ae4355ba5f7b54_1602135287.png',
    time: '24 min',
  },
  {
    id: 7,
    title: 'Kritunga Restaurant',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/362ebbf4f3ca999b7f09e681ca120f96_1604571864.png',
    time: '33 min',
  },
  {
    id: 8,
    title: 'Cream Stone',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png',
    time: '28 min',
  },
  {
    id: 9,
    title: 'Paradise Biryani',
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png',
    time: '40 min',
  },
  {
    id: 10,
    title: "McDonald's",
    cover:
      'https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png',
    time: '36 min',
  },
];
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  alt={brand.title}
                  className="top-brands-image"
                />
                <div className="top-brands-title">{brand.title}</div>
                <div className="top-brands-time">{brand.time}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
