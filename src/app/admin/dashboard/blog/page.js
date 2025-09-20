"use client";

import React, { useEffect, useState } from "react";
import Table from "/src/components/Table";
import MakeRequest from "/src/requests/request";

const BlogTablePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    user_name: '',
    post_date: '',
    image: '', // Will store base64 or file URL after upload
  });
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await MakeRequest("/blogs", "GET"); // 👈 your API call
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Define table columns
  const columns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    { key: "user_name", label: "Author" },
    { key: "post_date", label: "Date" },
    { key: "image", label: "Image" },
    { key: "actions", label: "Actions" },
  ];

  // Edit blog handler: opens modal with pre-filled data
  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      user_name: blog.user_name,
      post_date: blog.post_date,
      image: blog.image,
    });
    setShowForm(true);
  };

  // Delete blog handler: confirms and deletes
  const handleDelete = async (blog) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await MakeRequest(`/blogs/${blog._id || blog.id}`, 'DELETE');
        const data = await MakeRequest("/blogs", "GET");
        setBlogs(data);
      } catch (error) {
        alert('Failed to delete blog.');
      }
    }
  };

  // Format data for table (convert date, add image preview, add actions)
  const formattedData = blogs.map((blog, idx) => ({
    ...blog,
    id: idx + 1,
    post_date: new Date(blog.post_date).toLocaleDateString(),
    image: <img src={blog.image} alt={blog.title} className="w-16 h-10 object-cover rounded" />,
    actions: (
      <div className="flex gap-2">
        <button
          className="px-2 py-1 rounded bg-gradient-to-r from-[#7a1415] to-[#a81c1e] text-white font-semibold hover:opacity-80 transition"
          onClick={() => handleEdit(blog)}
          aria-label="Edit Blog"
        >
          Edit
        </button>
        <button
          className="px-2 py-1 rounded bg-gray-200 text-[#7a1415] font-semibold hover:bg-gray-300 transition"
          onClick={() => handleDelete(blog)}
          aria-label="Delete Blog"
        >
          Delete
        </button>
      </div>
    ),
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    // Basic validation
    if (!formData.title || !formData.user_name || !formData.post_date || !formData.image) {
      setFormError('All fields are required.');
      return;
    }

    // Prepare data to send

    // try {
    //   // You may need to adjust the API endpoint and method as per your backend
    //   await MakeRequest('/blogs', 'POST', formData);
    //   setShowForm(false);
    //   setFormData({ title: '', user_name: '', post_date: '', image: '' });
    //   setImageFile(null);
    //   // Optionally, refresh blog list
    //   const data = await MakeRequest("/blogs", "GET");
    //   setBlogs(data);
    // } catch (error) {
    //   setFormError('Failed to add blog.');
    // }
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 items-center mb-4">
        <h1 className="text-2xl font-bold">Blog List</h1>
        <button
          className="justify-self-end px-4 py-2 rounded shadow font-semibold text-white bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415] hover:from-[#a81c1e] hover:to-[#a81c1e] transition-all duration-300"
          onClick={() => setShowForm(true)}
        >
          Add Blog
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0  bg-black/40 bg-opacity-100 flex items-center justify-center z-50">
          <div className="backdrop-blur-lg bg-white/90 border border-[#7a1415] p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415]">Add New Blog</h2>
            <form onSubmit={handleFormSubmit} className="grid gap-5">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleInputChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
              <input
                type="text"
                name="user_name"
                placeholder="Author"
                value={formData.user_name}
                onChange={handleInputChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
              <input
                type="date"
                name="post_date"
                placeholder="Date"
                value={formData.post_date}
                onChange={handleInputChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
              <label className="block text-sm font-semibold text-[#7a1415]">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
              {formData.image && (
                <img src={formData.image} alt="Preview" className="w-32 h-20 object-cover rounded-lg mx-auto border-2 border-[#7a1415]" />
              )}
              {formError && <div className="text-red-600 text-center font-semibold">{formError}</div>}
              <button
                type="submit"
                className="w-full py-2 rounded font-bold text-white bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415] hover:from-[#a81c1e] hover:to-[#a81c1e] transition-all duration-300 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <Table columns={columns} data={formattedData} />
    </div>
  );
};

export default BlogTablePage;
