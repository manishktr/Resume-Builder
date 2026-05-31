"use client";

import { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";



export default function Home() {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [summary, setSummary] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [skills, setSkills] = useState("");
  const [project, setProject] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [template, setTemplate] = useState("classic");
  const [showProject, setShowProject] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [theme, setTheme] = useState("modern");
  const [darkMode, setDarkMode] = useState(false);
  const [photo, setPhoto] = useState("");
const [showSkills, setShowSkills] = useState(true);
const [showExperience, setShowExperience] = useState(true);

  const atsScore =
  (name ? 15 : 0) +
  (email ? 15 : 0) +
  (phone ? 10 : 0) +
  (linkedin ? 10 : 0) +
  (summary ? 15 : 0) +
  (college ? 10 : 0) +
  (degree ? 10 : 0) +
  (skills ? 10 : 0) +
  (project ? 5 : 0);
  
  const resumeRef = useRef<HTMLDivElement>(null);
  
  
  const downloadPDF = () => {
  const printContent = document.getElementById("resume-preview");

  if (!printContent) return;

  const printWindow = window.open("", "_blank");

  if (!printWindow) return;

  printWindow.document.write(`
<html>
<head>
<title>Resume</title>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.profile-photo {
  width: 80px !important;
  height: 80px !important;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 15px auto;
}
</style>
</head>
<body>
${printContent.innerHTML}
</body>
</html>
`);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

{/*
const calculateATS = () => {
  let score = 0;

  if (name.trim()) score += 15;
  if (email.trim()) score += 15;
  if (phone.trim()) score += 10;
  if (linkedin.trim()) score += 10;
  if (summary.trim()) score += 15;
  if (college.trim()) score += 10;
  if (degree.trim()) score += 10;
  if (skills.trim()) score += 10;
  if (project.trim()) score += 5;

  setAtsScore(score);
}; */}

useEffect(() => {
  const savedData = localStorage.getItem("resumeData");

  if (savedData) {
    const data = JSON.parse(savedData);

    setName(data.name || "");
    setEmail(data.email || "");
    setPhone(data.phone || "");
    setLinkedin(data.linkedin || "");
    setSummary(data.summary || "");
    setCollege(data.college || "");
    setDegree(data.degree || "");
    setSkills(data.skills || "");
    setProject(data.project || "");
    setCompany(data.company || "");
    setRole(data.role || "");
    setDuration(data.duration || "");
  }
}, []);

useEffect(() => {
  const data = {
    name,
    email,
    phone,
    linkedin,
    summary,
    college,
    degree,
    skills,
    project,
    company,
    role,
    duration,
  };

  localStorage.setItem("resumeData", JSON.stringify(data));
}, [
  name,
  email,
  phone,
  linkedin,
  summary,
  college,
  degree,
  skills,
  project,
  company,
  role,
  duration,
]);




  return (
    <main
  className={`min-h-screen p-10 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gradient-to-br from-slate-100 to-blue-100 text-black"
  }`}
>
      <div className="text-center mb-8">
  <h1 className="text-5xl font-bold text-blue-700">
    Resume Builder
  </h1>

  <p className="text-gray-600 mt-2">
    Create Professional ATS-Friendly Resumes
  </p>
</div>   


      <div className="grid md:grid-cols-2 gap-6">

        
        {/* Form */}

       <div
  className={`p-6 rounded-2xl shadow-xl border ${
    darkMode
      ? "bg-gray-800 text-white border-gray-700"
      : "bg-white text-black border-gray-200"
  }`}
>

  
         <h2 className="text-3xl font-bold mb-6 text-black-600">
  Personal Information
</h2>


           <select
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        className="w-48 h-10 border border-gray-400 p-2 rounded mb-3 text-black bg-white"
        >
        <option value="classic">Classic</option>
        <option value="modern">Modern</option>
        <option value="professional">Professional</option>
        <option value="minimal">Minimal</option>
        <option value="executive">Executive</option>
        <option value="creative">Creative</option>
        </select>



          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
          />

          <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
          />

          <input
  type="text"
  placeholder="LinkedIn URL"
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>


<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  }}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>







          <textarea
  placeholder="Professional Summary"
  value={summary}
  onChange={(e) => setSummary(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    darkMode
      ? "bg-gray-700 text-white border-gray-500"
      : "bg-white text-black border-gray-300"
  }`}
/>

          <input
  type="text"
  placeholder="College Name"
  value={college}
  onChange={(e) => setCollege(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Degree"
  value={degree}
  onChange={(e) => setDegree(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Skills (comma separated)"
  value={skills}
  onChange={(e) => setSkills(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Project Title"
  value={project}
  onChange={(e) => setProject(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Company Name"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<input
  type="text"
  placeholder="Duration"
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
  className={`w-full p-3 rounded-xl border mb-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
  darkMode
    ? "bg-gray-700 text-white border-gray-500"
    : "bg-white text-black border-gray-400"
}`}
/>

<label className="flex items-center gap-2 mt-4">
  <input
    type="checkbox"
    checked={showProject}
    onChange={() => setShowProject(!showProject)}
  />
  Show Project Section
</label>

<label className="flex items-center gap-2 mt-2">
  <input
    type="checkbox"
    checked={showEducation}
    onChange={() => setShowEducation(!showEducation)}
  />
  Show Education Section
</label>

<label className="flex items-center gap-2 mt-2">
  <input
    type="checkbox"
    checked={showSkills}
    onChange={() => setShowSkills(!showSkills)}
  />
  Show Skills Section
</label>

<label className="flex items-center gap-2 mt-2">
  <input
    type="checkbox"
    checked={showExperience}
    onChange={() => setShowExperience(!showExperience)}
  />
  Show Experience Section
</label>

<button
  onClick={() => {
    localStorage.removeItem("resumeData");

    setName("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setSummary("");
    setCollege("");
    setDegree("");
    setSkills("");
    setProject("");
    setCompany("");
    setRole("");
    setDuration("");
  }}
  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mt-3 ml-3"
>
  Clear Resume
</button>



        </div>


        {/* Preview */}
<div>

    <div className="bg-white p-3 rounded-lg shadow mb-3 text-center">
  <h3
  className={`font-bold ${
    atsScore >= 80
      ? "text-green-600"
      : atsScore >= 50
      ? "text-yellow-600"
      : "text-red-600"
  }`}
>
    ATS Score: {atsScore}/100
  </h3>
</div>



  <button
    onClick={downloadPDF}
    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg mb-4"
  >
    Download PDF
  </button>

<button
  onClick={() => setTemplate("classic")}
  className="bg-gray-600 text-white px-3 py-2 rounded"
>
  Classic
</button>

<button
  onClick={() => setTemplate("modern")}
  className="bg-blue-500 text-white px-3 py-2 rounded"
>
  Modern
</button>

<button
  onClick={() => setTemplate("corporate")}
  className="bg-green-600 text-white px-3 py-2 rounded"
>
  Corporate
</button>

<button
  onClick={() => setDarkMode(!darkMode)}
  className="bg-black text-white px-3 py-2 rounded"
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>


  <div
  id="resume-preview"
  className={`p-8 rounded-xl shadow-lg border ${
    darkMode
      ? "bg-gray-800 text-white border-gray-600"
      : template === "classic"
      ? "bg-white border-gray-400"
      : template === "modern"
      ? "bg-blue-50 border-blue-500"
      : "bg-green-50 border-green-500"
  }`}
>
    
        

  <div className="text-center border-b pb-4 mb-4">

  {photo && (
  <img
    src={photo}
    alt="Profile"
    width={100}
    height={100}
    className="rounded-full mx-auto mb-3 object-cover border"
    style={{
      width: "100px",
      height: "100px",
      maxWidth: "100px",
      maxHeight: "100px",
    }}
  />
)}

  {/*<h1 className="text-3xl font-bold">
    {name || "Your Name"}
  </h1>*/}
    

    

    <h1
  className={`text-3xl font-bold ${
    template === "classic"
      ? "text-black"
      : template === "modern"
      ? "text-blue-700"
      : "text-green-700"
  }`}
>
      {name || "Your Name"}
    </h1>

    <p className="text-gray-700">
      {email || "your@email.com"}
    </p>

    <p className="text-gray-700">
      {phone || "+91 XXXXX XXXXX"}
    </p>
  </div>

  <p className="text-blue-600">
  {linkedin}
</p>

  


<hr className="my-4" />

<h4 className="font-bold text-xl border-b-2 border-gray-300 pb-1 mb-3">
  PROFESSIONAL SUMMARY
</h4>










<p className="mb-4">
  {summary || "Professional summary will appear here."}
</p>

{showEducation && (
  <div>
    <h3 className="font-bold text-lg">EDUCATION</h3>
    <div className="border-t border-gray-300 my-3"></div>

    <p>{degree || "Degree"}</p>
    <p>{college || "College Name"}</p>
  </div>
)}

<div className="mb-4">
  <p className="font-semibold text-lg">
    {degree || "Bachelor of Technology"}
  </p>

  <p className="text-gray-700">
    {college || "College Name"}
  </p>
</div>

{showSkills && (
  <div>
    <h3 className="font-bold text-lg">SKILLS</h3>
    <div className="border-t border-gray-300 my-3"></div>

    {/* Skills code here */}
  </div>
)}

<div className="flex flex-wrap gap-2 mb-4">
  {skills
    .split(",")
    .filter((skill) => skill.trim())
    .map((skill, index) => (
      <span
        key={index}
        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
      >
        {skill.trim()}
      </span>
    ))}
</div>

{showProject && (
  <>
    

    <div>
      <h3 className="font-bold text-lg ">PROJECT</h3>
      <div className="border-t border-gray-300 my-3 "></div>
      <p className="mb-6">
      {project || "Project Title"}</p>
    </div>
  </>
)}

{showExperience && (
  <div>
    <h3 className="font-bold text-lg">EXPERIENCE</h3>
    <div className="border-t border-gray-300 my-3"></div>

    <h4>{role || "Software Developer Intern"}</h4>
    <p>{company || "Company Name"}</p>
    <p>{duration || "Jan 2025 - Present"}</p>
  </div>
)}

        </div>
       </div>  
      </div>
    </main>
  );
}


