import React,{useEffect,useState} from 'react'
import axios from 'axios';

const FeedbackList = () => {

    const [feedbacks, setFeedbacks]=useState([]);

    useEffect(()=>{
        fetchFeedbacks();
    }, []);
    
    const fetchFeedbacks = async (id) =>{
        try{
            await axios.get("/feedback")
        }
        catch(error){
            console.error("Error fetching feedback", error);
        }
    }

    const deleteFeedback = async (id) => {
        try {
          await axios.delete(`/feedback/${id}`);
          fetchFeedbacks();
          console.log('Feedback deleted successfully');
        } catch (error) {
          console.error('Error deleting feedback:', error);
        }
      };
    

      return (
        <div>
          <h2>Feedback List</h2>
          {feedbacks.map((feedback) => (
            <div key={feedback.id}>
              <h4>{feedback.title}</h4>
              <p>{feedback.description}</p>
              <button onClick={() => deleteFeedback(feedback.id)}>Delete</button>
            </div>
          ))}
        </div>
      );
}

export default FeedbackList