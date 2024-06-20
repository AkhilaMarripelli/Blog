import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    selectedCourse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Admission form submitted successfully!');
        // Optionally, you can redirect the user or show a success message
      } else {
        console.error('Failed to submit admission form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Select Course:
        <select
          name="selectedCourse"
          value={formData.selectedCourse}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Engineering">Engineering</option>
          <option value="Mathematics">Mathematics</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
