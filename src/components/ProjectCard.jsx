import SourceCodeIcon from "./SourceCodeIcon";

const ProjectCard = ({project}) => {
    return <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-10 py-8 px-2 rounded-md gap-4 group/item hover:bg-slate-200 mt-2 shadow-md">
        <div className="m-1 justify-items-center">
            <img 
                src={project.imgUrl} 
                alt={project.name} 
                height="50"
                width="50"
                className="mb-2"
            />
            <div className="hidden md:block">
                <SourceCodeIcon url={project.repoUrl}/>
            </div>
        </div>
        <div className="md:col-span-9">
            <a href={project.url} className="text-blue-600 hover:text-blue-800 text-xl font-semibold">
                <p>{project.name}</p>
            </a>
            <p>{project.description}</p>
        </div>
        <div className="place-self-center md:hidden">
            <SourceCodeIcon url={project.repoUrl}/>
        </div>
    </div>
}

export default ProjectCard;