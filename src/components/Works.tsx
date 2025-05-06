import { FC } from "react";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "./utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Works: FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("down", "spring", 0.1, 0.75)}
          className="mt-3 text-green-400 text-[17px] max-w-3xl leading-[30px]"
        >
          Following Projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
