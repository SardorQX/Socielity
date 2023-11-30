import Button from "../../../common/button/Button";
import youtTube from '../../../../../public/mock-imges/Vector.svg'

export const Hero = () => {
  return (
    <div className="text-center pt-[138px] flex flex-col justify-center items-center">
      <h1 className="text-center text-[56px] font-bold leading-[78px]">Your Private Online Marketplace <br /> Where <span className="text-blue">Socielities</span> That Comprise Your <br /> Personal <span className="text-blue">World</span></h1>
      <p className="my-[38px] text-text-1 leading-[24px]">Your private online marketplace where you can trade goods and services with family, friends, 
        neighbors, classmates,<br /> co-workers, and members of the many other communities that comprise your personal world.</p>
        <Button>Explore More</Button>
        <div className="flex justify-center items-center mt-[21px]"><img src={youtTube} alt="youtube" className="mr-[11px]"/> <span className="text-[14px] text-text-1 leading-[24px]">Let's have a look</span></div>
    </div>
  );
};
