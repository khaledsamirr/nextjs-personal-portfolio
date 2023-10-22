import About from '@/components/About'
import Banner from '@/components/Banner'
import ContactMe from '@/components/ContactMe'
import PersonalExperience from '@/components/PersonalExperience'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'



export default async function Home() {

   const socials = await getSocials();
    const pageInfo: any[]=await getPageInfo();
    const skills: any[]=await getSkills();
    const projects: any[]=await getProjects();
    const experiences:any[]=await getExperiences();
    
    
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

const getPageInfo= async ():Promise<PageInfo[]>=>{
    const data= await fetchPageInfo();
    return data;
}
const getExperiences= async ():Promise<Experience[]>=>{
    const data= await fetchExperiences();
    return data;
}
const getSkills= async ():Promise<Skill[]>=>{
    const data= await fetchSkills();
    return data;
}
const getSocials= async ():Promise<Social[]>=>{
    const data= await fetchSocials();
    return data;
}
const getProjects= async ():Promise<Project[]>=>{
    const data= await fetchProjects();
    return data;
}



