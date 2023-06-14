
const Slider = () => {
     return (
          <div className="carousel w-full my-20">
               <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://plus.unsplash.com/premium_photo-1664910693173-29d795bbdf5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <h3 className="absolute text-6xl hidden md:block text-white font-semibold top-1/2 left-60">The best services you can find is here</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide4" className="btn btn-circle">❮</a>
                         <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1528024719646-5360a944bd74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <h3 className="absolute text-6xl hidden md:block text-white font-semibold top-1/2 left-60">We take care students like our own child</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide1" className="btn btn-circle">❮</a>
                         <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1646343253545-9171464ce425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <h3 className="absolute text-6xl hidden md:block text-white font-semibold top-1/2 left-60">Our services are absolute best for those who sre seeking for loyal and honest organization</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide2" className="btn btn-circle">❮</a>
                         <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1613332331768-5041274064fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <h3 className="absolute text-6xl hidden md:block text-white font-semibold top-1/2 left-60">No One ever feels bad in our services</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide3" className="btn btn-circle">❮</a>
                         <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
               </div>
          </div>
     );
};

export default Slider;