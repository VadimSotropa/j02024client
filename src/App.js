import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';
import Footer from './components/Footer';
import UserAgreement from './components/UserAgreement';
import PrivacyPolicy from './components/Privacy';
import PictureWithText from './components/PictureWithText';
import picture from './image/headerimage.png';
import ScrollToTop from './components/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [comments, setComments] = useState([]);
  const [feedbackTypeFilter, setFeedbackTypeFilter] = useState('');
  const [feedbackCategoriesFilter, setFeedbackCategoriesFilter] = useState([]);

  // Fetch comments when filters change
  useEffect(() => {
    fetchComments();
  }, [feedbackTypeFilter, feedbackCategoriesFilter]);

  // Fetch comments from the server with optional filtering
  const fetchComments = async () => {
    try {
      const query = new URLSearchParams({
        feedbackType: feedbackTypeFilter,
        feedbackCategories: feedbackCategoriesFilter.join(','),
      });

      const response = await fetch(`${process.env.REACT_APP_API_URL}/comments?${query}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Failed to fetch comments', error);
    }
  };

  // Add a new comment to the database and refresh comments
  const addComment = async (commentData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${errorText}`);
      }

      const result = await response.json();
      console.log('Comment added:', result);

      // Refresh the comments list after adding a new comment
      fetchComments();
    } catch (error) {
      console.error('Error posting comment:', error);
      // Optionally, handle error (e.g., show an error message to the user)
    }
  };

  // Component to conditionally render footer
  const FooterWrapper = () => {
    const location = useLocation();
    const showFooter = location.pathname === '/';

    return (
      <>
        {showFooter && <Footer />}
      </>
    );
  };

  return (
    <Router>
       <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <PictureWithText
                imageUrl={picture} // Use the imported image here
                title="FEEDBACK PARIS 2024"
                subtitle1="Tell us about your impressions of the Olympic Games in Paris"
                subtitle2="Let journalists, politicians and organizers hear you"
              />
              <h2 className='opinion-header'>Your opinion matters</h2>
              <CommentForm addComment={addComment} />
              <div className='ligne-betwen'></div>
              <div>
                <h2 className='wall-header'>Feedback Wall</h2>
              </div>
              <CommentList
                comments={comments}
                feedbackTypeFilter={feedbackTypeFilter}
                setFeedbackTypeFilter={setFeedbackTypeFilter}
                feedbackCategoriesFilter={feedbackCategoriesFilter}
                setFeedbackCategoriesFilter={setFeedbackCategoriesFilter}
              />
              <FooterWrapper /> {/* Conditionally render Footer */}
            </>
          } />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <SpeedInsights/>
      <Analytics/>
    </Router>
  );
};

export default App;
