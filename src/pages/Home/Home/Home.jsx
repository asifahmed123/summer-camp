import Slider from "./Slider";
import TopClass from "./TopClass/TopClass";
import TopInstructor from "./TopInstructor/TopInstructor";
import ExtraSection from "./extraSection";

const Home = () => {
     return (
          <div>
               <Slider></Slider>
               <TopClass></TopClass>
               <ExtraSection></ExtraSection>
               <TopInstructor></TopInstructor>
          </div>
     );
};

export default Home;