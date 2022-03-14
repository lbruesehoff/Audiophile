import React, { Component } from 'react';
import './nav.css'

class nav extends Component {
    render() {
        return (
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Headphones</a>
                <a href="#news">Speakers</a>
                <a href="#contact">Earphones</a>
                <a href="" class="icon" onclick="">
                    <i class="fa fa-bars"></i>
                </a>
                <a>audiophile</a>
                <a>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
                
            </div>
        );
    }
}

export default nav;