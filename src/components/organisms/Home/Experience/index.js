import Link from "next/link";
import React from "react";

export const ExperienceHome = () => {
  const data = [
    {
      time: "July 2023 - Present",
      title: "PT Mitra Integrasi Informatika, assigned to Jasamarga",
      link: "https://www.mii.co.id/",
      descriptions: [
        {
          desc: "✅ Optimizing website performance and loading speed.",
        },
        {
          desc: "✅ Ensuring cross-browser compatibility and accessibility of the dashboard.",
        },
        {
          desc: "✅ Writing clean, maintainable, and well-documented code.",
        },
        {
          desc: "✅ Implementing testing and debugging processes to ensure system quality.",
        },
        {
          desc: "✅ Implementing testing and debugging processes to ensure system quality.",
        },
        {
          desc: "✅ Communicating with customers and team members to ensure that the project meets the requirements and deadlines.",
        },
      ],
    },
    {
      time: "July 2021 - July 2023",
      title: "Litedex Protocol",
      link: "https://litedex.io",
      descriptions: [
        {
          desc: "✅ Translate UI/UX design into code that is suitable and accessible to users.",
        },
        {
          desc: "✅ Ensuring the appearance and function of the website is consistent across various devices and browsers.",
        },
        {
          desc: "✅ Implement security and privacy standards on the website.",
        },
        {
          desc: "✅ Ensuring the website is responsive and user-friendly.",
        },
        {
          desc: "✅ Ensuring the website has optimal performance and minimizes load time.",
        },
        {
          desc: "✅ Implement integration with required API and data.",
        },
        {
          desc: "✅ Keep code clean, organized, and easy to maintain.",
        },
        {
          desc: "✅ Doing testing and debugging to ensure the website functions properly.",
        },
        {
          desc: "✅ Follow the latest trends in web technology and ensure websites are kept relevant and up-to-date.",
        },
        {
          desc: "✅ Communicate with related teams and follow the work processes that have been set.",
        },
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="flex flex-col max-w-2xl px-4 pb-40 mx-auto space-y-1 xl:px-0 lg:pb-0 sm:space-y-2">
      <h2 className="text-2xl font-bold text-left lg:text-center md:text-4xl text-brand">
        Experience
      </h2>
      <ol className="relative border-l border-gray-500 dark:border-gray-700">
        {data.map((item, i) => (
          <ListExperience key={i} title={item.title} time={item.time}>
            <div className="flex flex-col items-start space-y-4">
              {item.descriptions.map((datas, i) => (
                <DescExperience key={i} desc={datas.desc} />
              ))}
            </div>
            <Link
              href={item.link}
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white rounded-lg bg-brand hover:bg-brand/90">
              Go to Website
            </Link>
          </ListExperience>
        ))}
      </ol>
    </section>
  );
};

const DescExperience = ({ desc }) => {
  return <p className="text-sm font-normal text-gray-500">{desc}</p>;
};
const ListExperience = ({ time, title, children }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-brand rounded-full -left-1.5 border border-brand "></div>
      <time className="mb-1 text-sm text-gray-400 dark:text-gray-500">
        {time}
      </time>
      <h3 className="mb-6 text-lg font-semibold font-plus-jakarta tracking-wide text-brand">
        {title}
      </h3>
      {children[0]}
      {children[1]}
    </li>
  );
};
