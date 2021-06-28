import React from "react";
import "../stylesheets/acTestOne.css";
import prodPhotos from '../prodPhotos';

import ScrollPhotos from '../Components/ScrollPhotos/scrollPhotos';


export default function AcTestOne () {

    return(
        <div className='ac-test-cont container-fixed'>
            <div>
            <h1>#MakeYourPlantMilk</h1>
            <h2>Share your own creations</h2>
            </div>
            <ScrollPhotos
            data = {prodPhotos}
            pageLimit = {3}
            photoLimit = {4}
            />
        </div>
    )
}