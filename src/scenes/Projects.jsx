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
                    <a href={demo} target="_blank" rel="noreferrer">DEMO</a> <br></br>
                    <a href={repo} target="_blank" rel="noreferrer">REPO</a>
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
                        title="Portfolio Website" 
                        description="Website created to showcase my skills and projects, done using React" 
                        image="project-1" 
                        demo="https://carlsondultra.vercel.app/" 
                        repo="https://github.com/carlsondultra/react-portfolio"
                    />
                    <Project 
                        title="Carlson's Convenience" 
                        description="An e-commerce application created using NextJS, TailwindCSS, Zustand, and Stripe!" 
                        image="project-2"
                        demo="https://carlsonsconvenience.vercel.app/" 
                        repo="https://github.com/carlsondultra/nextjs-store"
                    />
                    {/* <Project 
                        title="Title Project 3" 
                        description="Description Project 3" 
                        image="project-3"
                        demo="https://www.w3schools.com/" 
                        repo="https://www.w3schools.com/"
                    />  */}

                    {/* ROW 2 */}

                    {/* ROW 3 */}

                </motion.div>
            </div>

        </section>
    )
}

export default Projects;