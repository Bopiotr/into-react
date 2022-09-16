import {FaBandcamp, FaFacebookF, FaYoutube} from "react-icons/fa";
import React from "react";

const socialLinksStyles = 'w-9 h-9 flex items-center justify-center rounded-md bg-[#303030]';

function PageFooter() {
    return (
        <footer className='border-solid border-t-2 flex pt-3 m-36 mt-10 mb-10 gap-3 w-3/5 pl-4'>
            <a className={socialLinksStyles} target='_blank' rel="noreferrer"
               href='https://www.facebook.com/intodarkofficial'><FaFacebookF/></a>
            <a className={socialLinksStyles} target='_blank' rel="noreferrer"
               href='https://intodark.bandcamp.com/releases'><FaBandcamp/></a>
            <a className={socialLinksStyles} target='_blank' rel="noreferrer"
               href='https://www.youtube.com/channel/UChQL1_Kh5kaDsF93GUqRXCA'><FaYoutube/></a>
        </footer>
    );
}

export default PageFooter;