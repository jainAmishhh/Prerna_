export const fetchOpportunities = async () => {
  const res = await fetch("http://localhost:5000/api/opportunities");
  const data = await res.json();
  return data.data;
};
