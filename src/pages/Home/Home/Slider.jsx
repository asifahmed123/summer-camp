
const Slider = () => {
     return (
          <div className="carousel w-full">
               <div id="slide1" className="carousel-item relative w-full relative">
                    <img src="https://plus.unsplash.com/premium_photo-1664910693173-29d795bbdf5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-full" />
                    <h3 className="absolute text-6xl text-white font-semibold top-1/2 left-60">rbsfnsfhnghnsssbsfgbsfn</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide4" className="btn btn-circle">❮</a>
                         <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide2" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide1" className="btn btn-circle">❮</a>
                         <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide2" className="btn btn-circle">❮</a>
                         <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
               </div>
               <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                         <a href="#slide3" className="btn btn-circle">❮</a>
                         <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
               </div>
          </div>
     );
};

export default Slider;