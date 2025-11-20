import Opportunity from "../models/opportunity.model.js";

export const getAllOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.status(200).json({ success: true, data: opportunities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
