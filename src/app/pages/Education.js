import react from "react";

export function Education() {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-playfair pt-10 mb-12">
        Education
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* John Jay */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold font-lora text-xl mb-2">
              John Jay College of Criminal Justice
            </h2>
            <h4 className="text-lg font-nunito text-blue-600 mb-2">
              Bachelor of Science in Computer Science and Information Security
            </h4>
            <h4 className="text-lg font-nunito text-gray-500 mb-2">
              Jul 2022 - May 2026
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Gaining a strong foundation in computer science and cybersecurity
              preparing for a career at the intersection of technology and
              security.
            </p>
          </div>
        </div>
        {/* CodePath Cybersecurity */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold font-lora text-xl mb-2">
              CodePath Cybersecurity
            </h2>
            <h4 className="text-lg font-nunito text-gray-500 mb-2">
              Sep 2024 - Dec 2024
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Cybersecurity course emphasizing core Blue Team defense concepts
              essential for security operations. Hands-on experience in endpoint
              and network monitoring using tools like SIEMs and HIDS to detect
              vulnerabilities in endpoints, as well as packet sniffing and
              deploying IDS/IPS systems for network defense.
            </p>
          </div>
        </div>
        {/* CodePath Internship Connection Program */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold font-lora text-xl mb-2">
              CodePath Internship Connection Program
            </h2>
            <h4 className="text-lg font-nunito text-gray-500 mb-2">
              Jun 2024 - Aug 2024
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Workshops on technical skill building and professional development
              assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
