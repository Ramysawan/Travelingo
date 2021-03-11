import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className = "render">
                    <img class = "render" src="../pic1.png" />
                </div>
                <div className = "render">
                    <img class = "render" src="../pic2.png" />
                </div>
                <div className = "render">
                    <img class = "render" src="../pic3.png" />
                </div>
            </Carousel>
        </div>
    );
}