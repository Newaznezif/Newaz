import { Hero } from "@/components/Hero";
import { PERSONAL_INFO } from "@/data/personal";
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
    <main className="min-h-screen">
      <Hero />

      <Section
        id="about"
        title="Professional Summary"
      >
        <div className="max-w-4xl border-l-[3px] border-primary/30 pl-8 py-2">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </Section>

      <Section
        id="skills"
        title="Core Technical Expertise"
      >
        <Skills />
      </Section>

      <Section
        id="experience"
        title="Work Experience"
      >
        <Experience />
      </Section>

      <Section
        id="projects"
        title="Technical Projects"
      >
        <Projects />
      </Section>

      <Section
        id="certifications"
        title="Professional Certifications"
      >
        <Certifications />
      </Section>

      <Section
        id="education"
        title="Education"
      >
        <EducationAndAwards />
      </Section>

      <Section
        id="contact"
        title="Contact"
      >
        <Contact />
      </Section>

      <Footer />
    </main>
  );
}
