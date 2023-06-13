import TopClass from "../../TopClass/TopClass";
import TopInstructor from "../../TopInstructor/TopInstructor";
import svg from '../../../assets/wave-haikei.svg';

const Home = () => {
     return (
          <div style={{backgroundImage: `url(${svg})`}}>
               <TopClass></TopClass>
               <TopInstructor></TopInstructor>
          </div>
     );
};

export default Home;