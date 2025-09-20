"use client"
import React, { useEffect, useState } from 'react';
import Table from '/src/components/Table';
import MakeRequest from '/src/requests/request';
import { FaEdit, FaTrashAlt, FaEyeSlash, FaEye } from 'react-icons/fa';

// Table columns for testimonials
const columns = [
  { key: "id", label: "ID" },
  { key: "image", label: "Image" },
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  { key: "actions", label: "Actions" },
];

export default function TestimonialPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ image: '', name: '', description: '' });
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState('');

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await MakeRequest('/testimonials', 'GET');
        setTestimonials(data);
      } catch (error) {
        setTestimonials([]);
      }
    };
    fetchTestimonials();
  }, []);

  // Edit testimonial handler
  const handleEdit = (testimonial) => {
    setFormData({ image: testimonial.image, name: testimonial.name, description: testimonial.description });
    setShowForm(true);
  };

  // Delete testimonial handler
  const handleDelete = async (testimonial) => {
    // if (window.confirm('Are you sure you want to delete this testimonial?')) {
    //   try {
    //     await MakeRequest(`/testimonials/${testimonial.id}`, 'DELETE');
    //     const data = await MakeRequest('/testimonials', 'GET');
    //     setTestimonials(data);
    //   } catch (error) {
    //     alert('Failed to delete testimonial.');
    //   }
    // }
  };

  // Hide testimonial handler (custom logic)
  const handleHide = async (testimonial) => {
    // try {
    //   await MakeRequest(`/testimonials/${testimonial.id}`, 'PATCH', { hidden: !testimonial.hidden });
    //   const data = await MakeRequest('/testimonials', 'GET');
    //   setTestimonials(data);
    // } catch (error) {
    //   alert('Failed to update testimonial visibility.');
    // }
  };

  // Format data for table (image preview, actions)
  const formattedData = Array.isArray(testimonials)
    ? testimonials.map((testimonial, idx) => ({
        ...testimonial,
        id: idx + 1,
        image: !testimonial.hidden ? (
          <img
            src={testimonial.image}
            alt={`Testimonial ${idx + 1}`}
            className="w-24 h-16 object-cover rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : (
          <span className="text-gray-400 italic">Hidden</span>
        ),
        description: (
          <div className="whitespace-pre-line">
            {testimonial.description}
          </div>
        ),
        actions: (
          <div className="flex gap-2 flex-wrap justify-center">
            {/* Edit Icon */}
            <button
              className="p-2 rounded-full bg-gradient-to-r from-[#7a1415] to-[#a81c1e] text-white"
              onClick={() => handleEdit(testimonial)}
              aria-label="Edit Testimonial"
            >
              <FaEdit size={20} />
            </button>
            {/* Delete Icon */}
            <button
              className="p-2 rounded-full bg-gray-200 text-[#7a1415]"
              onClick={() => handleDelete(testimonial)}
              aria-label="Delete Testimonial"
            >
              <FaTrashAlt size={20} />
            </button>
            {/* Hide/Show Icon */}
            <button
              className="p-2 rounded-full bg-yellow-200 text-[#7a1415]"
              onClick={() => handleHide(testimonial)}
              aria-label={testimonial.hidden ? "Show Testimonial" : "Hide Testimonial"}
            >
              {testimonial.hidden ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
          </div>
        ),
      }))
    : [];

  // Form input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Image upload handler
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

  // Form submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    if (!formData.image || !formData.name || !formData.description) {
      setFormError('All fields are required.');
      return;
    }
    try {
      await MakeRequest('/testimonials', 'POST', formData);
      setShowForm(false);
      setFormData({ image: '', name: '', description: '' });
      setImageFile(null);
      const data = await MakeRequest('/testimonials', 'GET');
      setTestimonials(data);
    } catch (error) {
      setFormError('Failed to add testimonial.');
    }
  };

  // Responsive layout and modal
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h1 className="text-2xl font-bold">Testimonial List</h1>
        <button
          className="px-4 py-2 rounded shadow font-semibold text-white bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415] hover:from-[#a81c1e] hover:to-[#a81c1e] transition-all duration-300 w-full md:w-auto"
          onClick={() => setShowForm(true)}
        >
          Add Testimonial
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-10 flex items-center justify-center z-50">
          <div className="backdrop-blur-lg bg-white border border-[#7a1415] p-4 md:p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415]">Add New Testimonial</h2>
            <form onSubmit={handleFormSubmit} className="grid gap-5">
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
                <img src={formData.image} alt="Preview" className="w-24 h-16 object-cover rounded-lg mx-auto border-2 border-[#7a1415]" />
              )}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="border-b-2 border-[#7a1415] bg-transparent p-2 text-lg focus:outline-none focus:border-[#a81c1e] rounded transition-all duration-300"
                required
              />
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
      <div className="overflow-x-auto">
        <Table columns={columns} data={formattedData} />
      </div>
    </div>
  );
}
