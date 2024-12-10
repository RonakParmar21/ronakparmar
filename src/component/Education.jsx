import React, { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("animate-slide-up");
        } else {
          el.classList.remove("animate-slide-up");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gray-100 px-4" id="education">
      <div className="pb-16 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl mt-5 font-bold mb-8 text-[#378785] border-b border-[#378785] w-max pb-4">
          Education
        </h2>

        {/* Education Cards */}
        {[
          {
            degree: "BCA",
            institution:
              "Gurukul College Junagadh (Bhakta Kavi Narsing Mehta University, Junagadh)",
            date: "June-2021 - March 2024",
            score: "CGPA - 8.67/10",
          },
          {
            degree: "HSC (12th)",
            institution: "Vidhyaniketan Shaikshnik Sankul, Virpur(State Board)",
            date: "June-2020 - May 2021",
            score: "PR - 95.15/100 (76.14%)",
          },
          {
            degree: "SSC (10th)",
            institution: "Bhaljyoti Vidhyalaya, Bandhala(State Board)",
            date: "June-2018 - March 2019",
            score: "PR - 88.28/100 (71.17%)",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#9BC3C2] w-full md:w-[70%] p-3 h-auto mb-5 rounded-lg opacity-0 reveal-on-scroll"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-xl md:text-2xl font-semibold">{item.degree}</h1>
              <h2 className="mt-2 md:mt-0 text-sm md:text-base text-right">
                <span className="font-bold">{item.institution}</span>
              </h2>
            </div>
            <ul className="flex flex-col md:flex-row justify-between mt-3 md:mt-0 text-sm md:text-base">
              <li>{item.date}</li>
              <li className="font-bold">{item.score}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
