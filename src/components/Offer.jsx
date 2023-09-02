import indian_polity_eng_front from "../assets/indian_polity_eng_front.jpg"
import indian_polity_eng_back from "../assets/indian_polity_eng_back.jpg"
import indian_polity_hin_front from "../assets/indian_polity_hin_front.jpg"
import indian_polity_hin_back from "../assets/indian_polity_hin_back.jpg"
const Offer = () => {
    return (
        <section className="bg-[#9D44C0] h-fit py-2 px-2 flex flex-col gap-y-2">
            <h2 className="text-center font-bold text-2xl mb-4 underline">Latest Books by M.Laxmiakanth</h2>
            <div className="border-2 border-white py-2">
                <div className="flex px-2 py-1 gap-x-1 rounded-sm">
                    <div className="border-2 border-white rounded-md">
                        <img src={indian_polity_eng_front} alt="" />
                    </div>
                    <div className="border-2 border-white rounded-md">
                        <img src={indian_polity_eng_back} alt="" />
                    </div>
                </div>
                <div className="bg-white shadow-md py-1 mt-4 rounded-md mx-2 flex items-center flex-wrap  gap-x-6 gap-y-1 px-1">
                    <div className="aurthor">
                        <h2 className="font-bold text-sm">Author Name</h2>
                        <span className="text-xs font-medium">M Laxmikanth</span>
                    </div>
                    <div className="Book Name">
                        <h2 className="font-bold text-sm">Book Name</h2>
                        <span className="text-xs font-medium">Indian Polity</span>
                    </div>
                    <div className="Book Language">
                        <h2 className="font-bold text-sm">Book Language</h2>
                        <span className="text-xs font-medium">English</span>
                    </div>
                    <div className="Book Edition">
                        <h2 className="font-bold text-sm">Book Edition</h2>
                        <span className="text-xs font-medium">7th</span>
                    </div>
                    <div className="Book Price">
                        <h2 className="font-bold text-sm">Book Price</h2>
                        <p><span className="text-xs font-medium line-through">₹ 1045.00</span> <span className="text-xs font-medium">-35% </span><span className="text-xs font-medium">₹ 680.00</span></p>
                    </div>
                </div>
            </div>
            <div className="border-2 border-white py-2">
                <div className="flex px-2 py-1 gap-x-1 rounded-sm">
                    <div className="border-2 border-white rounded-md">
                        <img src={indian_polity_hin_front} alt="" />
                    </div>
                    <div className="border-2 border-white rounded-md">
                        <img src={indian_polity_hin_back} alt="" />
                    </div>
                </div>
                <div className="bg-white shadow-md py-1 mt-4 rounded-md mx-2 flex items-center flex-wrap  gap-x-6 gap-y-1 px-1">
                    <div className="aurthor">
                        <h2 className="font-bold text-sm">Author Name</h2>
                        <span className="text-xs font-medium">M Laxmikanth</span>
                    </div>
                    <div className="Book Name">
                        <h2 className="font-bold text-sm">Book Name</h2>
                        <span className="text-xs font-medium">Indian Polity</span>
                    </div>
                    <div className="Book Language">
                        <h2 className="font-bold text-sm">Book Language</h2>
                        <span className="text-xs font-medium">Hindi</span>
                    </div>
                    <div className="Book Edition">
                        <h2 className="font-bold text-sm">Book Edition</h2>
                        <span className="text-xs font-medium">7th</span>
                    </div>
                    <div className="Book Price">
                        <h2 className="font-bold text-sm">Book Price</h2>
                        <p><span className="text-xs font-medium line-through">₹ 1045.00</span> <span className="text-xs font-medium">-35% </span><span className="text-xs font-medium">₹ 680.00</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer