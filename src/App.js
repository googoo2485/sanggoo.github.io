import React,{useState} from 'react';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import './App.css';
const App = () => {
  return (
    <div className="App">
       <CarouselProvider
          visibleSlides={1}
          orientation="vertical"
          totalSlides={3}
          step={1}
          touchEnabled={false}>
            <Slider>
            <Slide index={0}>
              <Page1 />
            </Slide>

            <Slide index={1}>
              <Page2 />
            </Slide>

            <Slide index={2}>
              <Page3 />
            </Slide>

            </Slider>
        </CarouselProvider>
    </div>
  )
}

export default App
