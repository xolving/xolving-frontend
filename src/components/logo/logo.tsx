import styles from './logo.module.css'

export default function Logo(){
    return (
        <div className={styles.div}>
            <svg xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.443 14.6072C153.443 14.6072 67.583 -18.259 34.8285 14.6072C31.4036 18.0438 28.695 22.063 26.5902 26.5054C22.0935 28.6218 18.0275 31.3565 14.5575 34.8265C-18.1969 67.581 14.5575 153.441 14.5575 153.441C14.5575 153.441 100.418 186.195 133.172 153.441C136.466 150.147 139.097 146.317 141.165 142.091C145.76 139.952 149.91 137.171 153.443 133.626C186.197 100.76 153.443 14.6072 153.443 14.6072ZM141.165 142.091C159.671 104.288 133.172 34.8265 133.172 34.8265C133.172 34.8265 64.5402 8.64431 26.5902 26.5054C8.56573 64.5483 34.8285 133.626 34.8285 133.626C34.8285 133.626 103.166 159.785 141.165 142.091Z" fill="url(#paint0_linear_1288_74)"/>
                <defs>
                <linearGradient id="paint0_linear_1288_74" x1="79.009" y1="29.7332" x2="79.009" y2="148.753" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5D53"/>
                <stop offset="1" stop-color="#FF9458"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    )
}