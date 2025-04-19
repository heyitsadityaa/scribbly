import React from "react";
// import { RiStickyNoteAddLine } from "react-icons/ri";
import { CiStickyNote } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { BsClipboard2 } from "react-icons/bs";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const EmptyCard = ({ iconType, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {iconType == "empty note" && (
        <>
          <GoPlus className="absolute w-16 h-16 text-zinc-500 top-[225px]" />
          <CiStickyNote alt="No Notes" className="w-60 h-60 text-zinc-500" />
        </>
      )}
      {iconType == "no data" && (
        <HiOutlineClipboardDocument
          alt="No Notes"
          className="w-60 h-60 text-zinc-500"
        />
      )}
      <p className="w-1/2 text-sm font-medium text-zinc-500 text-center leading-7 mt-5">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
