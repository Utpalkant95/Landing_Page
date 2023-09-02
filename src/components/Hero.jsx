import { GiWorld } from "react-icons/gi"
import { IoPhonePortraitOutline } from "react-icons/io5"
import { BsBoxSeamFill } from "react-icons/bs"
import { FaTruckArrowRight } from "react-icons/fa6"
import { BsTelephonePlusFill } from "react-icons/bs"
import owner_img from "../assets/owner_img.jpg"
const Hero = () => {
    const sty = "flex items-center gap-x-2 mb-2"
    return (
        <main className="bg-[#4D2DB7] h-fit py-2 flex items-center justify-between px-4">
            <div>
                <div className={sty}>
                    <div><GiWorld /></div>
                    <div>ALL INDIA DELEVERY ₹80 per Kg.</div>
                </div>
                <div className={sty}>
                    <div>
                        <IoPhonePortraitOutline />
                    </div>
                    <div>ORDER ON DEMAND</div>
                </div>
                <div className={sty}>
                    <div><BsBoxSeamFill /></div>
                    <div>BULK ORDERING</div>
                </div>
                <div className={sty}>
                    <div><FaTruckArrowRight /></div>
                    <div>COURIER SERVICES</div>
                </div>
                <div className={sty}>
                    <div><BsTelephonePlusFill /></div>
                    <div>9643261576, 9910784672, 8851988319</div>
                </div>
            </div>
            <div className="w-24 h-24 rounded-full">
                <img src={owner_img} alt="" className="rounded-full"/>
            </div>
        </main>
    )
}

export default Hero