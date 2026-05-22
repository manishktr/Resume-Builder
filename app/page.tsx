"use client";

import { useState, useRef } from "react";
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

  return (
    <main className="min-h-screen bg-slate-100 p-10 text-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Personal Information
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
          />

          <input
  type="text"
  placeholder="LinkedIn URL"
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

          <textarea
            placeholder="Professional Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded text-black bg-white"
          />

          <input
  type="text"
  placeholder="College Name"
  value={college}
  onChange={(e) => setCollege(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

<input
  type="text"
  placeholder="Degree"
  value={degree}
  onChange={(e) => setDegree(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

<input
  type="text"
  placeholder="Skills (comma separated)"
  value={skills}
  onChange={(e) => setSkills(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

<input
  type="text"
  placeholder="Project Title"
  value={project}
  onChange={(e) => setProject(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white" 
/>

<input
  type="text"
  placeholder="Company Name"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

<input
  type="text"
  placeholder="Role"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>

<input
  type="text"
  placeholder="Duration"
  value={duration}
  onChange={(e) => setDuration(e.target.value)}
  className="w-full border border-gray-400 p-2 rounded mb-3 text-black bg-white"
/>


        </div>


        {/* Preview */}
<div>

  <button
    onClick={downloadPDF}
    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg mb-4"
  >
    Download PDF
  </button>

  <div
  id="resume-preview"
  ref={resumeRef}
  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
>
    
        

  <div className="text-center border-b pb-4 mb-4">
    <h1 className="text-3xl font-bold text-black">
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

<h4 className="font-bold text-xl border-b-2 border-gray-300 pb-1 mb-3">
  EDUCATION
</h4>

<div className="mb-4">
  <p className="font-semibold text-lg">
    {degree || "Bachelor of Technology"}
  </p>

  <p className="text-gray-700">
    {college || "College Name"}
  </p>
</div>

<h4 className="font-bold text-xl border-b-2 border-gray-300 pb-1 mb-3">
  SKILLS
</h4>

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

<h4 className="font-bold text-xl border-b-2 border-gray-300 pb-1 mb-3">
  PROJECT
</h4>

<h4 className="font-bold text-xl border-b-2 border-gray-300 pb-1 mb-3">
  EXPERIENCE
</h4>

<div className="mb-4">
  <p className="font-semibold">
    {role || "Software Developer Intern"}
  </p>

  <p className="text-gray-700">
    {company || "Company Name"}
  </p>

  <p className="text-sm text-gray-500">
    {duration || "Jan 2025 - Present"}
  </p>
</div>

<p>
  {project || "Project title will appear here"}
</p>
        </div>
       </div>  
      </div>
    </main>
  );
}