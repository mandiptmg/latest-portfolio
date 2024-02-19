import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'
import Project from '@/components/project/Project'
import Service from '@/components/service/Service'


export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Service/>
      <Project/>
    </main>
  )
}
