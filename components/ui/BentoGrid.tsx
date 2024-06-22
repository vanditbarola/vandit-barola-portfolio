import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import Vortex from "./Vortex";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Python + Flask", "C++"];
  const rightLists = [
    "Networking",
    "Vulnerability Assessment",
    "Graphic Designing",
  ];

  const professionalSkills = [
    "Communication",
    "Project Management",
    "Problem Solving",
    "Leadership",
    "Interpersonal Skills",
    "Adaptability",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "technovandit18@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, {
                "object-contain h-full w-full": id === 5,
                "object-cover object-center": id !== 5,
              })}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}
        >
          <div
            className={cn(
              "font-sans font-extralight text-sm z-10 w-full", // Ensure the text takes full width
              id === 1
                ? "md:text-lg lg:text-2xl text-[#FFFFFF] bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 p-4 rounded-lg shadow-lg"
                : id === 4
                  ? "md:text-sm lg:text-lg text-[#FFFFFF]"
                  : "md:text-xs lg:text-base text-[#5358b8]",
            )}
          >
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 2 && (
            <div className="relative w-full h-full bg-[#10132E] p-4">
              <>
                <div className="absolute inset-0">
                  <Vortex />
                </div>
                <div className="relative flex gap-5 justify-evenly items-center h-full">
                  <div className="flex flex-col justify-evenly gap-5 md:gap-3 lg:gap-8 flex-wrap">
                    {leftLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-100 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col justify-evenly gap-5 md:gap-3 lg:gap-8 flex-wrap">
                    {rightLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-100 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            </div>
          )}

          {id === 5 && (
            <div className="mt-5 relative flex flex-wrap gap-2">
              {professionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 text-white p-2 rounded-lg shadow-md text-center w-full md:w-auto md:flex-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
