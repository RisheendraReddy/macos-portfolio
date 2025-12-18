import { Download } from 'lucide-react'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Risheendra_Reddy_Boddu_Resume.pdf'
    link.click()
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>
      
      <div className="flex-1 bg-gray-900/50 rounded-lg border border-white/10 p-8 overflow-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center border-b border-white/10 pb-6">
            <h1 className="text-3xl font-bold mb-3">RISHEENDRA REDDY BODDU</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <a 
                href="https://www.linkedin.com/in/risheendra-reddy-boddu-0a7b3a204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a 
                href="https://github.com/RisheendraReddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="mailto:risheendrareddy.boddu@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                risheendrareddy.boddu@gmail.com
              </a>
              <span>•</span>
              <a 
                href="tel:+16026251330"
                className="hover:text-blue-400 transition-colors"
              >
                (602) 625-1330
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">Education</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Bachelor of Computer Science (GPA: 3.76)</h3>
                  <p className="text-white/70">Arizona State University</p>
                  <p className="text-sm text-white/60">Tempe, AZ</p>
                </div>
                <span className="text-white/60 text-sm whitespace-nowrap">May 2025</span>
              </div>
              <div className="mt-2">
                <p className="text-sm text-white/70 mb-1">Relevant Coursework:</p>
                <p className="text-sm text-white/60">
                  Object-Oriented Programming, Algorithms, Data Structures, Assembly Language, Information Assurance, 
                  Software Engineering, Machine Learning, Databases, Mobile App Development, Cloud Computing, 
                  Human-Computer Interaction
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">Technical Skills</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-white/90">• Languages: </span>
                <span className="text-white/70">Java, C++, Python, JavaScript, SQL, C, Go, C#, XML, TypeScript, Swift</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Front-End: </span>
                <span className="text-white/70">React, HTML, CSS, JavaFX, Tailwind, Next.js, FXML</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Backend & APIs: </span>
                <span className="text-white/70">REST APIs, JSON, Node.js, Flask, Django, Spring Boot</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Testing: </span>
                <span className="text-white/70">Jest, JUnit, Playwright, Manual Test Plans, Validation Reports</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Cloud & Monitoring: </span>
                <span className="text-white/70">AWS (CDK, Lambda, S3, DynamoDB, API Gateway), Google Cloud Platform (GCP), CI/CD</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Databases: </span>
                <span className="text-white/70">PostgreSQL, NoSQL, MySQL, DynamoDB</span>
              </div>
              <div>
                <span className="font-semibold text-white/90">• Tools & Processes: </span>
                <span className="text-white/70">Git, GitHub, GitLab, Linux, Xcode, Figma, Docker, Agile/Scrum, SDLC, Object-Oriented Programming (OOP), UX Testing</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">Experience</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Full Stack Software Engineer Intern</h3>
                    <p className="text-white/70">ASU Center for Entrepreneurship & New Business Design</p>
                    <p className="text-sm text-white/60">Tempe, AZ</p>
                  </div>
                  <span className="text-white/60 text-sm whitespace-nowrap">September 2024 - April 2025</span>
                </div>
                <ul className="mt-3 space-y-1 text-white/80 text-sm ml-4">
                  <li>• Developed a full-stack application using React and Flask, integrating SDK-style REST APIs and modular, testable UI components.</li>
                  <li>• Optimized backend workflows and PostgreSQL queries, reducing latency by 25% and improving system reliability.</li>
                  <li>• Implemented CI/CD pipelines with GitHub Actions and automated testing using Jest, enabling faster A/B test releases and cutting manual QA by 40%.</li>
                  <li>• Collaborated with designers and researchers to deliver personalized onboarding experiences informed by real-time feedback loops.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Software Engineer Intern</h3>
                    <p className="text-white/70">Veterinary Biological Research Institute</p>
                    <p className="text-sm text-white/60">Remote</p>
                  </div>
                  <span className="text-white/60 text-sm whitespace-nowrap">May 2024 - August 2024</span>
                </div>
                <ul className="mt-3 space-y-1 text-white/80 text-sm ml-4">
                  <li>• Built scalable backend processing tools and APIs in Java to validate structured data and streamline research workflows, processing 10,000+ records daily in Linux-based environments.</li>
                  <li>• Designed and implemented distributed SQL-based data pipelines with RESTful API endpoints for automated ingestion and real-time processing of experimental data.</li>
                  <li>• Increased processing efficiency by 35% using memory-optimized data structures and batch processing techniques.</li>
                  <li>• Documented internal architecture and contributed to sprint planning in an Agile research-engineering environment.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Residential Assistant</h3>
                    <p className="text-white/70">Arizona State University</p>
                    <p className="text-sm text-white/60">Tempe, AZ</p>
                  </div>
                  <span className="text-white/60 text-sm whitespace-nowrap">January 2023 - May 2025</span>
                </div>
                <ul className="mt-3 space-y-1 text-white/80 text-sm ml-4">
                  <li>• Built community initiatives supporting 2,300+ students, focusing on usability, empathy, and feedback loops.</li>
                  <li>• Organized 5+ collaborative events per semester, improving campus engagement by 30%.</li>
                  <li>• Designed a student-facing portal using HTML and Google Sites, improving access to wellness/academic tools by 20%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xl font-semibold mb-4 uppercase tracking-wide">Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">AI Chat History Manager</h3>
                <ul className="space-y-1 text-white/80 text-sm ml-4">
                  <li>• Built a platform that centralizes AI conversations, featuring REST APIs, JWT auth, and SQLAlchemy-based data management.</li>
                  <li>• Integrated multi-model AI (OpenAI, Anthropic, Gemini) with context-aware chat, fallback logic, and semantic search.</li>
                  <li>• Designed a modern, responsive UI with glassmorphism, theming, animations, and advanced conversation organization.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">S&P 500 Prediction Application</h3>
                <ul className="space-y-1 text-white/80 text-sm ml-4">
                  <li>• Created a production-ready financial prediction system using machine learning (LightGBM, XGBoost) with FastAPI backend and React frontend.</li>
                  <li>• Designed RESTful APIs with automated model training, batch prediction endpoints, and Docker containerization for scalable deployment.</li>
                  <li>• Implemented end-to-end CI/CD workflows, comprehensive API documentation, and interactive UI for real-time model monitoring and predictions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Automated File Processing and Data Management System</h3>
                <ul className="space-y-1 text-white/80 text-sm ml-4">
                  <li>• Built a React + TypeScript web app simulating low-code UI authoring for uploading and managing JSON data.</li>
                  <li>• Deployed serverless backend using AWS CDK, Lambda, S3, and DynamoDB for scalable cloud integration.</li>
                  <li>• Applied best practices in component design and tested UI components using Jest to ensure maintainable and reliable code.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume





