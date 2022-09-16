import posts from './posts.json';
import {PostModel} from "../models/posts.model";
import {useEffect, useRef} from "react";
import { motion } from "framer-motion"

function HellDiary() {
    const refs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
       refs.current.forEach((current: HTMLParagraphElement | null, index) => {
           if(current) current.innerHTML = posts.data[index].message;
       }, [refs.current]);
    });
    return (
        <motion.div
            className='font-post-font posts-container pl-left-padding pr-right-padding'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {posts?.data?.map((post: PostModel, index: number) => {
                return (
                    <div key={index} className='mb-36'>
                        <div className='border-solid border mb-8 border-post-border p-7'><p>{post.date}</p></div>
                        <div className='border-solid border border-post-border p-7'><p ref={el => refs.current[index] = el}></p></div>
                        {post.attachment && (
                            <iframe width="560" height="315" src={post.attachment.url}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>)}
                    </div>
                )
            })}
        </motion.div>
    );
}

export default HellDiary;
