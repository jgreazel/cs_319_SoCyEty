import React from 'react';
import Cyclone from "../assets/CycloneIndexLogo.png";
import CycloneReversed from "../assets/CycloneIndexLogoReversed.png";

class Header extends React.Component{
    render(){
        return(
            <div class="header">
                <h1>
                    <img src={Cyclone} class="image_header"/>   SoCYety   <img src={CycloneReversed} class="image_header"/>
                </h1>
            </div>
        );
    }
}
export default Header;