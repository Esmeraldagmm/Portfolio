import react from "react";

export function Education() {
  return (
    <div
      id="education"
      //   min-h-screen
      className="flex flex-col items-center justify-center mb-16 animate-fade-left"
    >
      <h1 className="text-4xl text-center font-bold pt-10 mb-12">Education</h1>
      <div className="w-full max-w-screen-xl px-8 gap-y-8 grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {/* John Jay */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4 animate-fade-up ">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl">
              John Jay College of Criminal Justice
            </h2>
          </div>
          {/* seperate the 3 */}
          <div className="flex flex-wrap justify-center gap-6 p-4 ">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl"></p>
            </div>
          </div>
        </div>
        {/* CodePath Cybersecurity */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4 animate-fade-up ">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl">
              CodePath Cybersecurity
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 ">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl"> </p>
            </div>
          </div>
        </div>
        {/* CodePath Internship Connection Program */}
        <div className="rounded-3xl flex flex-col bg-gray-900 gap-y-4 animate-fade-up ">
          <div className="border-t-4 border-t-blue-400 rounded-t-xl p-8">
            <h2 className="text-center font-bold text-xl">
              CodePath Internship Connection Program
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 p-4 ">
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
