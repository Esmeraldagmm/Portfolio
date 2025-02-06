import react from "react";

export function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center mb-16"
    >
      <h1 className="text-4xl text-center font-bold font-playfair pt-10 mb-12">
        Experience
      </h1>
      <div className="w-full max-w-screen-2xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* IT Intern */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold text-xl mb-2 font-lora">
              IT Support Intern
            </h2>
            <h4 className="text-lg text-gray-500 mb-2 font-nunito">
              Dec 2024 - Present
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Assess and identify technology needs, assist with the set up of
              computer equipment, and troubleshoot hardware and software issues
              in collaboration with the DOE Help Center. Monitor equipment for
              timely repairs, and provide support for technology usage.
            </p>
          </div>
        </div>
        {/* CTP Web-Dev Fellow */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold text-xl mb-2 font-lora">
              Web Development Fellow
            </h2>
            <h4 className="text-lg text-gray-500 mb-2 font-nunito">
              Aug 2024 - Present
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Develop full-stack web applications using JavaScript, focusing on
              front-end and back-end technologies with React and Node.js, while
              adopting best practices like MVC architecture and test-driven
              deployment. Collaborate in teams to design, develop, and deploy
              projects, efficiently applying industry-standard tools and
              processes.
            </p>
          </div>
        </div>
        {/* College Assistant */}
        <div className="rounded-3xl flex flex-col bg-slate-900 bg-opacity-80 gap-y-4">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-left font-bold text-xl mb-2 font-lora">
              College Assistant
            </h2>
            <h4 className="text-lg text-gray-500 mb-2 font-nunito">
              Sep 2023 - Present
            </h4>
            <p className="text-lg text-white font-light font-nunito leading-8">
              Design engaging flyers and campaigns to promote departmental
              services and initiatives at the Math and Science Resource Center,
              enhancing student awareness and participation by 35%. Utilize
              office management software to efficiently record and track student
              data, optimizing organizational processes and enhancing
              communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
