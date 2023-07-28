import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div>
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px]"
                            src="assets/cntower.png"
                        />
                    </div>
                ) : (
                    <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px]"
                            src="assets/cntower.png"
                        />
                )}
            </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible" //when div is shown on screen, run animation
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}    
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Hello World!
                        </p>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            I'm Carlson, a software developer! <br></br> <br></br>
                            Besides software development, I enjoy gaming 🎮, playing basketball 🏀, running 🏃, and weightlifting! 🏋️ 
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible" //when div is shown on screen, run animation
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}  
                    >
                        <AnchorLink
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                                hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Contact Me
                        </AnchorLink>

                    </motion.div>

                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible" //when div is shown on screen, run animation
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}  
                    >
                        <SocialMediaIcons />
                    </motion.div>

                </div>
        </section>
    )
}

export default Landing;