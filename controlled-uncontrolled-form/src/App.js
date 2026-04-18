import logo from './logo.svg';
import './App.css';
import FeedbackForm from './messy/FeedbackForm';
import ControlledFeedbackForm from './controlled/ControlledFeedbackForm';

function App() {
  return (
    <div className="App">
      {/* <FeedbackForm /> */}
      <ControlledFeedbackForm />
    </div>
  );
}

export default App;
