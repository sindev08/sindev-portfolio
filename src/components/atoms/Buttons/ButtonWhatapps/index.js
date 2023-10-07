import { ImageWrap } from "components/atoms/ImageWrap";
import Link from "next/link";
import React from "react";

export const ButtonWhatapss = () => {
  return (
    <Link href="https://wa.me/+6285162908030">
      <div className="fixed right-8 bottom-8 cursor-pointer">
        <div className="flex">
          <ImageWrap
            src={"/whatsapp.png"}
            alt="whatsapp singgih"
            className=" w-10 h-10"
          />
          <div className="flex items-center -ml-6 justify-start px-3 pl-8 pr-2 rounded-r-xl bg-green-500">
            <p className="text-sm font-medium">Chat</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
