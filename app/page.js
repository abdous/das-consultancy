import Link from "next/link";
import MainComponent from "../components/MainComponent";
import Section from "../components/Section";
import ButtonLink from "../components/ButtonLink";
import { skills, projects } from "../utils/mockData";



// app/page.js
export const metadata = {
  title: "DAS Consultancy - Bridging Data & Design",
  description:
    "DAS Consultancy bridges data and design, creating intuitive web experiences with React, Next.js, and expert data visualization.",
};



export default function Home() {

  return (
    <MainComponent mainClassName="gap-3 md:gap-8 lg:gap-16">

      {/* Hero */}
      <Section bgColor="bg-white shadow rounded-xl p-3 md:p-0">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
          Welcome to DAS Consultancy, Bridging Data & Design
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Turning complex insights into intuitive, user-friendly web experiences.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <ButtonLink href="/about" bg="blue-600" text="white" hoverBg="blue-700" ariaLabel="Learn more about DAS Consultancy" extraClasses="md:max-w-[133px] md:truncate">
            Learn more about DAS Consultancy
          </ButtonLink>
          <ButtonLink href="/about" bg="blue-600" text="white" hoverBg="blue-700" ariaLabel="Contact DAS Consultancy">
            Contact Me
          </ButtonLink>
        </div>
      </Section>

      {/* Skills */}
      <Section className="max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
            <p className="text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-3 md:mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => {
            const Icon = proj.icon;
            return (
              <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
                <div className={`h-48 flex items-center justify-center ${proj.bgColor}`}>
                  <Icon className={`w-16 h-16 ${proj.iconColor}`} />
                </div>
                <div className="p-6 ">
                  <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <Link href={proj.href} className="text-blue-600 hover:underline">
                    View Project →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* About */}
      <Section bgColor="bg-white shadow rounded-xl">
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          With over 7 years building modern web apps and 10+ years in statistics, I create interfaces
          that make data meaningful.
        </p>
        <ButtonLink
          href="/about"
          bg="blue-600"
          text="white"
          hoverBg="blue-700"
          fullWidthOnMobile
          ariaLabel={"Learn more about my background and work"}
          extraClasses="md:max-w-[133px] md:truncate"
        >
          Learn more about my background and work
        </ButtonLink>
      </Section>

      {/* Contact */}
      <Section bgColor="bg-blue-600 shadow text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="max-w-xl mx-auto mb-6">
          Got a project in mind? I’d love to hear about it and see how we can bring it to life.
        </p>
        <ButtonLink href="/contact" bg="white" text="blue-600" hoverBg="gray-100" fullWidthOnMobile ariaLabel={"Get in touch with DAS Consultancy"}>
          Get in Touch
        </ButtonLink>
      </Section>

    </MainComponent>
  );
}
