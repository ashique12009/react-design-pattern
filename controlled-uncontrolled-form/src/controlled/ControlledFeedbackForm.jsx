import React, { useRef, useState } from "react";

const ControlledFeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email.includes("@")) {
      emailRef.current.focus();
      return;
    }
    if (!form.message) {
      messageRef.current.focus();
      return;
    }
    
    console.log("Form submitted:", form);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        className="border rounded-2xl p-2 my-3"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
        ref={nameRef}
        placeholder="Name"
      />
      <input
        className="border rounded-2xl p-2 my-3"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        className="border rounded-2xl p-2 my-3"
        name="message"
        value={form.message}
        onChange={handleChange}
        ref={messageRef}
        placeholder="Your message"
      />
      <button className="bg-purple-500 text-white p-1 rounded" type="submit">
        Send Feedback
      </button>
    </form>
  );
};

export default ControlledFeedbackForm;
