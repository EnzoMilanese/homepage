import { Linkedin, AtSign, Github } from "lucide-react"

const Bio = ({ user }) => {
    const mailToUrl = "mailto:" + user.email;
    return (
        <section className="bg-white justify-items-center md:justify-items-start text-center md:text-left rounded-xl p-2 md:p-5 shadow-md">
            <img 
                src="./profile.jpg" 
                alt="Foto de perfil" 
                className="h-32 w-32 rounded-full"/>
            <h1 className="text-lg md:text-2xl font-bold mt-3">
                {user.name}
            </h1>
            <p className="text-stone-700">
                {user.description}
            </p>
            <div className="flex flex-row gap-2 mt-2">
                <a href={user.linkedInUrl} target="_blank" rel="noopener noreferer">
                    <Linkedin className="text-blue-400 hover:text-blue-600" />
                </a>
                <a href={mailToUrl} target="_blank" rel="noopener noreferer">
                    <AtSign className="text-pink-400 hover:text-pink-600"/>
                </a>
                <a href={user.githubUrl} target="_blank" rel="noopener noreferer">
                    <Github className="text-red-400 hover:text-red-600" />
                </a>
            </div>
        </section>
    );
}

export default Bio;