import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface User {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [user, setUser] = useState<User>({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, message } = user;

    // Form validation
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://getform.io/f/014c7187-b8e7-405c-9ddd-21ac63fe7610",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, message }),
        },
      );

      if (!res.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setUser({ fullName: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:p-20 py-7 px-2">
      <form
        onSubmit={handleSubmit}
        data-aos="fade-left"
        className="w-full text-left dark:text-black mx-auto space-y-6"
      >
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 dark:text-gray-200 font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-[#00ADB5] focus:ring-[#00ADB5] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-200 font-semibold"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-[#00ADB5] focus:ring-[#00ADB5] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-200 font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={user.message}
            onChange={handleChange}
            rows={5}
            placeholder="Enter your message"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 resize-none focus:border-[#00ADB5] focus:ring-[#00ADB5] focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#00ADB5] hover:bg-[rgb(143,195,231)]"
          } transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#00ADB5]`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
