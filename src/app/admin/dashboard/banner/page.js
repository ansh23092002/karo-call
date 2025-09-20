'use client'
import React, { useEffect, useState } from 'react';
import Table from '/src/components/Table';
import MakeRequest from '/src/requests/request';
import { FaEdit, FaTrashAlt, FaEyeSlash, FaEye } from 'react-icons/fa';

// Responsive Banner Management Page

// Table columns definition
// Table columns definition
const columns = [
  { key: "id", label: "ID" },
  { key: "image", label: "Image" },
  { key: "display_order", label: "Display Order" },
  { key: "actions", label: "Actions" },
];

export default function BannerPage() {
  // State for banners and form
  const [banners, setBanners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ image: '', display_order: '' });
  const [imageFile, setImageFile] = useState(null);
  const [formError, setFormError] = useState('');

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await MakeRequest('/banners', 'GET');
        setBanners(data);
      } catch (error) {
        setBanners([]);
      }
    };
    fetchBanners();
  }, []);

  // Edit banner handler
  const handleEdit = (banner) => {
    setFormData({ image: banner.image, display_order: banner.display_order });
    setShowForm(true);
  };

  // Delete banner handler
  const handleDelete = async (banner) => {
    // if (window.confirm('Are you sure you want to delete this banner?')) {
    //   try {
    //     await MakeRequest(`/banners/${banner.id}`, 'DELETE');
    //     const data = await MakeRequest('/banners', 'GET');
    //     setBanners(data);
    //   } catch (error) {
    //     alert('Failed to delete banner.');
    //   }
    // }
  };

  // Hide banner handler (custom logic)
  // Toggle banner hidden state (simulate backend update)
  const handleHide = async (banner) => {
    // try {
    //   // Toggle hidden property (simulate PATCH request)
    //   await MakeRequest(`/banners/${banner.id}`, 'PATCH', { hidden: !banner.hidden });
    //   const data = await MakeRequest('/banners', 'GET');
    //   setBanners(data);
    // } catch (error) {
    //   alert('Failed to update banner visibility.');
    // }
  };

  // Format data for table (image preview, actions)
  const formattedData = Array.isArray(banners)
    ? banners.map(banner => ({
        ...banner,
        image: !banner.hidden ? (
          <img
            src={banner.image}
            alt={`Banner ${banner.id}`}
            className="w-32 h-16 object-cover rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : (
          <span className="text-gray-400 italic">Hidden</span>
        ),
        actions: (
          <div className="flex gap-2 flex-wrap justify-center">
            {/* Edit Icon */}
            <button
              className="p-2 rounded-full bg-gradient-to-r from-[#7a1415] to-[#a81c1e] text-white hover:scale-110 hover:rotate-12 transition-transform duration-300"
              onClick={() => handleEdit(banner)}
              aria-label="Edit Banner"
            >
              <FaEdit size={20} />
            </button>
            {/* Delete Icon */}
            <button
              className="p-2 rounded-full bg-gray-200 text-[#7a1415] hover:bg-gray-300 hover:scale-110 hover:rotate-12 transition-transform duration-300"
              onClick={() => handleDelete(banner)}
              aria-label="Delete Banner"
            >
              <FaTrashAlt size={20} />
            </button>
            {/* Hide/Show Icon */}
            <button
              className="p-2 rounded-full bg-yellow-200 text-[#7a1415] hover:bg-yellow-300 hover:scale-110 hover:rotate-12 transition-transform duration-300"
              onClick={() => handleHide(banner)}
              aria-label={banner.hidden ? "Show Banner" : "Hide Banner"}
            >
              {banner.hidden ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
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
    if (!formData.image || !formData.display_order) {
      setFormError('All fields are required.');
      return;
    }
    try {
      await MakeRequest('/banners', 'POST', formData);
      setShowForm(false);
      setFormData({ image: '', display_order: '' });
      setImageFile(null);
      const data = await MakeRequest('/banners', 'GET');
      setBanners(data);
    } catch (error) {
      setFormError('Failed to add banner.');
    }
  };

  // Responsive layout and modal
  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <h1 className="text-2xl font-bold">Banner List</h1>
        <button
          className="px-4 py-2 rounded shadow font-semibold text-white bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415] hover:from-[#a81c1e] hover:to-[#a81c1e] transition-all duration-300 w-full md:w-auto"
          onClick={() => setShowForm(true)}
        >
          Add Banner
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-90 flex items-center justify-center z-50">
          <div className="backdrop-blur-lg bg-white/20 border border-[#7a1415] p-4 md:p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7a1415] via-[#7a1415] to-[#7a1415]">Add New Banner</h2>
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
                <img src={formData.image} alt="Preview" className="w-32 h-20 object-cover rounded-lg mx-auto border-2 border-[#7a1415]" />
              )}
              <input
                type="number"
                name="display_order"
                placeholder="Display Order"
                value={formData.display_order}
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