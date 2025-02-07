import './App.css'
import Bio from './sections/Bio'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

import UserData from './data/UserData'
import SkillsData from './data/SkillsData'
import ProjectsData from './data/ProjectsData'

function App() {
  return (
    <>
      <div className='bg-slate-50 rounded-xl container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7'> 
        <div className=''>
          <Bio user={ UserData() }/>
          <Skills skills={ SkillsData() }/>
        </div>
        <div className='col-span-2'>
          <Projects projects={ ProjectsData() }/>
        </div>
      </div>
    </>
  )
}

export default App
