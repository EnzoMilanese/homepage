import './App.css'
import Bio from './sections/Bio'
import Skills from './sections/Skills'

const user = {
  name : "Enzo Milanese",
  email : "enzo12ms@gmail.com",
  description : ".NET Software Developer",
  linkedInUrl : "https://www.linkedin.com/in/enzomilanese/",
  githubUrl : "https://github.com/EnzoMilanese"
};

const skills = [
  ".NET", ".NET Core", "Azure", "AWS", "React.js", "Entity Framework", "ASP.NET MVC 5", "SQL Server", "PostgreSQL", "Oracle SQL", "Web APIs", "Testes", "Agilidade", "Scrum", "Git", "Subversion", "GitHub Actions"
];

function App() {
  return (
    <>
      <div className='container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7'> 
        <div className=''>
          <Bio user={ user }/>
          <Skills skills={ skills }/>
        </div>
        <div className='col-span-2'>
          
        </div>
      </div>
    </>
  )
}

export default App
