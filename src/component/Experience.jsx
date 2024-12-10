import React, { useEffect } from "react";
import experienceData from "./experience.json";

const Experience = () => {
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
    <section className="relative bg-gray-100 px-4" id="experience">
      <div className="pb-16 max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl mt-5 font-bold mb-8 text-[#378785] border-b border-[#378785] w-max pb-4">
          Experience
        </h2>

        {experienceData.experience.map((item, index) => (
          <div
            key={index}
            className="bg-[#9BC3C2] w-full md:w-[70%] p-4 h-auto mb-5 rounded-lg opacity-0 reveal-on-scroll"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h1 className="text-xl md:text-2xl font-semibold">{item.role}</h1>
              <h2 className="mt-2 md:mt-0 text-sm md:text-base text-right">
                <span className="font-bold">{item.company}</span>
              </h2>
            </div>
            <div className="flex justify-between mt-3 md:mt-0 text-sm md:text-base">
              <span>{item.duration}</span>
            </div>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


// import React, { useEffect } from "react";

// const Experience = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const elements = document.querySelectorAll(".reveal-on-scroll");
//       elements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         if (rect.top < window.innerHeight && rect.bottom > 0) {
//           el.classList.add("animate-slide-up");
//         } else {
//           el.classList.remove("animate-slide-up");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative bg-gray-100 px-4" id="experience">
//       <div className="pb-16 max-w-7xl mx-auto flex flex-col items-center">
//         <h2 className="text-3xl md:text-4xl mt-5 font-bold mb-8 text-[#378785] border-b border-[#378785] w-max pb-4">
//           Experience
//         </h2>

//         {/* Experience Cards */}
//         {[
//           {
//             role: "Web Developer",
//             company: "Tech Solutions Pvt. Ltd.",
//             duration: "June 2023 - Present",
//             description: [
//               "Developed and maintained responsive user interfaces.",
//               "Collaborated with backend teams to integrate APIs.",
//               "Enhanced website performance, achieving a 30% faster load time.",
//             ],
//           },
//           {
//             role: "Junior Web Developer",
//             company: "Creative Minds",
//             duration: "Jan 2022 - May 2023",
//             description: [
//               "Designed interactive and mobile-friendly websites.",
//               "Implemented SEO best practices, boosting site traffic by 20%.",
//               "Assisted in debugging and testing across multiple projects.",
//             ],
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#9BC3C2] w-full md:w-[70%] p-4 h-auto mb-5 rounded-lg opacity-0 reveal-on-scroll"
//           >
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//               <h1 className="text-xl md:text-2xl font-semibold">{item.role}</h1>
//               <h2 className="mt-2 md:mt-0 text-sm md:text-base text-right">
//                 <span className="font-bold">{item.company}</span>
//               </h2>
//             </div>
//             <div className="flex justify-between mt-3 md:mt-0 text-sm md:text-base">
//               <span>{item.duration}</span>
//             </div>
//             <ul className="list-disc pl-5 mt-3 space-y-1">
//               {item.description.map((desc, i) => (
//                 <li key={i}>{desc}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;


// import React from "react";

// const Experience = () => {
//   return (
//     <section className="relative  bg-[#9BC3C2] px-4" id="experience">
//       <div className="pb-16 max-w-7xl mx-auto flex flex-col items-center">
//         <h2 className="text-3xl mt-5 font-bold mb-8 text-white border-b border-[#378785] w-max pb-4">
//           Experience
//         </h2>

//         <div className="bg-gray-100 w-[90%] p-3 h-auto mb-5">
//           <div className="flex justify-between border-b border-[#000]">
//             <h1>Web Developer(Frontend) At Avadh Web</h1>
//             <h3>From Oct 2024 to Current</h3>
//           </div>
//           <div className="p-4">
//             <ul className="list-disc">
//               <li>
//                 Working on a Avadh Web task distribution with key features
//                 including Assign Task, Check Task, and Task Report to streamline
//                 and organize student task management.
//               </li>
//               <li>
//                 Designed and implemented two distinct admin roles to enable
//                 controlled task assignment and progress tracking.
//               </li>
//               <li>
//                 Built functionalities for students to accept, perform, and
//                 submit tasks for improved engagement and accountability.
//               </li>
//               <li>
//                 Integrated a feature allowing students to view all past tasks
//                 for easy tracking and performance assessment.
//               </li>
//               <li>
//                 Leveraging React for an interactive and responsive frontend,
//                 ensuring seamless data handling and a smooth user experience.
//               </li>
//               <li>TechStack: React js, HTML, CSS, JavaScript</li>
//             </ul>
//           </div>
//         </div>

//         <div className="bg-gray-100 w-[90%] p-3 h-auto mb-5">
//           <div className="flex justify-between border-b border-[#000]">
//             <h1>Project Trainee At Acty System India PVT. LTD.</h1>
//             <h3>From April 2024 to 04 Sept, 2024</h3>
//           </div>
//           <div className="p-4">
//             <ul className="list-disc">
//               <li>
//                 Working with Acty System India PVT. LTD. where I mostly learn
//                 Dot net and Oracle Database.
//               </li>
//               <li>
//                 Learn how to optimize query and how to get data fastest way from
//                 database.
//               </li>
//               <li>
//                 TechStack: Oracle, HTML, CSS, BootStrap, JavaScript, Dot Net.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="bg-gray-100 w-[90%] p-3 h-auto mb-5">
//           <div className="flex justify-between border-b border-[#000]">
//             <h1>Lab Assistant At Gurukul College Junagadh</h1>
//             <h3>From July 2023 to March 2024</h3>
//           </div>
//           <div className="p-4">
//             <ul className="list-disc">
//               <li>
//                 Lab Assistant in leading computer lab sessions and checking
//                 computer programs in different programming languages.
//               </li>
//               <li>Tutored students in advanced programming concepts.</li>
//               <li>
//                 Working with multiple technologies : C Language, Java, HTML,
//                 CSS, JavaScript, Oracle, CPP, PHP, Basic Data Structure.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
