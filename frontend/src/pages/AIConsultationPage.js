import React, { useState } from "react";

async function getAgriculturalInsight(topic, context = "") {
  try {
    const { OpenAI } = await import("https://esm.town/v/std/openai");
    const openai = new OpenAI();
    const response = await openai.chat.completions.create({
      messages: [{ 
        role: "user", 
        content: `Provide a detailed agricultural consultation about: ${topic}. 
                  Additional context: ${context}. 
                  Structure your response with:
                  1. Brief Overview
                  2. Key Recommendations
                  3. Potential Challenges` 
      }],
      model: "gpt-4o-mini",
      max_tokens: 300
    });
    return response.choices[0].message.content;
  } catch (error) {
    return "Unable to generate AI insight at the moment.";
  }
}

function AIConsultationPage({ navigateTo }) {
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConsultation = async () => {
    setLoading(true);
    const result = await getAgriculturalInsight(topic, context);
    setInsight(result);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-700">AI Consultation</h1>
      <p className="mt-4 text-gray-600">
        Get AI-driven insights to enhance your farming practices and optimize productivity.
      </p>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <textarea
          placeholder="Enter additional context (optional)"
          value={context}
          onChange={(e) => setContext(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        ></textarea>
        <button
          className="bg-green-700 text-white px-6 py-2 rounded w-full"
          onClick={handleConsultation}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Insight"}
        </button>
      </div>
      {insight && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold text-green-700">Insight</h2>
          <p className="mt-2 text-gray-700 whitespace-pre-wrap">{insight}</p>
        </div>
      )}
      <button
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
        onClick={() => navigateTo("home")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default AIConsultationPage;





// import React from "react";

// function AIconsultationPage({ navigateTo }) {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-green-700">AI Consultation</h1>
//       <p className="mt-4 text-gray-600">
//         Get AI-driven insights to enhance your farming practices and optimize productivity.
//       </p>
//       <button
//         className="mt-6 bg-green-700 text-white px-6 py-2 rounded"
//         onClick={() => navigateTo("home")}
//       >
//         Back to Home
//       </button>
//     </div>
//   );
// }

// export default AIconsultationPage;