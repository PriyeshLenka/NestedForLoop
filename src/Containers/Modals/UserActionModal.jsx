import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const UserActionModal = ({ modalType, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleClearFile = () => {
    setFormData({ ...formData, screenshot: null });
    document.getElementById("screenshot").value = "";
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <div
        className="bg-gray-500 bg-opacity-75 absolute inset-0"
        aria-hidden="true"
      ></div>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">{modalType === 'question' ? 'Create New Question' : 'Add Comment'}</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <IoCloseSharp />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-4" onSubmit={handleModalSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              {modalType === 'question' && (
                <>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                      Question Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write question description here"
                    ></textarea>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                      Question Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="react">React</option>
                      <option value="java">Java</option>
                      <option value="spring">Spring</option>
                      <option value="springboot">SpringBoot</option>
                      <option value="javascript">JavaScript</option>
                    </select>
                  </div>
                </>
              )}
              {modalType === 'comment' && (
                <>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 text-left"
                    >
                      Comment
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Write comment here"
                    ></textarea>
                  </div>
                </>
              )}
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 text-left"
                >
                  Link
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="i.e. CodeSandBox, Github, GDrive, DropBox"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="screenshot"
                  className="block mb-2 text-sm font-medium text-gray-900 text-left"
                >
                  Upload Image/File
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    name="screenshot"
                    id="screenshot"
                    onChange={handleFileChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  {formData.screenshot && (
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                      onClick={handleClearFile}
                    >
                      <IoCloseSharp />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="grid gap-1 grid-cols-2">
                <button
                  type="button"
                  className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm px-4 py-1.5 border border-gray-300"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserActionModal;
