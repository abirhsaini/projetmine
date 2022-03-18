import React, { Component } from 'react';

import bg1 from '../assets/image/a.jpg'
import bg2 from '../assets/image/ab-img2.png'
import bg3 from '../assets/image/African-Peanut-Soup-11.webp'
import bg4 from '../assets/image/background.jpg'
import bg5 from '../assets/image/FISH ROYALE.jpg'

export default class Slider extends Component {
  constructor(){
      super();
      this.state = {loginBg: bg1, indexImage: 0}
  }

  changingBackground() {
      const images = [bg1, bg2, bg3, bg4, bg5]

      if (this.indexImage < images.length - 1) {
          this.setState({indexImage: this.state.indexImage + 1});
      } else {
          this.setState({indexImage: 0});
      }

      this.setState({loginBg: images[this.state.indexImage]});
  }


  componentDidMount() {
      this.timer = setInterval(
          () => this.changingBackground(),
          2000
      );
  }

  componentWillUnmount(){
      clearInterval(this.timer);

  }
  render() {
    return (
        <div  className='login vw-100 vh-100' style={{backgroundImage: `url(${this.state.loginBg})`}}>
            
        </div>
    )

}
}