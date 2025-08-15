import Link from "next/link";
import MainComponent from "../components/MainComponent";
import classNames from "classnames";


export default function Home() {
  const sectionClass = (isBackgroundColor) => classNames("w-full text-center gap-3 md:gap-8 flex flex-col", {
    "bg-neutral-100": isBackgroundColor,
  });
  return (
    <MainComponent mainClassName="gap-3 md:gap-8 lg:gap-16">
      <section className={sectionClass(true)}>
        <h1 className="text-2xl md:text-4xl font-bold">
          Welcome to DAS Consultancy, Bridging Data & Design
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Turning complex insights into intuitive, user-friendly web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Learn More
          </Link>
          <Link href="/contact" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">
            Contact Me
          </Link>
        </div>
      </section>
      {/* Skills Section */}
      <section className={`${sectionClass(false)} max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4`}>
        {[
          { title: "Frontend Development", desc: "React, Next.js, Tailwind CSS" },
          { title: "Data Visualization", desc: "Charts, Dashboards, D3.js" },
          { title: "Statistical Analysis", desc: "R, Python, Data Modeling" },
          { title: "UI/UX Design", desc: "User flows, Prototyping, Accessibility" },
          { title: "Communication", desc: "Teaching, Technical Training, Cross-functional Collaboration" }
        ].map((skill, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600">{skill.desc}</p>
          </div>
        ))}
      </section>
      <section className={sectionClass(false)}>
        <h2 className="text-3xl font-bold text-center mb-3 md:mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((proj) => (
            <div key={proj} className="bg-white shadow rounded-xl overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Title {proj}</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of what the project does and the technologies used.
                </p>
                <Link href="#" className="text-blue-600 hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* About Preview */}
      <section className={`${sectionClass(false)} bg-neutral-50`}>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-6">
          With over 7 years building modern web apps and 10+ years in statistics, I create interfaces
          that make data meaningful.
        </p>
        <Link href="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Read More
        </Link>
      </section>

      {/* Contact CTA */}
      <section className={`${sectionClass(false)} bg-blue-600 text-white`}>
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="max-w-xl mx-auto mb-6">
          Got a project in mind? I’d love to hear about it and see how we can bring it to life.
        </p>
        <Link href="/contact" className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
          Get in Touch
        </Link>
      </section>
    </MainComponent>

  );
}
