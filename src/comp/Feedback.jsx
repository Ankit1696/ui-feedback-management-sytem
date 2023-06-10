import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './css/feedback.css'

const FeedbackList = () => {

    const [feedbacks, setFeedbacks]=useState([]);

    useEffect(()=>{
        fetchFeedbacks();
    }, []);
    
    const fetchFeedbacks = () =>{
        try{
            return  axios.get("http://localhost:8080/feedback/all").then((fedback)=> setFeedbacks(fedback.data))
        }
        catch(error){
            console.error("Error fetching feedback", error);
        }
    }

    const deleteFeedback = async (id) => {
        try {
          await axios.delete(`/feedback/delete/${id}`);
          fetchFeedbacks();
          console.log('Feedback deleted successfully');
        } catch (error) {
          console.error('Error deleting feedback:', error);
        }
      };
    

      return (
        <div>
          

          <div className='main-table'>
            <table >
            <tr>
              <th>Title</th>
              <th>Descriptions</th>
            </tr>
              
            {feedbacks.map((val, key,count) => {
              count+=1
                    return (
                        <tr key={key}>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                        </tr>
                    )
                })}
            
            </table>
          </div>
        </div>
      );
}

export default FeedbackList