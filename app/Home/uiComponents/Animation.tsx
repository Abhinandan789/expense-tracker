import { FC } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../public/Animation - 1725017962059.json'; 

const Animation: FC = () => {
  return (
    <div className="h-screen">
      <Lottie animationData={animationData} loop={true} className="transform scale-150 top-24 relative " />
    </div>
  );
};

export default Animation;
