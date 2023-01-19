import React from 'react';

const SingleCarousel = () => {
  return (
         // <!-- slider -->
         <div class="main">
         <section class="mt-5" id="sliders">
   
         </section>
         <div class="dots d-flex mt-2 w-100 justify-content-center align-items-center bg-light">
           <span class="dot" onclick="changeItem(-1)"></span>
           <span class="dot" onclick="changeItem(1)"></span>
         </div>
       </div>
  );
};

export default SingleCarousel;