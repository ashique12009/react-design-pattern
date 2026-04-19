import logo from './logo.svg';
import './App.css';
import FeedbackForm from './messy/FeedbackForm';
import ControlledFeedbackForm from './controlled/ControlledFeedbackForm';
import ContactForm from './controlled/ContactForm';

function App() {
  return (
    <div className="App">
      {/* <FeedbackForm /> */}
      <ControlledFeedbackForm />
      <ContactForm />
    </div>
  );
}

export default App;
