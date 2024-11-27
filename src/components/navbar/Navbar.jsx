import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ronak Parmar
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/parmar-ronak/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/parmar_ronak_21/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:parmarronak21112003@gmail.com" target="_blank">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a href="https://github.com/RonakParmar21" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
