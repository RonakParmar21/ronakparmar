// means portfolio in video
import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/29459444/pexels-photo-29459444/free-photo-of-colorful-code-on-computer-screen-for-web-development.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut, modi ullam dolor ",
  },
  {
    id: 2,
    title: "spring boot Commerce",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut, modi ullam dolor ",
  },
  {
    id: 3,
    title: "dotnet Commerce",
    img: "https://images.pexels.com/photos/6804582/pexels-photo-6804582.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut, modi ullam dolor ",
  },
  {
    id: 4,
    title: "next Commerce",
    img: "https://images.pexels.com/photos/4709293/pexels-photo-4709293.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aut, modi ullam dolor ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
