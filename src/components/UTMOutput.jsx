export default function UTMOutput({ finalUrl, shortUrl, onShorten,onClose  }) {
  if (!finalUrl) return null;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
const modal = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 50,
};

  return (
    <div style={modal}  className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
    <div className="mt-6 p-4 bg-gray-100 rounded-lg border w-1/3">
    <button
  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
  onClick={onClose}
>
  &times;
</button>
      <h3 className="font-semibold text-gray-700 mb-2">Generated UTM Link:</h3>
      <p className="text-blue-600 break-words">{finalUrl}</p>
      <button
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={() => copyToClipboard(finalUrl)}
      >
        Copy Link
      </button>

      <div className="mt-4">
        {/* <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
          onClick={onShorten}
        >
          Shorten Link
        </button> */}
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
    </div>
  );
}
