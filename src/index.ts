export const portfolio = () => {
  const name = "Shreedhar Kala Magar";
  const job = "Full Stack Developer";
  const knowledge = "Frontend and Backend Development";

  const education = `Tribhuvan University, Kantipur Engineering College 
    Bachelor in Electronics Communication and Information Engineering (BEI) | 7th Sem 
    (Expected Graduation: 2026) `;

  const skill = `Programming Languages : TypeScript, JavaScript, Python, Rust
    Frontend Development : React, Nextjs
    Backend Development : Node.js, Express.js 
    Other : Git, Linux 
    `;
  const projects = `● Full stack project :
        - ToDo ( https://todo-in-nextjs-red.vercel.app/ ) 
        - Payment app (https://shreedhar.me/) 
    ● FrontEnd Project: 
        - Niural (https://shreedhar01.github.io/niural/) 
        - Omway Technologies (https://omway-nu.vercel.app/)  
    ● Entire Backend video sharing app like youtube: 
        - https://github.com/shreedhar01/backend
    `;
  const contact = `● Phone : 9866141911 
    ● Email : shreedharkalamagar@gmail.com
    ● Github : https://github.com/shreedhar01
    `;

  return `
    \x1b[1mIntroduction\x1b[0m
    I am ${name}. Aspiring ${job} with a good knowledge in ${knowledge}. Passionate about innovation, collaboration.

    \x1b[1mEducation\x1b[0m
    ${education}

    \x1b[1mTechnical Skill\x1b[0m
    ${skill}

    \x1b[1mProjects\x1b[0m
    ${projects}

    \x1b[1mContact\x1b[0m
    ${contact}
    `;
};

// console.log(portfolio());
