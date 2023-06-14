
const Footer = () => {
     return (
          <>
               <footer className='bg-[--bgs-b] '>
            <div className="footer py-10 px-28 text-base-content">
                <div>
                    <img src="https://img.freepik.com/free-vector/flat-design-track-field-logo_52683-78010.jpg?w=740&t=st=1686155359~exp=1686155959~hmac=c04fa260ac090cec09cbfb1340a7197e046ba97f5bae91a1fb99f22a66685743" width={90} alt="" />
                    <p className='font-bold text-2xl'>Kids Arena</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Football</a>
                    <a className="link link-hover">Cricket</a>
                    <a className="link link-hover">Hokey</a>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">kids55@gmail.com</a>
                    <a className="link link-hover">+0554454544</a>
                    <a className="link link-hover">www.kids.net</a>
                </div>
            </div>
         <div className='text-center'>   <p>Copyright © 2023 - All right reserved by Kid Ltd</p></div>
        </footer>
          </>
     );
};

export default Footer;