import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectedGallery, clearGallery } from '../actions'
import { bindActionCreators } from 'redux'
import Slider from 'react-slick';

//components
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}

class Gallery extends Component {

  componentDidMount () {
    this.props.selectedGallery(this.props.match.params.id)
  }

  componentWillUnmount () {
    this.props.clearGallery()
  }

  renderSlider = ({ selected }) => {
    if (selected) {
      const gallery = selected[0];
      console.log(gallery)
      return (
        <div><h3>The best of {gallery.artist}</h3>
          <Slider {...settings} >
            {gallery.images.map((item, idx) => {
              return (
                <div key={idx} className="slide-item">
                  <div>
                    <div className="image" style={{ background: `url(./images/galleries/${item.img})` }}>
                    </div>
                    <div className="description"><span>{item.desc}</span></div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      )
    }
  }

  render () {
    const item = this.props.gallery;

    return (
      <div className="slide-item-wrap">
        {this.renderSlider(item)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    gallery: state.gallery
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectedGallery, clearGallery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)