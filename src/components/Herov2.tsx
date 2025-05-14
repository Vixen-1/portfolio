import { Button } from "@mui/material";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { zoomIn } from "./utils/motion";

const Herov2 = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <motion.div variants={zoomIn(1, 1)} className="text-center">
            <h1 className="text-[48px] xl:text-[70px] leading-[1.1] font-semibold mb-6">
              Hello I'm <br />
              <span className="text-green-200">Ayushi Saxena</span>
            </h1>
           <h3 className="text-[20px]">I'm a <span className={`${styles.heroSubText}`}>Software Developer</span></h3>
            <p className="max-w-[700px] mb-9 text-white/80 ">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies like
              React, Redux, Next, Express, Node and etc.
            </p>

            <div className="flex flex-col justify-center items-center gap-8">
              <Button
                variant="outlined"
                color="inherit"
                size="medium"
                onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Dvsgr5hQwdpvdsNYR8fk83ZfaPj1Etjx/view?usp=sharing",
                  "_blank",
                  "noopener,noreferrer"
                )}
                sx={{border: '1px solid #86efac', borderRadius: '25px', color: "#86efac"}}
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
