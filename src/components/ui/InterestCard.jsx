import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const InterestCard = ({ title, items }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-200/20 dark:border-gray-700/30">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

InterestCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InterestCard;
