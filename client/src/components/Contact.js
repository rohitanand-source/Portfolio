import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
          const data = await res.json();
          console.log("Response:", data);
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log("Error:", err);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* ✅ Success Message */}
        {status === "success" && (
          <p className="success-msg">✅ Message sent successfully!</p>
        )}

        {/* ❌ Error Message */}
        {status === "error" && (
          <p className="error-msg">❌ Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;