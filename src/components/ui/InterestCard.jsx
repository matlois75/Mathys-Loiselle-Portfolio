import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const InterestCard = ({ title, items }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mr-2" />
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
