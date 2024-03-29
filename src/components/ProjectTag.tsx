import React from "react";

interface projectTagsProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: projectTagsProps) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 dark:text-[#603f3f] dark:border-slate-600"
    : "text-[#ADB7BE] border-slate-600 hover:border-white dark:text-[#603f3f] dark:border-slate-300 dark:hover:border-slate-400";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
