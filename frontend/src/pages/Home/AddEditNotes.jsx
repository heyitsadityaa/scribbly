import React, { useState } from "react";
import TagInput from "../../components/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({
  type,
  noteData,
  getAllNotes,
  onClose,
  showToastMessage,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || []);

  const [error, setErrors] = useState(null);

  // Add note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrors(error.response.data.message);
      }
    }
  };

  // Edit note
  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrors(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setErrors("Please enter a title.");
      return "";
    }

    if (!content) {
      setErrors("Please enter content.");
      return "";
    }

    setErrors("");

    if (type == "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3"
        onClick={onClose}
      >
        <MdClose className="text-xl text-zinc-500 hover:text-white" />
      </button>

      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          className="text-2xl text-zinc-100 bg-stone-950 outline-none p-1 rounded-lg"
          placeholder="Go to the Gym at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="input-label">
          CONTENT
        </label>
        <textarea
          type="text"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          className="text-sm text-zinc-100 outline-none bg-zinc-900 p-2 rounded-lg"
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="" className="input-label">
          TAGS
        </label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-rose-500 text-xs pt-4">{error}</p>}

      <div className="flex flex-col gap-2">
        <button
          className="btn-primary font-medium mt-5 p-3"
          onClick={handleAddNote}
        >
          {type === "edit" ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
