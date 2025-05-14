import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/Vixen-1/" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/Ayushi2800/" },
];

export default function Socials() {
  return (
    <div className="flex gap-6">
      {social.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-green-300 rounded-full flex justify-center items-center text-green-300 text-base hover:bg-green-300 hover:text-black hover:transition-all duration-500"
          >
            {item.icon}{" "}
          </a>
        );
      })}
    </div>
  );
}
