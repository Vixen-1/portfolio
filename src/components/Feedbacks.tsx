import { FC } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

interface FeedbackCardProps {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard: FC<FeedbackCardProps> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    variants={fadeIn("right", "spring", index * 0.5, 1)}
  >
    <p className="text-green-100 font-black text-[40px]">"</p>
    <div className="mt-1">
      <p className="text-green-200 tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-green-100 font-medium text-[16px]">
            <span className="blue-text-gradient">@</span>
            {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback-of-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks: FC = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant(0.1)}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-6`}>
        {testimonials.map((testimony, index) => (
          <FeedbackCard key={testimony.name} index={index} {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");