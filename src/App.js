import logo from './logo.svg';
import './App.css';
import FeedbackList from './comp/Feedback';
import FeedbackForm from './comp/FeedbackForm';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Feedback Management System</h1>
      <FeedbackList />
      <FeedbackForm />
    </div>
    </div>
  );
}

export default App;
