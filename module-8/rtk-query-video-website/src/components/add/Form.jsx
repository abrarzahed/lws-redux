import Success from "../ui/Success";
import { useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Error from "../ui/Error";

export default function Form() {
  const [addVideo, { data: video, isLoading, isError, isSuccess }] =
    useAddVideoMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    link: "",
    thumbnail: "",
    uploadDate: "",
    duration: "",
    views: "",
  });

  //   handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  //   reset form
  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      description: "",
      link: "",
      thumbnail: "",
      uploadDate: "",
      duration: "",
      views: "",
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                onChange={handleInputChange}
                name="title"
                value={formData.title}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                onChange={handleInputChange}
                name="author"
                value={formData.author}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                onChange={handleInputChange}
                name="description"
                value={formData.description}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                onChange={handleInputChange}
                name="link"
                value={formData.link}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                onChange={handleInputChange}
                name="thumbnail"
                value={formData.thumbnail}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                onChange={handleInputChange}
                name="uploadDate"
                value={formData.uploadDate}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                onChange={handleInputChange}
                name="duration"
                value={formData.duration}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                onChange={handleInputChange}
                name="views"
                value={formData.views}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
          disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {isSuccess && <Success message="Video was added successfully" />}
        {isError && <Error message="There was an error adding video" />}
      </div>
    </form>
  );
}
