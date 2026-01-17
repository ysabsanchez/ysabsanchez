import React, { useState } from 'react';
import { Mail, Phone, Github, GraduationCap, Briefcase, Code, Award, ExternalLink, Download} from 'lucide-react';
import profileImg from './assets/profile.png';
import resumePdf from './assets/Alyssa_Sanchez_Resume.pdf';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-purple-950 via-gray-900 to-black text-gray-100">
      {/* Header */}
      <header className="w-full border-b border-purple-800/30 bg-black/40 backdrop-blur-sm">
        <div className="w-full px-6 py-2 flex justify-center">
          <div className="max-w-4xl mx-auto px-6 py-8 flex items-center gap-8">
            <img 
              src={profileImg}
              alt="Alyssa B. Sanchez" 
              className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/50 object-cover"
            />
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-1.5 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ALYSSA B. SANCHEZ
              </h1>
              <p className="text-xl text-purple-300 mb-4">Software Engineer & Tech Enthusiast</p>
              
              <div className="flex flex-wrap gap-6 text-m">
                <a href="mailto:ysabsanchez@gmail.com" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition">
                  <Mail size={18} />
                  <span>ysabsanchez@gmail.com</span>
                </a>
                <a href="tel:+639692595885" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition">
                  <Phone size={18} />
                  <span>+63 969 259 5885</span>
                </a>
                <a href="https://github.com/ysawwwww" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition">
                  <Github size={18} />
                  <span>ysawwwww</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-6 py-8 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-purple-800/30 rounded-lg p-8 pt-6 pb-6">
          <nav className="flex flex-wrap justify-center gap-2 mb-4 border-purple-800/30 pb-2">
            <TabButton active={activeTab === 'about'} onClick={() => setActiveTab('about')}>
              <Code size={16} />
              About
            </TabButton>
            <TabButton active={activeTab === 'education'} onClick={() => setActiveTab('education')}>
              <GraduationCap size={16} />
              Education
            </TabButton>
            <TabButton active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
              <Briefcase size={16} />
              Experience
            </TabButton>
            <TabButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
              <Code size={16} />
              Projects
            </TabButton>
            <TabButton active={activeTab === 'skills'} onClick={() => setActiveTab('skills')}>
              <Code size={16} />
              Skills
            </TabButton>
            <TabButton active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')}>
              <Award size={16} />
              Achievements
            </TabButton>
          </nav>
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'education' && <EducationSection />}
          {activeTab === 'experience' && <ExperienceSection />}
          {activeTab === 'projects' && <ProjectsSection />}
          {activeTab === 'skills' && <SkillsSection />}
          {activeTab === 'achievements' && <AchievementsSection />}
          
          {/* Footer */}
          <hr className="mt-8 border-purple-800/50 mb-5" />
          <footer className="text-center text-sm text-purple-400/80">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <span className="hidden md:inline text-purple-900/50">|</span>
            
              <a 
                href={resumePdf}
                download="Alyssa_Sanchez_Resume.pdf"
                className="flex items-center gap-1.5 hover:text-purple-200 transition-colors font-medium underline underline-offset-4 decoration-purple-800/60 hover:decoration-purple-400"
              >
                <Download size={14} />
                Download Resume (PDF)
              </a>

              <span className="hidden md:inline text-purple-900/50">|</span>

              <p>© {new Date().getFullYear()} YSA • Made with React</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

