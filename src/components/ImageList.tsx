import React from 'react';
import { PhotoResponse } from '../utils/PhotoResponse';

interface ImageListProps {
  images: PhotoResponse[];
}

const ImageList = (props: ImageListProps) => {
  console.log(props.images);
  return <div>ImageList</div>;
};

export default ImageList;
