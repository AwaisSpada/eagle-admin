import React from "react";

const DeleteMedia = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center  bg-amber-300 items-center ">
      <div className="max-w-[20rem] bg-background">
        <h3>Are You Sure You Want to Delete</h3>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default DeleteMedia;
