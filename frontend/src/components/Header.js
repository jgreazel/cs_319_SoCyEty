import React from 'react';
import Cyclone from "../assets/CycloneIndexLogo.png";
import CycloneReversed from "../assets/CycloneIndexLogoReversed.png";

class Header extends React.Component{
    render(){
        return(
            <div class="header">
                    <img src={Cyclone} class="image_header"/>   SoCYety   <img src={CycloneReversed} class="image_header"/>
            </div>
        );
    }
}
export default Header;