import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {opacity: 1, scale: 1 }
}

const Project = ({ title, description, image, demo, repo }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`; //text that pops over image

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {description}<br></br><br></br>
                    <a href={demo} target="_blank" rel="noreferrer">LINK TO DEMO</a> <br></br>
                    <a href={repo} target="_blank" rel="noreferrer">LINK TO REPO</a>
                </p>
            </div>
            {/* <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} /> */}
            <img src={`../assets/${image}.jpeg`} alt={image} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible" //when div is shown on screen, run animation
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}    
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Below is a list of projects that I am either working on, or have completed!
                </p>
            </motion.div>

            {/* PROJECTS */}

            {/* First Project */}
            <div class="container mx-auto grid grid-cols-2 gap-4">
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> Carlson's <span className="text-red">Convenience</span> </p>
                    <br />
                    <p class="text-stone-400">NextJS, TailwindCSS, Zustand, Stripe</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Carlson's Convenience is an e-commerce application created using NextJS, TailwindCSS, Zustand, and Stripe! 
                                Users can add products to cart and purchase it using Stripe.
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" href="https://github.com/carlsondultra/nextjs-store">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" href="https://carlsonsconvenience.vercel.app/">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Visit Demo
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <img class="object-scale-down" src="../assets/convenienceproject.jpeg" alt="Convenience Screenshot"/>                
                </div>
            </div>
            <br/>

            {/* Line Divider */}
            <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2"/>
            </div>
            <br />

            {/* Second Project */}
            <div class="container mx-auto grid grid-cols-2 gap-4">
                <div>
                    <img class="object-scale-down" src="../assets/quizproject.jpeg" alt="Quiz Screenshot"/>                
                </div>
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> <span className="text-red">Quiz - </span> It </p>
                    <br />
                    <p class="text-stone-400">NextJS, OpenAI, Prisma, TailwindCSS, NextAuth</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Quiz-It is an AI Quiz Application created using NextJS, OpenAI, Prisma, TailwindCSS, shadcn and NextAuth.
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" href="https://github.com/carlsondultra/openai-quiz">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" href="https://quiz-it-delta.vercel.app/">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Visit Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <br/>

            {/* Line Divider */}
            <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2"/>
            </div>
            <br />

            {/* Third Project */}
            <div class="container mx-auto grid grid-cols-2 gap-4">
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> Portfolio <span className="text-red">Website</span> </p>
                    <br />
                    <p class="text-stone-400">React.js, TailwindCSS</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Portfolio website to showcase my skills and projects, created using React and TailwindCSS.
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" href="https://github.com/carlsondultra/react-portfolio">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" href="https://carlsondultra.vercel.app/">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Visit Demo
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <img class="object-scale-down" src="../assets/portfolioproject.jpeg" alt="Portfolio Screenshot"/>                
                </div>
            </div>
            <br/>

            {/* Line Divider */}
            <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2"/>
            </div>
            <br />

            
            {/* Fourth Project */}
            <div class="container mx-auto grid grid-cols-2 gap-4">
                <div>
                    <img class="object-scale-down" src="../assets/oldportfolioproject.jpeg" alt="Old Portfolio Screenshot"/>                
                </div>
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> <span className="text-red">Previous </span> Portfolio Website </p>
                    <br />
                    <p class="text-stone-400">React.js, HTML, CSS, Styled-Components</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Previous portfolio website, created using React, HTML, CSS and Styled-Components.
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" href="https://github.com/carlsondultra/carlsondultra.github.io">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" href="https://carlsondultra.github.io/">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Visit Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <br/>


            {/* Line Divider */}
            <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2"/>
            </div>
            <br />

            
            {/* Fifth Project */}
            <div class="container mx-auto grid grid-cols-2 gap-4">
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> Game <span className="text-red">Review</span> </p>
                    <br />
                    <p class="text-stone-400">PostgreSQL, Express.js, React.js, Node.js</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                A Game Review application created using PostgreSQL, Express.js, React.js, and Node.js.
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" href="https://github.com/carlsondultra/review">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 opacity-50 cursor-not-allowed rounded-r">
                                Demo Not Available
                            </button>
                    </div>
                </div>
                <div>
                    {/* <img class="object-scale-down" src="../assets/conveniencefull.jpeg" alt="Convenience Screenshot"/>                 */}
                </div>
            </div>
            <br/>

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible" //when div is shown on screen, run animation
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}    
                >
                    {/* ROW 1 */}

                    <Project 
                        title="Quiz-It" 
                        description="AI Quiz Application created using NextJS, OpenAI, Prisma, TailwindCSS, shadcn and NextAuth." 
                        image="project-4"
                        demo="https://quiz-it-delta.vercel.app/" 
                        repo="https://github.com/carlsondultra/openai-quiz"
                    /> 

                    <Project 
                        title="Carlson's Convenience" 
                        description="An e-commerce application created using NextJS, TailwindCSS, Zustand, and Stripe!" 
                        image="project-2"
                        demo="https://carlsonsconvenience.vercel.app/" 
                        repo="https://github.com/carlsondultra/nextjs-store"
                    />
                    <Project 
                        title="Game Review" 
                        description="A Game Review application created using PostgreSQL, Express.js, React.js, and Node.js." 
                        image="project-5"
                        // demo="https://www.w3schools.com/" 
                        repo="https://github.com/carlsondultra/review"
                    /> 

                    {/* ROW 2 */}

                    <Project 
                        title="Portfolio Website" 
                        description="Portfolio website to showcase my skills and projects, created using React and TailwindCSS." 
                        image="project-1" 
                        demo="https://carlsondultra.vercel.app/" 
                        repo="https://github.com/carlsondultra/react-portfolio"
                    />

                    <Project 
                        title="Previous Portfolio Website" 
                        description="Previous portfolio website, created using React and Styled-Components." 
                        image="project-3"
                        demo="https://carlsondultra.github.io/" 
                        repo="https://github.com/carlsondultra/carlsondultra.github.io"
                    /> 
                    

                    {/* <Project 
                        title="Title Project 3" 
                        description="Description Project 3" 
                        image="project-3"
                        demo="https://www.w3schools.com/" 
                        repo="https://www.w3schools.com/"
                    />  */}
                
                    {/* ROW 3 */}

                </motion.div>
            </div>

        </section>
    )
}

export default Projects;