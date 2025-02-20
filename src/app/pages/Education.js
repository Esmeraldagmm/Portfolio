import React from "react";
import Image from "next/image";

export function Education() {
  return (
    <div
      id="education"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-rubik pt-10 mb-12">
        EDUCATION
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* John Jay */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <Image
              src="/jjay.png"
              alt="jjay"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="w-full max-w-sm h-72 mb-4 mx-auto border-none"
            />
            <h2 className="text-left font-bold font-rubik text-xl mb-2">
              John Jay College of Criminal Justice
            </h2>
            <h4 className="text-lg font-rubik text-blue-600 mb-2">
              Bachelor of Science in Computer Science and Information Security
            </h4>
            <h4 className="text-lg font-rubik text-gray-500 mb-2">
              Jul 2022 - May 2026
            </h4>
            <p className="text-lg text-white font-light font-rubik leading-8">
              Gaining a strong foundation in computer science and cybersecurity
              preparing for a career at the intersection of technology and
              security.
            </p>
          </div>
        </div>
        {/* CodePath Cybersecurity */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <Image
              src="/codepath.webp"
              alt="codepath"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="w-full max-w-sm h-72 mb-4 mx-auto border-none"
            />
            <h2 className="text-left font-bold font-rubik text-xl mb-2">
              CodePath Cybersecurity
            </h2>
            <h4 className="text-lg font-rubik text-gray-500 mb-2">
              Sep 2024 - Dec 2024
            </h4>
            <p className="text-lg text-white font-light font-rubik leading-8">
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
            <Image
              src="/codepath.webp"
              alt="codepath"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
              className="w-full max-w-sm h-72 mb-4 mx-auto border-none"
            />
            <h2 className="text-left font-bold font-rubik text-xl mb-2">
              CodePath Internship Connection Program
            </h2>
            <h4 className="text-lg font-rubik text-gray-500 mb-2">
              Jun 2024 - Aug 2024
            </h4>
            <p className="text-lg text-white font-light font-rubik leading-8">
              Workshops on technical skill building and professional development
              assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
