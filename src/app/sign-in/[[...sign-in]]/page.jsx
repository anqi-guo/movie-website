import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center items-center p-3">
      <SignIn />
    </div>
  );
};

export default page;
