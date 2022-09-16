import {Link} from "react-router-dom";
import React, {useRef, useState} from "react";
import {FaPause, FaPlay} from "react-icons/fa";

const linkStyles = 'p-8 text-base font-link-font hover:text-hover-text';

function PageHeader() {
    const audioElement = useRef<HTMLAudioElement>(null);
    const [audioState, setState] = useState('pause');

    const handlePause = async () => {
        await audioElement.current?.pause();
        setState('pause');
    }

    const handlePlay = async () => {
        await audioElement.current?.play();
        setState('play');
    }

    return (
        <header className='flex h-12 items-center mb-10 w-full'>
            <div className='p-8'>
                <audio ref={audioElement} loop>
                    <source src='/song4.mp3' type='audio/mpeg' />
                </audio>
                {audioState === 'play' && <FaPause onClick={handlePause}/>}
                {audioState === 'pause' && <FaPlay onClick={handlePlay}/>}

            </div>
            <nav className='ml-auto'>
                <Link className={linkStyles} to={'/'}>No escape</Link>
                <Link className={linkStyles} to={'hell-diary'}>Hell Diary</Link>
                <Link className={linkStyles} to={'whisper'}>Whisper</Link>
            </nav>
        </header>
    );
}

export default PageHeader;