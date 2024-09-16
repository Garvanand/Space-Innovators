import { Link } from "react-router-dom"
import aboutVid from "../assets/Videos/About.webm"
import admin from "../assets/Images/admin.webp"
import reach from "../assets/Images/aboutastro1.webp"
import map from "../assets/Images/map.png"
import call from "../assets/Images/callastro.webp"
import privacy from "../assets/Images/privacy.webp"

const About = () => {
  return (
    <div>
        <div className="flex flex-col gap-10 items-center justify-center w-full h-screen absolute z-10">
            <h1 className="text-white z-30 md:text-[150px] font-cuda text-5xl drop-shadow-2xl">
            ABOUT US
            </h1>
        </div>

        <div className="w-full h-screen">
            <video
            className="w-screen h-screen object-cover brightness-90"
            autoPlay
            loop
            muted
            >
            <source src={aboutVid} type="video/webm" />
            </video>
        </div>

        <div className="bg-cover bg-center bg-no-repeat h-full bg-EventBG px-20">
                <section className="mx-auto py-20">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-4/12">
                            <img src={admin} alt="Astronaut 1 img" className="hidden md:block rounded-2xl"/>
                        </div>
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left">
                                <h2 className="text-4xl text-white text-center sm:text-left">About<span className="text-[#5F43B2] mx-3 font-cSB">Space Innovators Society(Formerly Anterix Club)</span></h2>
                                <p className="font-cR text-white">.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left text-white">
                                <h2 className="text-4xl">How to <span className="text-[#5F43B2]">Reach?</span></h2>
                                <p className="text-white font-cR">VIT Bhopal University, Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh {466114}</p>
                                <Link to="https://maps.app.goo.gl/wykpKPLoe1LDpj4P6">
                                    <img src={map} alt="GBPIET MAP" className="rounded-3xl duration-300 hover:scale-[1.02]" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-4/12">
                            <img src={reach} alt="Astronaut 2 img" className="hidden md:block"/>
                        </div>
                    </div>
                </section>

                <section className="mx-auto py-4 md:py-20">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-4/12">
                            <img src={privacy} alt="Astronaut 1 img" className="hidden md:block rounded-2xl"/>
                        </div>
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left">
                                <h2 className="text-4xl text-white text-center">We Protect your<span className="text-[#5F43B2] mx-3 font-cSB">Privacy</span></h2>
                                <p className="text-white text-center">Read More About our Privacy Policy <Link to="/tos"><span className="text-[#5f43b2]">HERE</span></Link></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto pt-4 pb-10 md:py-20">
                    <div className="flex flex-col gap-16 md:flex-row justify-between items-center">
                        <div className="w-full md:w-4/12">
                            <img src={call} alt="Astronaut 1 img" className="hidden md:block rounded-2xl"/>
                        </div>
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-col gap-14 font-cM text-center md:text-left">
                                <h2 className="text-4xl text-white text-center">Whom to<span className="text-[#5F43B2] mx-3 font-cSB">Contact ?</span></h2>
                                <div className="flex flex-col gap-2 text-center ">
                                    <p className="font-cR text-[#5F43B2] text-xl"> Dheeraj Saraswat <span className="text-white">(Society Head)</span></p>
                                    <p className="text-white">+91 6367510083</p>
                                    <p className="text-white text-sm text-center">dheeraj.23bcy10146@vitbhopal.ac.in</p>
                                </div>
                                <div className="flex flex-col gap-2 text-center">
                                    <p className="font-cR text-[#5F43B2] text-xl"> Garv Anand <span className="text-white">(Society Head)</span></p>
                                    <p className="text-white">+91 8054182892</p>
                                    <p className="text-white">garv.23bai10605@vitbhopal.ac.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>

    </div>
  )
}

export default About