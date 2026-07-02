import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function generateItinerary(destination, days, interests) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Act as an expert travel planner. Create a detailed, day-by-day travel itinerary for a ${days}-day trip to ${destination}.
      The traveler's main interests are: ${interests}.
      
      Please format the response in clean Markdown with the following structure:
      - A brief introductory paragraph about the destination.
      - A day-by-day breakdown (e.g., "### Day 1: [Theme]"). For each day, include a Morning, Afternoon, and Evening activity.
      - Include practical travel tips for the destination at the end.
      
      Make the itinerary realistic, engaging, and well-paced. Do not include introductory/outro chat filler, just output the markdown.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw new Error("Failed to generate itinerary. Please try again.");
  }
}
