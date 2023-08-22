import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import { motion } from 'framer-motion';
import classes from './MainHeader.module.css';


function MainHeader() {
  return (
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          React Poster
        </h1>
        <p>
          <motion.div whileHover={{scale: 1.1}}>
            <Link to="/create-post" className={classes.button}>
              <MdPostAdd size={18} />
              New Post
            </Link>
          </motion.div>
        </p>
      </header>
  );
}

export default MainHeader;
