import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

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
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> collabd </p>
                    <br />
                    <p class="text-stone-400">React.js, Next.js, TailwindCSS, Convex</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Collabd is a virtual workspace application that allows for real-time collaboration between users.
                                By utilizing Clerk, Convex and Liveblocks.io, users can invite others to their virtual whiteboard
                                and design their next big idea.  
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" rel="noreferrer" href="https://collabd.vercel.app/">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l rounded-r">
                                Visit Demo
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <img class="object-scale-down" src="../assets/collabd.png" alt="Collabd Screenshot"/>                
                </div>
            </div>
            <br/>

            {/* Line Divider */}
            <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/2"/>
            </div>
            <br />

            {/* Second Project */}
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div>
                    <img class="object-scale-down" src="../assets/productivityplus.png" alt="Productivity Screenshot"/>                
                </div>
                <div class="px-7">
                    <p className="font-playfair font-semibold text-4xl"> <span className="text-red">Productivity</span> Plus </p>
                    <br />
                    <p class="text-stone-400">TypeScript, Next.js, Prisma, Stripe, Tailwind, Zustand, and MySQL</p>
                    <br />
                    <div class="container mx-auto">
                        <p 
                            class="text-stone-200">
                                Productivity Plus is a full-stack project management application that allows for increased productivity.
                                Boards are created to get a clear view of who's doing what and what needs to get done. 
                            </p>
                        <br />
                    </div>
                    <div class="inline-flex">
                        <a target="_blank" rel="noreferrer" href="https://github.com/carlsondultra/productivityplus">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://productivityplus.vercel.app/">
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

            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                        <a target="_blank" rel="noreferrer" href="https://github.com/carlsondultra/nextjs-store">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://carlsonsconvenience.vercel.app/">
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

            
            {/* Fourth Project */}

            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                        <a target="_blank" rel="noreferrer" href="https://github.com/carlsondultra/openai-quiz">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                View Repository
                            </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://quiz-it-delta.vercel.app/">
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
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
                        <a target="_blank" rel="noreferrer" href="https://github.com/carlsondultra/review">
                            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l rounded-r">
                                View Repository
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <img class="object-scale-down" src="../assets/reviewproject.jpeg" alt="Review Project Screenshot"/>                
                </div>
            </div>
            <br/>

        </section>
    )
}

export default Projects;