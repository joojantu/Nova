import { useState } from "react";

function App() {
  const [request, setRequest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1 space-y-4">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="mt-2 space-y-2">
            <li><button className="text-left w-full">Dashboard</button></li>
            <li><button className="text-left w-full">My Requests</button></li>
            <li><button className="text-left w-full">Track Orders</button></li>
            <li><button className="text-left w-full">Support</button></li>
          </ul>
        </div>
      </div>

      <div className="col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-bold mb-4">AI Chat Assistant</h2>
          <div className="bg-gray-100 p-4 rounded-md text-sm">
            👋 Hi! What would you like to purchase today?
          </div>
          {!submitted ? (
            <div className="mt-4 space-y-4">
              <textarea
                placeholder="Describe your need (e.g. 'I need a microphone for podcasting')"
                className="w-full p-2 border rounded"
                value={request}
                onChange={(e) => setRequest(e.target.value)}
              />
              <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit Request</button>
            </div>
          ) : (
            <div className="mt-4 text-green-600">✅ Request submitted. Our Buying Desk agent is sourcing options.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
