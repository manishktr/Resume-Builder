"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [skills, setSkills] = useState("");
  const [project, setProject] = useState("");

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
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-2xl font-bold text-black">
  {name || "Your Name"}
</h3>

<p className="mb-4">
  {email || "your@email.com"}
</p>

<hr className="my-4" />

<h4 className="font-bold text-lg">
  Professional Summary
</h4>

<p className="mb-4">
  {summary || "Professional summary will appear here."}
</p>

<h4 className="font-bold text-lg">
  Education
</h4>

<p>
  {degree || "Degree"}
</p>

<p className="mb-4">
  {college || "College Name"}
</p>

<h4 className="font-bold text-lg">
  Skills
</h4>

<p className="mb-4">
  {skills || "Skills will appear here"}
</p>

<h4 className="font-bold text-lg">
  Project
</h4>

<p>
  {project || "Project title will appear here"}
</p>
        </div>

      </div>
    </main>
  );
}