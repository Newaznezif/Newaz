import { Hero } from "@/components/Hero";
import { InteractivePortfolio } from "@/components/InteractivePortfolio";
import { PERSONAL_INFO } from "@/constants";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { EducationAndAwards } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Hero />
      <InteractivePortfolio />

      <Section
        id="about"
        title="About"
        subtitle="A practical approach to cybersecurity, software, and applied AI."
      >
        <div className="max-w-4xl border-l-2 border-primary/50 pl-6 py-2">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
          <div className="glass-panel p-5">
            <p className="font-mono text-primary text-sm mb-2">01 / DEFEND</p>
            <p className="text-white font-semibold">Cybersecurity operations</p>
            <p className="text-text-secondary text-sm mt-2">Monitoring, investigation, and risk reduction.</p>
          </div>
          <div className="glass-panel p-5">
            <p className="font-mono text-primary text-sm mb-2">02 / BUILD</p>
            <p className="text-white font-semibold">Software engineering</p>
            <p className="text-text-secondary text-sm mt-2">Practical applications and secure systems.</p>
          </div>
          <div className="glass-panel p-5">
            <p className="font-mono text-primary text-sm mb-2">03 / EXPLORE</p>
            <p className="text-white font-semibold">Applied AI & data</p>
            <p className="text-text-secondary text-sm mt-2">Turning data into useful decision support.</p>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Technical Expertise" subtitle="Tools and disciplines I use across security, engineering, and data-driven projects.">
        <Skills />
      </Section>
      <Section id="experience" title="Experience" subtitle="Professional roles and ongoing contributions.">
        <Experience />
      </Section>
      <Section id="projects" title="Selected Projects" subtitle="Technology projects focused on practical problems and measurable utility.">
        <Projects />
      </Section>
      <Section id="certifications" title="Certifications & Training" subtitle="Selected credentials and technical learning.">
        <Certifications />
      </Section>
      <Section id="education" title="Education & Recognition">
        <EducationAndAwards />
      </Section>
      <Section id="contact" title="Contact" subtitle="For professional opportunities, technical collaboration, or project discussions.">
        <Contact />
      </Section>
      <Footer />
    </main>
  );
}
