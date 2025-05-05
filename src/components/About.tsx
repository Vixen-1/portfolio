import { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from '../hoc';
// Define prop types for ServiceCard
interface ServiceCardProps {
  title: string;
  index: number;
  icon: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, index, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        // options={{ max: 45, scale: 1, speed: 450 }} 
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.01)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Ayushi Saxena, a skilled Front-End Developer with over a year of
        experience at Effigo Global, excelling in React, Java Spring Boot, and
        MERN stack to build responsive, high-performance web applications. I
        create immersive 3D models using Three.js, seamlessly integrated into
        React Vite apps, and have optimized solutions to reduce latency by 30%
        with Next.js and Axios. Certified in Microfrontends with React and
        Object Oriented Programming in Java, I deploy scalable AWS solutions in
        agile environments.<br /> Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");