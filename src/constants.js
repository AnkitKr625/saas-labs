export const PROJECTS_API_URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

export const TABLE_COLUMNS = [
  {
    name: "S. No.",
    key: "s.no",
    customElement: function(row, key) {
      return row[key] + 1;
    }
  },
  {
    name: "Amount Pledged",
    key: "amt.pledged",
  },
  {
    name: "Percentage Funded",
    key: "percentage.funded",
  },
];
