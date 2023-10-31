import React from "react";
import ReactImageGallery from "react-image-gallery";
import DATA from '../data/data.json';
import "react-image-gallery/styles/css/image-gallery.css";


const images = DATA.Gallery.map((item) => ({
  original: item.largeImage,
  thumbnail: item.smallImage,
  description: item.title,
}));

const Gallery = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Library</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
                    <ReactImageGallery className="portfolio-item" items={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
