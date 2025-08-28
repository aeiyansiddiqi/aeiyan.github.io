import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold text-blue-600">Aeiyan Siddiqi</h1>
          <div className="space-x-4">
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold">Hi, I’m Aeiyan 👋</h2>
        <p className="mt-4 text-lg">Computer Science Co-op Student @ University of Guelph</p>
        <p className="mt-2 text-lg">Interested in AI, Cybersecurity, and Software Engineering</p>
        <div className="mt-6 space-x-4">
          <a href="mailto:aeiyan@uoguelph.ca" className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">Email</a>
          <a href="https://linkedin.com/in/aeiyan" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">LinkedIn</a>
          <a href="https://github.com/aeiyansiddiqi" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200">GitHub</a>
          <a
  href="https://drive.google.com/file/d/1QNotbrikGwPgRx0w-LDmw3UXkw8b5ZKq/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
  className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-200"
>
  Download Resume
</a>
        </div>
      </header>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto p-8">
  <h2 className="text-2xl font-heading font-bold border-b-2 border-blue-500 pb-2 mb-6">Experience</h2>
  <div className="space-y-6">
    {/* Software Engineer & AI Research Assistant */}
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">Software Engineer & AI Research Assistant | Intern</h3>
      <p className="text-sm text-gray-600">Cyber Science Lab, University of Guelph | May 2025 – Aug 2025</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Built Knowledge Graphs and AI agents with local LLMs, relationship linking, and document parsing to analyze 1,000+ texts</li>
        <li>Developed an LLM protection system, training CNNs and applying NLP to boost effectiveness by 20%</li>
        <li>Built a full-stack LLM security project with TypeScript, React, FastAPI, and Python, integrating frontend and backend</li>
      </ul>
    </div>

    {/* IT Technician */}
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">IT Technician | Intern & Part-Time</h3>
      <p className="text-sm text-gray-600">Managed Desktops, University of Guelph | Sep 2024 – May 2025</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Created technical documentation and delivered solutions to support 50+ clients weekly using FootPrints</li>
        <li>Reduced ticket resolution time and improved client satisfaction</li>
        <li>Trained and onboarded 3+ co-op students in troubleshooting hardware/software issues with Azure</li>
      </ul>
    </div>

    {/* AI Data Engineer & Software Developer */}
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">AI Data Engineer & Software Developer | Intern</h3>
      <p className="text-sm text-gray-600">Cyber Science Lab, University of Guelph | Jun 2024 – Sep 2024</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Built AI systems through data engineering to improve LLM accuracy (LLaMA 3) in cybersecurity by 80%</li>
        <li>Delivered 5+ technical presentations and live code demos to researchers</li>
      </ul>
    </div>
  </div>
</section>


      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold border-b-2 border-blue-500 pb-2 mb-6">Technical Skills</h2>
        <ul className="list-disc ml-6">
          <li>Languages:  Java, Go, Python, C/C++, JavaScript, TypeScript, SQL, HTML, Assembly, MATLAB, PostgreSQL</li>
          <li>Frameworks: React, Vite, Tailwind CSS, Flask, JUnit, Flutter, OpenCV, PyTorch, HuggingFace, Pandas,
CUDA, FastAPI, Spring Boot</li>
          <li>Tools: Git, Linux - Ubuntu, Visual Studio Code, Docker, Postman, PowerShell, Android Studio, Figma</li>
        </ul>
      </section>


      {/* Contact */}
<section id="contact" className="text-center py-16 bg-gray-200">
  <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>

  {/* Email */}
  <p className="flex justify-center items-center gap-2 mb-4">
    <FaEnvelope className="text-blue-600" />
    <a
      href="mailto:aeiyan@uoguelph.ca"
      className="text-blue-600 underline"
    >
      aeiyan@uoguelph.ca
    </a>
  </p>

  {/* Phone */}
  <p className="flex justify-center items-center gap-2 mb-4">
    <FaPhone className="text-blue-600" />
    <a
      href="tel:+19058676575"
      className="text-blue-600 underline"
    >
      (905) 867-6575
    </a>
  </p>

  {/* LinkedIn */}
  <p className="flex justify-center items-center gap-2">
    <FaLinkedin className="text-blue-600" />
    <a
      href="https://linkedin.com/in/aeiyan"
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 underline"
    >
      linkedin.com/in/aeiyan
    </a>
  </p>
</section>


    </div>
  )
}
