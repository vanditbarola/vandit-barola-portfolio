export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description:
      "Welcome to my portfolio! I am an aspiring Cyber Security Analyst and Web Developer dedicated to developing robust security frameworks and innovative web solutions. Explore my projects, experience, and skills that showcase my commitment to making the digital world both safe and user-friendly.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/me.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech Stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "",
    description:
      "Passionate Cyber Security Analyst dedicated to enhancing digital safety through innovative projects and robust security frameworks.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Continuously Developing My Professional Skills",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "INVISO ",
    des: "Discover the transformative capabilities of Inviso's advanced steganography technology. Safeguard your sensitive information by seamlessly embedding messages within images, audio, and videos, ensuring unparalleled security and confidentiality.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Track Map - OS",
    des: "Created and deployed a deceptive website using PHP on a Kali Linux server. Captured device details, location data, and multimedia content for analysis and potential exploitation.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "BIO - PKI",
    des: "Enhancing the PKI model with integrated security protocols, bolstering robustness through biometric data fusion.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Secure Bug",
    des: "Designed an efficient data compression system for backbone networks to reduce bandwidth usage and enhance network performance.",
    img: "/p4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Vandit Barola was an invaluable member of our team at Rinkal Solutions. He consistently demonstrated dedication and creativity in graphic design, delivering exceptional results on every project. His attention to detail and commitment to excellence were truly commendable, contributing significantly to our success.",
    name: "Divyang Paregi",
    title: "CEO of Rinkal Solution, Real Estate Company",
  },
  {
    quote:
      "Vandit Akhilesh Barola has successfully completed his internship in Ethical Hacking and Cyber Security conducted by Diginique TechLabs in collaboration with iHUB DivyaSampark at IIT Roorkee. During the period, he displayed professional traits and managed to complete all the assigned tasks as instructed. We found him punctual, hard working and inquisive. It was a pleasure having him with us in this short period. We wish him all the best for his future endeavors.",
    name: "Amit Singh Tomar",
    title: "Manage of Diginique TechLabs",
  },
  {
    quote:
      "Vandit Barola completed his internship at BlueRose Technologies Pvt. Ltd. with distinction. He demonstrated exceptional analytical skills, strong work ethic, and effective teamwork. Vandit consistently delivered high-quality results and showed a proactive approach to problem-solving. His positive attitude and dedication made him a valuable asset to our team. I am confident he will excel in his future endeavors.",
    name: "Vineet Jain",
    title: "CEO of BlueRose Technologies",
  },
  {
    quote:
      "Vandit Barola has significantly boosted our gemstones business with his exceptional skills as a Graphic Designer at Parasmani. His creativity and attention to detail shine through in the websites, logos, posters, and promotional materials he has created. Vandit's professionalism and dedication consistently delivered outstanding results. I highly recommend him for any graphic design and marketing projects.",
    name: "Akhilesh Barola",
    title: "CEO of Parasmani",
  },
];

export const companies = [
  {
    id: 1,
    name: "BlueRose Technologies",
    img: "/c1.png",
  },
  {
    id: 2,
    name: "Parasmani",
    img: "/c2.png",
  },
  {
    id: 3,
    name: "Rinkal Solution",
    img: "/c3.png",
  },
  {
    id: 4,
    name: "DigiTech",
    img: "/c4.jpg",
  },
  {
    id: 5,
    name: "Webia Studio",
    img: "/c5.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using Vue.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Ethical Hacking Intern - IIT Roorkee",
    desc: "Completed an internship in Ethical Hacking and Cyber Security, working on real-world projects to secure systems.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Network Security Consultant",
    desc: "Advised clients on best practices in network security and helped implement robust security protocols.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Research Assistant - Bennett University",
    desc: "Collaborated on research projects related to medical device security, contributing to publications and presentations.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "http://www.github.com/vanditbarola",
  },

  {
    id: 2,
    img: "/insta.png",
    link: "https://www.instagram.com/techno_vandit?igsh=MXFpY2ZyOTN5czJsMA=="
  },
  {
    id: 3,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/drvanditbarola"
  },
];
