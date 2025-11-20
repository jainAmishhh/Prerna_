import HealthProgram from "../models/healthProgram.models.js";

export const getHealthPrograms = async (req, res) => {
  try {
    const programs = await HealthProgram.find({}); // fetch all

    console.log("Fetched Programs:", programs.length);

    res.status(200).json({
      success: true,
      data: programs,
    });

  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// oppourtunities 
// schemes 
// scholarship
// sports
// motivation
// healt care
