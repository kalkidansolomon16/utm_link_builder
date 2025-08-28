import { useState } from "react";
import UTMForm from "./components/UTMForm";
import UTMOutput from "./components/UTMOutput";

export default function App() {
  const [finalUrl, setFinalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Generate UTM link from form inputs
  const generateUTM = ({ url, source, medium, campaign, term, content }) => {
    if (!url || !source || !medium || !campaign) {
      alert("Please fill in all required fields!");
      return;
    }

    let utm = `${url}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
    if (term) utm += `&utm_term=${term}`;
    if (content) utm += `&utm_content=${content}`;

    setFinalUrl(utm);
    setShortUrl(""); // reset short link when generating a new one
  };

  // Optional: Shorten link using CleanURI free API
  const shortenLink = async () => {
    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        body: new URLSearchParams({ url: finalUrl }),
      });
      const data = await response.json();
      if (data.result_url) {
        setShortUrl(data.result_url);
      } else {
        alert("Failed to shorten link");
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          UTM Link Builder
        </h1>
        <UTMForm onGenerate={generateUTM} />
        <UTMOutput finalUrl={finalUrl} shortUrl={shortUrl} onShorten={shortenLink} />
      </div>
    </div>
  );
}
