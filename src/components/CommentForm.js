// client/src/components/CommentForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style.css';

const CommentForm = ({ addComment }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [comment, setComment] = useState('');
  const [feedbackType, setFeedbackType] = useState('Thanks');
  const [feedbackCategories, setFeedbackCategories] = useState([]);

  const feedbackTypes = ['Complaints', 'Suggestions', 'Thanks'];
  const feedbackCategoriesOptions = [
    'Organization',
    'Transportation',
    'Venues',
    'Matches',
    'Olympic Village',
    'Entertainment',
    'Accommodation',
    'Food/Drinks',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !country || !comment) {
      alert('Please fill out all fields');
      return;
    }

    // Validate that feedbackCategories contains only valid values
    const validCategories = feedbackCategoriesOptions.filter((category) =>
      feedbackCategories.includes(category)
    );

    try {
      await addComment({
        name,
        country,
        comment,
        feedbackType,
        feedbackCategories: validCategories, // Ensure only valid categories are sent
      });
      // Clear form after successful submission
      setName('');
      setCountry('');
      setComment('');
      setFeedbackType('Thanks');
      setFeedbackCategories([]);
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to submit comment');
    }
  };

  const handleCategoryChange = (category) => {
    setFeedbackCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="type-category">
        <p>Select the type of your feedback:</p>
      </div>
      <div className="feedback-type">
        {feedbackTypes.map((type) => (
          <label key={type} className="radio-label">
            <input
              type="radio"
              name="feedbackType"
              value={type}
              checked={feedbackType === type}
              onChange={(e) => setFeedbackType(e.target.value)}
              aria-label={`Feedback type: ${type}`}
            />
            {type}
          </label>
        ))}
      </div>
      <div className="type-category">
        <p>Select the topic of your feedback:</p>
      </div>
      <div className="feedback-categories">
        {feedbackCategoriesOptions.map((category) => (
          <label key={category} className='feedback-categories-label'>
            <input
              type="checkbox"
              value={category}
              checked={feedbackCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              aria-label={`Feedback category: ${category}`}
            />
            {category}
          </label>
        ))}
      </div>
      <div className="form-input-container">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
      </div>
      <div className='submit-term'>
        <p>By submitting your comment, you agree to our <Link cla to="/user-agreement">User Agreement and Privacy Policy</Link></p>
      </div>
      <button type="submit" className='btn-submit'><p>Submit Comment</p></button>
    </form>
  );
};

export default CommentForm;
