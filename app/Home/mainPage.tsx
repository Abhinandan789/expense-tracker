import Image from 'next/image';

const MainPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col">
      <Image
        src="/cool-background.png"
        alt="Background"
        layout="fill" // This makes the image cover the entire div
        objectFit="cover" // This ensures the image covers the div without distortion
        quality={100} // Optional: set the quality of the image
      />
      <div className="inset-0 flex z-10 items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">SAVE Your Money</h1>
          <h2 className="text-2xl mt-4">BY TRACKING YOUR EXPENSES</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
