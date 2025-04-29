import React from "react";

const HelloWithTitle = (WrappedComponent) => {
  return function enhanced(props) {
    return (
      <div className="bg-blue-400 p-5">
        <h1 className="text-black ">Title </h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default HelloWithTitle;
