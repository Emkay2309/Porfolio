import React from "react";
import { motion } from "framer-motion";

const ListOfItems = ({ list }) => {
  return (
    <div>
      <motion.ol className="list-none pl-2 mt-5">
        {list.map((item, index: number) => (
          <motion.li
            initial={{ opacity: 0 }}
            transition={{ delay: index }}
            animate={{ opacity: 1, x: 10 }}
            key={index}
            className="flex align-middle gap-2 items-center"
          >
        <div className="bg-white w-0 h-0 border-4 border-transparent border-b-4 border-white transform rotate-45"></div>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
};

export default ListOfItems;
