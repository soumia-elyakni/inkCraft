import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({title, type, items, onChange, name}) => {
  return (
    <div className="flex items-center justify-start mt-6">
      <div>
        <h6 className="mb-4">{title}</h6>
        {items.map((item) => (
          <label key={item} className="flex items-center mb-3 space-x-3">
            <input
              type={type}
              name={type === "radio" ? name : item}
              value={item}
              onChange={onChange}
              className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none"
            />
            <span className="font-normal text-gray-700 dark:text-white capitalize">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
