import {TfiYoutube} from "react-icons/tfi"
import {FaInstagramSquare} from "react-icons/fa"

const Header = () => {
    return (
        <header className="w-full bg-[#0E21A0] flex items-center justify-between px-4 py-1 fixed top-0">
            <h1 className="text-[100%] text-white text-center">D KUMAR BOOK CENTER</h1>
            <div className="flex items-center gap-x-2">
                <span className="text-red-600"><a href="https://www.youtube.com/@D_kumar_book_center" target="_blank"><TfiYoutube /></a></span>
                <span className="text-white"><a href="https://www.youtube.com/@D_kumar_book_center" target="_blank"><FaInstagramSquare /></a></span>
                <span className="text-blue-600"><a href="https://www.youtube.com/@D_kumar_book_center" target="_blank"><TfiYoutube /></a></span>
                <span className="text-blue-300"><a href="https://www.youtube.com/@D_kumar_book_center" target="_blank"><TfiYoutube /></a></span>
            </div>
        </header>
    )
}

export default Header