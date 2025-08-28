import { useState } from "react";

export default function UTMForm({ onGenerate }) {
  const [form, setForm] = useState({
    url: "",
    source: "",
    medium: "",
    campaign: "",
    term: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {[
        { name: "url", placeholder: "Website URL *" },
        { name: "source", placeholder: "Campaign Source *" },
        { name: "medium", placeholder: "Campaign Medium *" },
        { name: "campaign", placeholder: "Campaign Name *" },
        { name: "term", placeholder: "Campaign Term (optional)" },
        { name: "content", placeholder: "Campaign Content (optional)" },
      ].map((field) => (
        <input
          key={field.name}
          name={field.name}
          value={form[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          required={field.placeholder.includes("*")}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Generate UTM Link
      </button>
    </form>
  );
}
