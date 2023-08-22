import { Link } from 'react-router-dom';
import classes from './Post.module.css';
import { motion } from "framer-motion";

function Post({id, author, body}) {
    return (
        <motion.div whileHover={{scale: 1.1, rotate: 10}}>
            <div className={classes.post}>
                <Link to={id}>
                    <p className={classes.author}>{author}</p>
                    <p className={classes.text}>{body}</p>
                </Link>
            </div>
        </motion.div>
    );
}

export default Post;