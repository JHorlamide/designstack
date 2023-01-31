import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface IPortfolio {
  imageUrl: string;
  width?: string;
  height?: string;
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Portfolio({ imageUrl, width, height }: IPortfolio) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="flex-shrink-0 w-full h-full"
      ref={ref}
      variants={boxVariant}
      initial={{ opacity: 0, scale: 1 }}
      animate={control}
      whileInView={{ opacity: 1, scale: 5 }}
    >
      <img
        src={imageUrl}
        alt="portfolio-image"
        className="relative bg-center bg-cover w-full h-full"
      />
    </motion.div>
  );
}
