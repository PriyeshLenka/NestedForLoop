import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";

const ChatInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <form className="relative">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          {/* <RiAttachment2 className="w-4 h-4 text-gray-500" /> */}
          <label className="relative cursor-pointer">
        <input
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          onChange={handleFileChange}
          className="hidden"
        />
          <RiAttachment2 className="w-4 h-4 text-gray-500" />
        {selectedFile && (
          <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full">
            ✔️
          </span>
        )}
      </label>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your message here..."
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
