import SourceCodeIcon from "./SourceCodeIcon";

const ProjectCard = ({project}) => {
    let repoSection
    debugger
    if(project.repoUrl == undefined){
        repoSection = ""
    } else {        
        repoSection = <SourceCodeIcon url={project.repoUrl}/>                
    }

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
                {repoSection}
            </div>
        </div>
        <div className="md:col-span-9">
            <a href={project.url} className="text-blue-600 hover:text-blue-800 text-xl font-semibold">
                <p>{project.name}</p>
            </a>
            <div dangerouslySetInnerHTML={{__html: project.description}}></div>
        </div>
        <div className="place-self-center md:hidden">
            {repoSection}
        </div>
    </div>
}

export default ProjectCard;