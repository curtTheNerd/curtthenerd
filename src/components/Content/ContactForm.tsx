import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const CONTACTFORM_KEY = import.meta.env.VITE_CONTACT_FORM;

  const onChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("...Sending");
    const payload = {
      access_key: CONTACTFORM_KEY,
      ...data,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.status === 200 && json.success) {
        setStatus("Success! Thanks for your message.");
        setData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Oops … We encountered a problem.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error while sending.");
    }
  };

  return (
    <div className="w-full mx-auto">
      <p className="w-full text-center text-[1.4rem] pt-12">
        Write me a message!
      </p>
      <div className="w-full max-w-[640px] mx-auto mt-12 p-8 mb-20 bg-gray-50 rounded-md ring-1 ring-gray-200">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col mb-4">
            <p className="text-md font-semibold pb-6">
              {/* formerly "Name" and (required)*/}
              <span className="font-normal text-sm"></span>
            </p>
            <div id="name" className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-semibold text-[var(--textColor)]">
                  First Name <span className="font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={onChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="">
                <label className="block mb-1 text-sm font-semibold text-[var(--textColor)]">
                  Last Name <span className="font-normal">(required)</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={onChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 mt-4 text-sm font-semibold text-[var(--textColor)]">
                Email <span className="font-normal">(required)</span>
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={onChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="mb-4 pt-4">
            <label className="block mb-1 text-sm text-[var(--textColor)] font-semibold">
              Subject <span className="font-normal"></span>
            </label>
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={onChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm text-[var(--textColor)] font-semibold">
              Message <span className="font-normal">(required)</span>
            </label>
            <textarea
              name="message"
              value={data.message}
              onChange={onChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-[160px] right-4 py-3 text-white bg-gray-700 rounded hover:bg-gray-900 transition"
          >
            Submit
          </button>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}
