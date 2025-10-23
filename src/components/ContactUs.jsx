import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Auto-hide success message after 6 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_7yxcimf",
        "template_imsamos",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "eFFEH1iQfI23X1V48"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          alert("Failed to send message. Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,40,255,0.15),_transparent_70%)]"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Let’s Connect
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Ready to take the next step? Automate with us today.— we’ll reply
          soon.
        </p>

        <div className="backdrop-blur-lg bg-white/10 border border-white/10 p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-blue-500/20">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label className="block text-gray-300 mb-2 font-medium">
                Buisness Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Creative Solutions LLC"
                className="w-full bg-slate-900/70 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && (
                <p className="text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="text-left">
              <label className="block text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-slate-900/70 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && (
                <p className="text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div className="text-left">
              <label className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full bg-slate-900/70 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

            {success && (
              <p className="text-green-400 mt-4 text-center animate-fade-in">
                ✅ Message sent! We’ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
