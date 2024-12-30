import Links from '@/components/links'
import { Button } from "@/components/ui/button";




import About from '@/app/about/page';
import Projet from '@/app/work/page';




export default function Home() {
  return (
    <div className="font-base">
   
       <section id="home " className="section motion-translate-x-in-[-24%] motion-translate-y-in-[0%]">
      <h1 className="text-2xl font-heading sm:text-4xl">Rodriguez Adam</h1>
      <p className="mt-2 text-lg sm:text-xl">Développeur débutant</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Bonjour 😀,<br/> je suis Adam Rodriguez, développeur full-stack.
Originaire des Alpes et aujourd’hui basé à Bordeaux, je suis passionné par la nature et la technologie. Curieux et motivé, je me spécialise dans la création d’applications web performantes et intuitives, avec une préférence pour React en front-end.

J’apprécie particulièrement le travail en équipe, où je peux apprendre, partager mes connaissances et contribuer à des projets innovants dans un esprit collaboratif.</p>

        <br />

        <p>
          Vous retrouverez ici mes projets, mes coordonnées et mon cv
        </p>
        <br />
        <Button asChild>
  <a href="mailto:adamrodrigue2094@gmail.com">Contactez-moi !</a>
</Button>

      </div>
      <br/>
     
  
</section>
<section id="experience" className="section">
  <About />
</section>
<section id="projects" className="section">
  <Projet />
</section>

    
      <Links />
    </div>
  )
}
