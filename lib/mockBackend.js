export async function sendToBackend(input, options = {}) {
  console.log("Sending to backend:", input, options); // ✅ This now includes documents/images
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        role: "assistant",
        message: `Echo: ${input}`,
        ...options,
      });
    }, 1000);
  });
}
