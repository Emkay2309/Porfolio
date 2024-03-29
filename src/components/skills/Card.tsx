import {cn} from "../../lib/utils"

 const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full px-4 pt-2 pb-3 overflow-hidden bg-black dark:bg-slate-900 border border-transparent dark:border-white group-hover:border-slate-700 relative z-20",
          className
        )}
      >
        <div className="relative z-50">
          <div className="px-4 py-2">{children}</div>
        </div>
      </div>
    );
  };

  export default Card