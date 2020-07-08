import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

function SideNav(){

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    }, [])

    return (
        <div>
            <div>
                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                    <div class="background">
                        <img src="images/office.jpg" />
                    </div>
                    <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a  data-target="slide-out" 
                    class="btn-floating btn-large floatButton teal dark-2 sidenav-trigger">
                    <i class="material-icons">menu</i>
                </a>
            </div>  
        </div>
    )

}

export default SideNav