import About from '@/components/About'
import Banner from '@/components/Banner'
import ContactMe from '@/components/ContactMe'
import PersonalExperience from '@/components/PersonalExperience'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import getPageInfo from '@/utils/getPageInfo'
import getSkills from '@/utils/getSkills'
import getProjects from '@/utils/getProjects'
import getExperiences from '@/utils/getExperiences'
import getSocials from '@/utils/getSocials'


  
export default async function Home() {

  
  
    const pageInfo: PageInfo[]=await getPageInfo();
    const skills: Skill[]=await getSkills();
    const projects: Project[]=await getProjects();
    const experiences: Experience[]=await getExperiences();
    const socials: Social[]=await getSocials();
    
  return ( 
      <div className='bg-[rgb(10,10,10)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-600/20 scrollbar-thumb-purple-800/30'>
            <Header socials={socials}/>
          <section id="banner" className='snap-center'>
             <Banner   pageInfo={pageInfo[0]}/>
         </section>
         <section id="about" className='snap-center'>
             <About pageInfo={pageInfo[0]}/>
         </section>
         <section id="experience" className='snap-center'>
             <PersonalExperience experiences={experiences}/>
         </section>
         <section id="skills" className='snap-start'>
             <Skills skills={skills}/>
         </section>
         <section id="projects" className='snap-start'>
             <Projects projects={projects}/>
         </section>
         <section id="contact" className='snap-start'>
             <ContactMe/>
         </section>
         
         
      </div>
  )
}

