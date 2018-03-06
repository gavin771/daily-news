import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const showGallery = ({ gallery }) => {
  if (gallery) {
    return (
      <Slider {...settings}>
        {gallery.map((i) => {
          return (<Link to={`/galleries/${i.id}`}
            key={i.id}
            className="slider_item">
            <div
              className="image"
              style={{ background: `url(/images/galleries/${i.images[0].img})` }}>
              <h3>{i.artist}</h3>
            </div>
          </Link>)
        })}
      </Slider>
    )
  }
}

const Gallery = (props) => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      {showGallery(props)}
    </div>
  )
}

export default Gallery