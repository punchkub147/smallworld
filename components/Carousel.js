import React, { Component } from 'react';

import Carousel from 'nuka-carousel';
import ImageGallery from 'react-image-gallery';

class myCarousel extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {
    const images = [
      {
        original: 'http://www.dairylink-uk.com/sites/default/files/images/content/nursery-teacher-with-children.jpg',
      },
      {
        original: 'https://piesiecreativity.com/wp-content/uploads/2017/03/How-to-Create-Positive-Learning-Mindset-Among-Students-900x500.jpg',
      },
      {
        original: 'http://blogs.edweek.org/teachers/teaching_now/Boy-Studying-in-Classroom-Laptop_900x500-Getty.jpg',
      }
    ]

    return (
      <div id="Carousel">
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
      </div>
    );
  }
}

export default myCarousel;