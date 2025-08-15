import Link from "next/link";
import MainComponent from "../components/MainComponent";
import Section from "../components/Section";
import ButtonLink from "../components/ButtonLink";




const skills = [
  { title: "Frontend Development", desc: "React, Next.js, Tailwind CSS" },
  { title: "Data Visualization", desc: "Charts, Dashboards, D3.js" },
  { title: "Statistical Analysis", desc: "R, Python, Data Modeling" },
  { title: "UI/UX Design", desc: "User flows, Prototyping, Accessibility" },
  { title: "Communication", desc: "Teaching, Technical Training, Cross-functional Collaboration" }
];

const projects = [
  { title: "Project Title 1", desc: "Brief description of what the project does and the technologies used." },
  { title: "Project Title 2", desc: "Brief description of what the project does and the technologies used." }
];

export default function Home() {
  return (
    <MainComponent mainClassName="gap-3 md:gap-8 lg:gap-16">

      {/* Hero */}
      <Section bgColor="bg-neutral-100">
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome to DAS Consultancy, Bridging Data & Design
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Turning complex insights into intuitive, user-friendly web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <ButtonLink href="/about" bg="blue-600" text="white" hoverBg="blue-700">
            Learn More
          </ButtonLink>
          <ButtonLink href="/contact" bg="gray-200" text="gray-800" hoverBg="gray-300">
            Contact Me
          </ButtonLink>
        </div>
      </Section>

      {/* Skills */}
      <Section className="max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-3 md:mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-600 mb-4">{proj.desc}</p>
                <Link href="#" className="text-blue-600 hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section bgColor="bg-neutral-50">
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          With over 7 years building modern web apps and 10+ years in statistics, I create interfaces
          that make data meaningful.
        </p>
        <ButtonLink href="/about" bg="blue-600" text="white" hoverBg="blue-700" fullWidthOnMobile>
          Read More
        </ButtonLink>
      </Section>

      {/* Contact */}
      <Section bgColor="bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="max-w-xl mx-auto mb-6">
          Got a project in mind? I’d love to hear about it and see how we can bring it to life.
        </p>
        <ButtonLink href="/contact" bg="white" text="blue-600" hoverBg="gray-100" fullWidthOnMobile>
          Get in Touch
        </ButtonLink>
      </Section>

    </MainComponent>
  );
}
