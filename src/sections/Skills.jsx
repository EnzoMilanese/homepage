import Tag from "../components/Tag"

const Skills = ({ skills }) => {
    return (
        <section className="bg-white text-center md:text-left rounded-xl p-2 md:p-5 shadow-md mt-6">
            <h2 className="text-lg md:text-2xl mb-3 font-semibold">Habilidades</h2>
            <ul className="flex flex-wrap leading-11">
                {skills.map((skill, index) => (
                    <li className="mr-2" key={index}>
                        <Tag name = {skill}/>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;