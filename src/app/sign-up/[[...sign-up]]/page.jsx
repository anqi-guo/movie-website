import React from "react";
import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <SignUp />
    </div>
  );
};

export default page;
