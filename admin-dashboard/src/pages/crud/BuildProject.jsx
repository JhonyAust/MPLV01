import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { app } from '@/firebase';

const BuildProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    type: 'Residential',
    imageUrl: [],
    address: '',
    atAGlance: {
      projectName: '',
      architect: '',
      projectLocation: '',
      landSize: '',
      facing: '',
      frontRoad: '',
      numberOfApartments: '',
      apartmentSize: '',
      numberOfBasement: '',
      numberOfCarParking: ''
    },
    projectStatus: 'Planning',
    featuresAndAmenities: []
  });

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');
  const [error, setError] = useState('');
  const [showAtAGlance, setShowAtAGlance] = useState(false);  // Collapsible state
  const API_URL = import.meta.env.VITE_API_URL;

  const storeImage = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => reject(error),
        () => getDownloadURL(uploadTask.snapshot.ref).then(resolve).catch(reject)
      );
    });
  };

  const handleImageSubmit = async () => {
    if (files.length > 0) {
      setUploading(true);
      setImageUploadError('');

      if (files.length + formData.imageUrl.length > 5) {
        setImageUploadError('You can only upload up to 5 images');
        setUploading(false);
        return;
      }

      try {
        const uploadPromises = Array.from(files).map((file) => storeImage(file));
        const urls = await Promise.all(uploadPromises);

        setFormData((prevFormData) => ({
          ...prevFormData,
          imageUrl: prevFormData.imageUrl.concat(urls),
        }));
        setUploading(false);
      } catch (err) {
        setImageUploadError('Image upload failed (2 MB max per image)');
        setUploading(false);
      }
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [id]: checked });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleNestedChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      atAGlance: { ...prevFormData.atAGlance, [id]: value },
    }));
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/project/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status !== 201) {
        setError(data.message || 'Error creating project');
      } else {
        console.log('Project created successfully');
      }
    } catch (error) {
      setError('Failed to create project');
    }
  };

  return (
    <div className="p-3 mt-14 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold my-7">Create a New Project</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* General Form Fields */}
        <input
          type="text"
          placeholder="Title"
          className="border p-3 rounded-lg"
          id="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded-lg"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="border p-3 rounded-lg"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <select
          id="type"
          className="border p-3 rounded-lg"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Mixed Use">Mixed Use</option>
        </select>

        {/* Collapsible At a Glance Section */}
        <div>
          <button
            type="button"
            className="px-4 py-2 bg-[#393939] text-white text-sm rounded-lg mb-2"
            onClick={() => setShowAtAGlance(!showAtAGlance)}
          >
            {showAtAGlance ? 'Hide' : 'Show'} At a Glance (Optional)
          </button>

          {showAtAGlance && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* Project Name and Architect */}
              <input
                type="text"
                placeholder="Project Name"
                className="border p-3 rounded-lg"
                id="projectName"
                value={formData.atAGlance.projectName}
                onChange={handleNestedChange}
              />
              <input
                type="text"
                placeholder="Architect"
                className="border p-3 rounded-lg"
                id="architect"
                value={formData.atAGlance.architect}
                onChange={handleNestedChange}
              />

              {/* Project Location and Land Size */}
              <input
                type="text"
                placeholder="Project Location"
                className="border p-3 rounded-lg"
                id="projectLocation"
                value={formData.atAGlance.projectLocation}
                onChange={handleNestedChange}
              />
              <input
                type="text"
                placeholder="Land Size"
                className="border p-3 rounded-lg"
                id="landSize"
                value={formData.atAGlance.landSize}
                onChange={handleNestedChange}
              />

              {/* Facing (Dropdown) */}
              <select
                id="facing"
                className="border p-3 rounded-lg"
                value={formData.atAGlance.facing}
                onChange={handleNestedChange}
              >
                <option value="">Select Facing</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
              </select>

              {/* Front Road and Number of Apartments */}
              <input
                type="text"
                placeholder="Front Road (Feet)"
                className="border p-3 rounded-lg"
                id="frontRoad"
                value={formData.atAGlance.frontRoad}
                onChange={handleNestedChange}
              />
              <input
                type="number"
                placeholder="Number of Apartments"
                className="border p-3 rounded-lg"
                id="numberOfApartments"
                value={formData.atAGlance.numberOfApartments}
                onChange={handleNestedChange}
              />

              {/* Apartment Size and Number of Basements */}
              <input
                type="text"
                placeholder="Apartment Size"
                className="border p-3 rounded-lg"
                id="apartmentSize"
                value={formData.atAGlance.apartmentSize}
                onChange={handleNestedChange}
              />
              <input
                type="number"
                placeholder="Number of Basement"
                className="border p-3 rounded-lg"
                id="numberOfBasement"
                value={formData.atAGlance.numberOfBasement}
                onChange={handleNestedChange}
              />

              {/* Number of Car Parking (Dropdown) */}
              <select
                id="numberOfCarParking"
                className="border p-3 rounded-lg"
                value={formData.atAGlance.numberOfCarParking}
                onChange={handleNestedChange}
              >
                <option value="">Select Car Parking</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          )}
        </div>

        {/* Project Status */}
        <select
          id="projectStatus"
          className="border p-3 rounded-lg"
          value={formData.projectStatus}
          onChange={handleChange}
        >
          <option value="Planning">Planning</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <textarea
          placeholder="Features and Amenities (comma separated)"
          className="border p-3 rounded-lg"
          id="featuresAndAmenities"
          value={formData.featuresAndAmenities.join(', ')}
          onChange={(e) =>
            setFormData({
              ...formData,
              featuresAndAmenities: e.target.value.split(',').map((item) => item.trim()),
            })
          }
        />

        {/* File Input for Image Upload */}
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <button
          type="button"
          disabled={uploading}
          onClick={handleImageSubmit}
          className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80"
        >
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
        <p className="text-red-700 text-sm">{imageUploadError}</p>

        {formData.imageUrl.length > 0 &&
          formData.imageUrl.map((url) => (
            <div key={url} className="flex justify-between p-3 border items-center">
              <img src={url} alt="project image" className="w-20 h-20 object-contain rounded-lg" />
            </div>
          ))}

        <button
          type="submit"
          className="p-3 bg-slate-700 text-white bg-green-400 rounded-lg uppercase hover:opacity-95"
        >
          Create Project
        </button>
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default BuildProject;
