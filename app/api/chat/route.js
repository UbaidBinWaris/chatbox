// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { message } = await req.json();

//   try {
//     const response = await fetch("https://grok.x.ai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.GROK_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "grok-1", // Change this if needed
//         messages: [{ role: "user", content: message }],
//       }),
//     });

//     const data = await response.json();
//     console.log("✅ Full Grok Response:", data);

//     // Check the exact structure before accessing it
//     const reply = data?.choices?.[0]?.message?.content || "No reply found.";

//     return NextResponse.json({ reply });
//   } catch (err) {
//     console.error("❌ Error from Grok API:", err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }




// app/api/chat/route.js
export async function POST(req) {
  const body = await req.json();
  const userMessage = body.message;

  const randomResponses = [
    "Sure, I can help with that!",
    "Let me think...",
    "Here's something interesting!",
    "That's a great question.",
    "Hmm... I need to look it up.",
    "Try asking in a different way!",
  ];

  const randomIndex = Math.floor(Math.random() * randomResponses.length);
  const responseText = randomResponses[randomIndex];

  return Response.json({ response: responseText });
}
