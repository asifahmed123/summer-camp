import Slider from "./Slider";
import TopClass from "./TopClass/TopClass";
import TopInstructor from "./TopInstructor/TopInstructor";
import ExtraSection from "./extraSection";

const Home = () => {
     return (
          <div>
               <h2 className="text-center text-7xl font-semibold text-red-600 underline">Welcome to KIDS ARENA</h2>
               <Slider></Slider>
               <TopClass></TopClass>
               <ExtraSection></ExtraSection>
               <TopInstructor></TopInstructor>
          </div>
     );
};

export default Home;