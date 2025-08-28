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
//   const backgroundStyle = {
    
//     background: 'linear-gradient(to right,#c0eae9, #eeeee4)',
    
//   };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };
 

const fields = [
  { name: "url", placeholder: "Website URL *" },
  { name: "source", placeholder: "Campaign Source *" },
  { name: "medium", placeholder: "Campaign Medium *" },
  { name: "campaign", placeholder: "Campaign Name *" },
  { name: "term", placeholder: "Campaign Term (optional)" },
  { name: "content", placeholder: "Campaign Content (optional)" },
];
const fieldPairs = [];
for (let i = 0; i < fields.length; i += 2) {
  fieldPairs.push(fields.slice(i, i + 2));
}
  return (
 <form onSubmit={handleSubmit} className="space-y-4 form">
  {fieldPairs.map((pair, i) => (
    <div key={i} className="flex gap-4">
      {pair.map((field) => (
        <input
          key={field.name}
          name={field.name}
          value={form[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="w-full p-2 bg-white rounded-lg  focus:ring-2 focus:ring-blue-300 outline-none"
          required={field.placeholder.includes("*")}
        />
      ))}
    </div>
  ))}

  <button

    type="submit"
    className=" lg:w-1/2 lg:ml-30 mt-5 mx-auto border border-green-300  text-black py-3 rounded-lg bg-gradient-to-r from-[#c0eae9] to-[#eeeee4] hover:from-[#eeeee4] hover:to-[#c0eae9]  duration-300  shadow-2xl cursor-pointer transition"
  >
    Generate UTM Link
  </button>
</form>

  );
}
