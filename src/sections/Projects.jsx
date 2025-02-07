import ProjectCard from "../components/ProjectCard";

const Projects = ({projects}) => {
    return  <>
    <h1 className="text-4xl text-center md:text-left font-bold mb-2">Projetos</h1>
    <ul className="bg-white text-left rounded-xl p-4">
        {projects.map((project, i) => (
            <li key={i}>
                <ProjectCard project={project}/>
            </li>
        ))}
    </ul>
    </>
}

export default Projects;