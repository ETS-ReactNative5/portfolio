import React, { Component } from 'react';
import Lightbox from 'react-images';

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = { lightboxIsOpen: false, currentImage: 0, images: this.props.images };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    console.log("go to next")
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
    console.log(this.state.currentImage)
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  renderGallery () {
    const images = this.state.images

    if (!images) return;

    const gallery = images.map((obj, i) => {
      console.log(obj)
      console.log(obj.src)
      if (obj.video) {
        console.log()
        return (
        <a
          href={obj.videoLink}
          key={i}
          target="_blank"
        >
          <img src={obj.src} className="gallery-image" />
        </a>
      );
      }
      return (
        <a
          href={obj.videoLink}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.src} className="gallery-image" />
        </a>
      );
    });

    return (
      <div className="gallery">
        {gallery}
      </div>
    );
  }

  render() {
    return (
      <div className="gallery-lightbox-container">
        {this.renderGallery()}
        <Lightbox
          images={this.state.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}
