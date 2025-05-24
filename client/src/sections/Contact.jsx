import { useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // ✅ Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // ✅ Toastify CSS

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', form);

      if (response.status === 200) {
        toast.success('Thank you for your message 😃');
        setForm({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error("I didn't receive your message 😢");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


