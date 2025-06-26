const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a third-year Computer Science Engineering student at GEHU,
                  Dehradun, with a strong passion for software development. I
                  discovered my interest in building impactful applications
                  through web development, and ever since, I've been creating
                  projects that merge functionality with thoughtful design.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  As a{" "}
                  <span className="text-blue-400 font-semibold">
                    Software Developer
                  </span>
                  , I focus on writing clean, efficient code to solve real-world
                  problems. As a{" "}
                  <span className="text-purple-400 font-semibold">
                    Full Stack Web Developer
                  </span>
                  , I aim to build responsive, user-friendly websites that are
                  both visually appealing and technically sound.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I enjoy bringing ideas to life through both academic and
                  personal projects, always striving to make technology more
                  accessible and intuitive.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Quick Facts
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Location", value: "Dehradun, India", icon: "📍" },
                  { label: "University", value: "GEHU, Dehradun", icon: "🎓" },
                  { label: "Degree", value: "B.Tech CSE", icon: "💻" },
                  { label: "Year", value: "3rd Year", icon: "📚" },
                  { label: "GPA", value: "8.05", icon: "⭐" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-800/50 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-400">{item.label}:</span>
                    </div>
                    <span className="text-white font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
