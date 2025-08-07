// // mockBackend.js

// const randomStarters = [
//   "Hello! How can I help you today?",
//   "What's on your mind?",
//   "Ask me anything — I'm listening.",
//   "Hey there! Ready to explore something?",
// ];



// export async function sendToBackend(input, options = {}) {
//   console.log("Sending to backend:", input, options);

//   const response = {
//     role: "assistant",
//     message: randomStarters[Math.floor(Math.random() * randomStarters.length)],
//     ...options,
//   };

//   return response;
// }



// mockBackend.js

const randomStarters = [
  "Hello! How can I help you today?",
  "What's on your mind?",
  "Ask me anything — I'm listening.",
  "Hey there! Ready to explore something?",
];

// Enhanced mock responses based on options
export async function sendToBackend(input, options = {}) {
  console.group("Sending to backend");
  console.log("User input:", input);
  console.log("Options:", options);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let responseMessage = randomStarters[Math.floor(Math.random() * randomStarters.length)];
  
  if (options.deepSeek) {
    responseMessage = `🔍 Deep Search: ${input}\nI've conducted a thorough search about "${input}" and found...`;
  }
  
  if (options.deeperSeek) {
    responseMessage = `🔎 Deeper Search: ${input}\nThis is an in-depth analysis of "${input}"...`;
  }
  
  if (options.isThinking) {
    responseMessage = `💭 Let me think about "${input}"...\nAfter careful consideration, here's what I think...`;
  }
  
  const response = {
    role: "assistant",
    message: responseMessage,
    timestamp: new Date().toISOString(),
    ...options,
  };

  console.log("Response:", response);
  console.groupEnd();
  
  return response;
}