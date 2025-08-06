import { Button } from "@mui/material";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { zoomIn } from "./utils/motion";

const Herov2 = () => {
  return (
    <section className="h-full flex flex-row gap-12">
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-[cyan]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div className="container mx-auto text-left">
        <motion.div variants={zoomIn(1, 1)} className="text-left">
          <h1 className="text-[26px] xl:text-[45px] leading-[1.1] font-semibold mt-9 xl:mt-0 mb-6">
            Hi! I'm <br />
            <span className="text-[40px] xl:text-[70px] text-green-200">Ayushi Saxena</span>
          </h1>
          <h3 className="text-[20px]">
            I'm a{" "}
            <span className={`${styles.heroSubText} text-cyan-200`}>
              Software Developer
            </span>
          </h3>
          {/* <p className="max-w-[700px] mb-9 mt-3 text-white/80 ">
            I'm a passionate front-end developer who crafts elegant, user-centric digital experiences with expertise in JavaScript, TypeScript, React, React Native, Redux, Next.js, Express, and Node.js. Leveraging advanced technologies like Three.js, Framer Motion, and AI-driven tools, I build responsive, scalable applications, from dynamic movie discovery platforms to innovative AI-powered interview prep solutions.
          </p> */}
<p className="max-w-[700px] mb-9 mt-3 text-white/80 ">
            with 1+ year of experience building dynamic and responsive web and mobile applications using React.js, Next.js, React Native, Express.js, Redux, Javascript and Typescript. Proficient in integrating AI-driven APIs and optimizing UI performance, eager to contribute to innovative startup projects.
          </p>
          <div className="flex flex-row justify-start items-start gap-8">
            <Button
              variant="outlined"
              color="inherit"
              size="medium"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/11SfpNWGav1Xh9ZQ4cuWTpiELdBjEnwc_/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{
                border: "1px solid #86efac",
                borderRadius: "25px",
                color: "#86efac",
              }}
              className="border border-green-300 rounded-full text-green-300 hover:bg-green-300 hover:text-black hover:transition-all duration-500"
              endIcon={<FiDownload className="text-xl" />}
            >
              Resume
            </Button>
            <div className="mb-0">
              <Socials />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Herov2, "home");
