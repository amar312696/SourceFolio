import React from "react";

const InputBox = (props) => {
    const {field, name, type, id, handleChange, placeholder="", value="", index=0} = props;
    return (
      <div class="md:flex md:items-center mb-6">
        <div>
          <label class="block text-gray-300 font-bold mb" htmlFor={id}>
            {field}:
          </label>
        </div>
        {type !== "file" ? (
          <div class="md:w-2/3">
            <input
              class="bg-[#18162b] appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:border-purple-500 ml-24 flex-1"
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
          </div>
        ) : (
          <div class="md:w-2/3">
            <input
              class="bg-[#18162b] appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-500 leading-tight focus:outline-none focus:border-purple-500 ml-20 flex-1"
              id={id}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        )}
      </div>
    );
};

export default InputBox;