// Tab Button Component
function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 font-medium
        transition-colors
        ${
          active
            ? 'text-purple-500'
            : 'text-purple-300 hover:text-purple-200'
        }
      `}
      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
    >
      {children}
    </button>
  );
}

// About Section
function AboutSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">About</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-4 text-gray-300">
        <p className="text-lg">
          Hello! I'm <span className="text-purple-400 font-semibold">Alyssa B. Sanchez</span> 👋
        </p>
        <p>
          A passionate <span className="text-purple-300">Computer Engineering Graduate</span> and
          <span className="text-pink-300"> aspiring software engineer</span> with hands-on experience in
          <span className="text-purple-400 font-semibold"> full-stack development, mobile apps, AI </span> and <span className="text-purple-400 font-semibold">IoT</span>.
        </p>
        <p>I'm naturally <span className="text-yellow-400 font-semibold">creative</span> and I love <span className="text-green-400 font-semibold">solving</span> problems.</p>
      </div>
    </div>
  );
}

// Education Section
function EducationSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">Education</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-8">
        <EducationCard
          degree={<>Bachelor of Science in Computer Engineering, <i className="italic">cum laude</i></>}
          school="Colegio de Muntinlupa"
          period="2021 - 2025 • GWA: 1.69"
          coursework="Object-Oriented Programming • Data Structures and Algorithm • Database Management Systems • Artificial Intelligence with Data Analytics • Operating Systems"
        />
      </div>
    </div>
  );
}

function EducationCard({ degree, school, period, coursework }) {
  return (
    <div className="transition-all duration-300">
      <h3 className="text-xl font-semibold text-purple-300">{degree}</h3>
      <p className="text-purple-400 font-medium">{school}</p>
      <p className="text-sm text-gray-400 mb-3">{period}</p>
      
      {coursework && (
        <div className="mt-2">
          <span className="text-yellow-400 font-semibold block mb-1">
            Relevant Coursework:
          </span>
          <p className="text-sm text-gray-400 leading-relaxed">
            {coursework}
          </p>
        </div>
      )}
    </div>
  );
}

// Experience Section
function ExperienceSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">Experience</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-6">
        <ExperienceCard
          title="Mobile App Developer"
          company="Capstone • Colegio de Muntinlupa"
          period="2025"
          description={[
            "Built a native Android app (Kotlin/ XML) serving as the central hub for system automation, real-time monitoring, and manual hardware control.",
            "Integrated YOLOv8 AI model for camera-based flower classification and connected the app to an ESP32 microcontroller via Bluetooth SPP, enabling automated environmental adjustments to extend flower vase life.",
            "Designed an intuitive UI/UX for real-time sensor data monitoring, hardware control, and notification alerts."
          ]}
        />
        <ExperienceCard
          title="IT Intern"
          company="SBT Holdings Inc. • Alabang, Muntinlupa City"
          period="June – August 2024"
          description={[
            "Worked in a professional IT environment developing web applications using Laravel (PHP), MySQL, HTML, Tailwind CSS, and JavaScript. ",
            "Assisted IT operations including network setup, hardware maintenance, and troubleshooting, broadening technical exposure beyond software development. ",
          ]}
        />
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, period, description }) {
return (
    <div className="relative pl-8 pb-4">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-purple-800/50"></div>
      
      <div>
        <h3 className="text-xl font-semibold text-purple-300 mb-1">{title}</h3>
        <p className="text-purple-400 font-medium">{company}</p>
        <p className="text-sm text-gray-400 mb-4">{period}</p>
        
        <ul className="space-y-3">
          {description.map((point, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300 leading-relaxed">
              <span className="text-purple-500 mt-1.5 text-[10px]">▶</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">Projects</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-6">
        <ProjectCard
          title="AsteraCare: AI-Based Smart Flower Preservation System "
          tech="Kotlin, XML, YOLOv8, ESP32"
          period="2025"
          description="AI-powered Android app that classifies flowers using YOLOv8 and communicates with an ESP32 to automatically adjust environmental conditions, extending flower vase life."
          link="https://github.com/ysawwwww/AsteraCareApp"
        />
        <ProjectCard
          title="Obelisk Order Inventory System "
          tech="PHP Laravel, MySQL, HTML/CSS, JavaScript, Bootstrap"
          period="2024"
          description="Warehouse inventory management system with role-based access control to streamline inventory tracking."
          link="https://github.com/ysawwwww"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, tech, period, description, link }) {
  return (
    <div className="relative group border border-purple-800/30 rounded-lg p-6 bg-gray-800/30 hover:bg-gray-800/50 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute inset-0 z-10"
          aria-label={`View ${title}`}
        />
      )}

      <div className="flex justify-between items-start relative z-0">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-purple-400 font-medium mt-1">{tech}</p>
        </div>
        
        {link && (
          <div className="text-purple-400 group-hover:text-purple-300 transition-colors ml-4">
            <ExternalLink size={20} />
          </div>
        )}
      </div>

      <p className="text-sm text-gray-400 mt-1 mb-4 relative z-0">{period}</p>
      
      <p className="text-gray-300 leading-relaxed relative z-0">
        {description}
      </p>
    </div>
  );
}

// Skills Section
function SkillsSection() {
  const languages = ['Python', 'HTML/CSS', 'JavaScript', 'SQL (MySQL)', 'Kotlin' , 'PHP', 'C/C++', 'Java'];
  const frameworks = ['Laravel', 'React', 'Tailwind CSS', 'Bootstrap'];
  const tools = ['Git', 'GitHub', 'Figma', 'Canva', 'TinkerCAD', 'Proteus 8', 'MATLAB'];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">Skills</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-6">
        <SkillCategory title="Languages" skills={languages} />
        <SkillCategory title="Frameworks" skills={frameworks} />
        {/* <SkillCategory title="Databases" skills={databases} /> */}
        <SkillCategory title="Tools" skills={tools} />
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-purple-400 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-purple-900/30 border border-purple-700/50 rounded-lg text-purple-200 hover:bg-purple-800/40 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Achievements Section
function AchievementsSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-3 text-purple-300 border-l-4 border-purple-500 pl-4">Achievements</h2>
      <hr className="mt-2 border-purple-800/50 mb-5" />
      <div className="space-y-4">
        <AchievementCard
          title="Civil Service Professional Eligibility"
          description="Honor Graduate Eligibility - P.D. 907"
        />
        <AchievementCard
          title="HCIA-AI V3.5 Course – Huawei"
          description="An entry-level certification (Associate level) that teaches foundational Artificial Intelligence concepts, covering AI history, Huawei's Ascend AI system, machine learning, deep learning, and the MindSpore framework"
        />
        <AchievementCard
          title="ICPEP NCR 2023 and 2024 QuizBowl Champion"
          description=""
        />
      </div>
    </div>
  );
}

function AchievementCard({ title, description }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="mt-1.5 text-purple-500 group-hover:text-yellow-400 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.75l3.09 6.26L22 8.91l-5 4.87 1.18 6.88L12 17.27l-6.18 3.39L7 13.78l-5-4.87 6.91-.9L12 1.75z" />
        </svg>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-400 mt-1 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}