import {cn} from "../../lib/utils"

 const CardTitle = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <h4 className={cn("font-bold text-3xl dark:text-white text-red-300 tracking-wide mt-4", className)}>
        {children}
      </h4>
    );
  };


  export default CardTitle;