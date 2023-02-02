import { useState } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({ video }) {
  const [formData, setFormData] = useState(video);

  // eslint-disable-next-line no-unused-vars
  const [editVideo, { data, isLoading, isError, isSuccess }] =
    useEditVideoMutation();

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
  /*
  const resetForm = () => {
    setFormData({
      title: "",
      author: "",
      description: "",
      link: "",
      thumbnail: "",
      date: "",
      duration: "",
      views: "",
    });
  };
  */

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({ id: video?.id, data: formData });
    // resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                value={formData?.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                value={formData?.author}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                name="description"
                value={formData?.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                name="link"
                value={formData?.link}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                name="thumbnail"
                value={formData?.thumbnail}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                name="date"
                value={formData?.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                name="duration"
                value={formData?.duration}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                name="views"
                value={formData?.views}
                onChange={handleInputChange}
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

        {isSuccess && <Success message="Video was edited successfully" />}
        {isError && <Error message="There was an error editing video" />}
      </div>
    </form>
  );
}
