import React from 'react';
import { PhotoResponse } from '../utils/PhotoResponse';

interface ImageCardProps {
  image: PhotoResponse;
}

interface ImageCardState {
  spans: number;
}

class ImageCard extends React.Component<ImageCardProps, ImageCardState> {
  private imageRef: React.RefObject<HTMLImageElement>;

  constructor(props: ImageCardProps) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount(): void {
    const { current } = this.imageRef;

    if (current instanceof HTMLElement) {
      current.addEventListener('load', this.setSpans);
    }
  }

  setSpans = (): void => {
    const { current } = this.imageRef;

    if (current instanceof HTMLElement) {
      const height = current.clientHeight;

      const spans = Math.ceil(height / 10 + 1);

      this.setState({ spans });
    }
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
