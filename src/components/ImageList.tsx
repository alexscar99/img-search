import './ImageList.css';
import React from 'react';
import { PhotoResponse } from '../utils/PhotoResponse';
import ImageCard from './ImageCard';

interface ImageListProps {
  images: PhotoResponse[];
}

const ImageList = (props: ImageListProps) => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
