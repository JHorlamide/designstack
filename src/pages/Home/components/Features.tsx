interface FeatureProps {
  imageUrl: string;
  text: string;
}

const Features = ({ imageUrl, text }: FeatureProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 px-10 py-8 md:justify-start md:items-start">
      <img src={imageUrl} alt="mail-icon" className="w-[59px] h-[39.64px] md:w-[89.47px] md:h-[60.11px]" />
      <p className="text-[18px] text-white text-center font-medium md:text-xl md:text-start md:max-w-xl">
        {text}
      </p>
    </div>
  );
};

export default Features;
