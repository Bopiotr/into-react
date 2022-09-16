import {useRef} from "react";
import {motion} from "framer-motion"

function WhisperPage() {
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const messageInput = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(nameInput.current?.value, emailInput.current?.value, messageInput.current?.value);
        nameInput.current && (nameInput.current.value = '');
        messageInput.current && (messageInput.current.value = '');
        emailInput.current && (emailInput.current.value = '');
    }

    return (
        <motion.div
            className='flex flex-col gap-5 w-full pr-right-padding pl-left-padding'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ duration: 1 }}
        >
            <label className='flex flex-col gap-1'>
                Who are you?
                <input
                    ref={nameInput}
                    className='text-input-text h-9 p-2.5 focus:outline-none rounded'
                />
            </label>

            <label className='flex flex-col gap-1'>
                Leave email
                <input
                    ref={emailInput}
                    className='text-input-text h-9 p-2.5 focus:outline-none rounded'
                />
            </label>

            <label className='flex flex-col gap-1'>
                What is on your mind?
                <textarea
                    ref={messageInput}
                    className='text-input-text h-40 p-2.5 focus:outline-none rounded resize-none'
                ></textarea>
            </label>

            <button className='bg-white-main text-input-text pl-3 pr-3 pt-2 pb-2 rounded w-20'
                    onClick={handleSubmit}>SEND
            </button>
            <p>Alternatively use: whisper@intodark.com.pl</p>
        </motion.div>
    )
}

export default WhisperPage;