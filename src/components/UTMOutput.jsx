export default function UTMOutput({ finalUrl, shortUrl, onShorten }) {
  if (!finalUrl) return null;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg border">
      <h3 className="font-semibold text-gray-700 mb-2">Generated UTM Link:</h3>
      <p className="text-blue-600 break-words">{finalUrl}</p>
      <button
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={() => copyToClipboard(finalUrl)}
      >
        Copy Link
      </button>

      <div className="mt-4">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={onShorten}
        >
          Shorten Link
        </button>
      </div>

      {shortUrl && (
        <div className="mt-4 p-3 bg-white border rounded-lg">
          <h4 className="font-medium text-gray-700">Shortened Link:</h4>
          <p className="text-blue-500 break-words">{shortUrl}</p>
          <button
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            onClick={() => copyToClipboard(shortUrl)}
          >
            Copy Short Link
          </button>
        </div>
      )}
    </div>
  );
}
