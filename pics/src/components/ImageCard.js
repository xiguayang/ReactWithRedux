import React from "react";
class ImageCard extends React.Component {
    constructor(props) {
        super();
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    //imageRef is JSX not DOM
    componentDidMount() {
        //at this moment: the console log the img before actually loading the image
        //it will show 0 because image hasen't been loaded
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener("load", this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans: spans });
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
