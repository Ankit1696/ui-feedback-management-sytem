import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');

  const [screenshotUrl, setScreenshotUrl] = useState('url');
  const [submitterName, setSubmitterName] = useState('name');
  const [submitterEmail, setSubmitterEmail] = useState('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = { title, description, like, dislike };

    try {
      await axios.post('http://localhost:8080/feedback/save', newFeedback);
      console.log('Feedback submitted successfully');
      setTitle('');
      setDescription('');

      setLike(false);
      setDislike(false);
      setScreenshotUrl('url');
        setSubmitterEmail('email');
        setSubmitterName('meeß')
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <h2>Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        </div>
        <div>
        <label>Screeshot:</label>
        <input
          type="text"
          value={screenshotUrl}
          onChange={(e) => setScreenshotUrl(e.target.value)}
          required
        />
        </div>
        <div>
        <label>Name:</label>
        <input
          type="text"
          value={submitterName}
          onChange={(e) => {
            setSubmitterName(e.target.value)
        }}
          required
        />
        </div>
        <div>
        <label>Email:</label>
        <input
          type="text"
          value={submitterEmail}
          onChange={(e) => setSubmitterEmail(e.target.value)}
          required
        />
        </div>
    
       <div>
       <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
       </div>
        <label>
            <input
              type="radio"
              name="feedbackType"
              value="like"
              checked={feedbackType === 'like'}
              onChange={() => setFeedbackType('like')}
            />
            Like
          </label>
          <label>
            <input
              type="radio"
              name="feedbackType"
              value="dislike"
              checked={feedbackType === 'dislike'}
              onChange={() => setFeedbackType('dislike')}
            />
            Dislike
          
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
