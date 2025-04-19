import moment from "moment";
import React from "react";
import { MdCreate, MdOutlinePushPin, MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="border border-zinc-500 rounded p-4 hover:shadow-xl hover:shadow-zinc-700 hover:scale-105 hover:-rotate-1 transition-all ease-in-out">
      <div className="flex ic justify-between">
        <div className="">
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-zinc-500">
            {moment(date).format("DD MMM YYYY")}
          </span>
        </div>

        <MdOutlinePushPin
          onClick={onPinNote}
          className={`icon-btn ${isPinned ? "text-primary" : "text-zinc-300"}`}
        />
      </div>

      <p className="text-xs text-zinc-400 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags.map((tag) => `#${tag} `)}
        </div>

        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-rose-500"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
