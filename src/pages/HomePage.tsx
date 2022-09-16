import { motion } from "framer-motion"

function HomePage() {
    return (
        <motion.div
            className='flex flex-col items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <img src='5.webp' className='m-10' alt='into dark'/>
            <label>- I hold you in the dark</label>
        </motion.div>
    );
}

export default HomePage;