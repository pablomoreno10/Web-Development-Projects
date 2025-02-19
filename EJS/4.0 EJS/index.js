import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Set EJS as the view engine

app.get("/", (req, res) => {
  const date = new Date(); // Current date and time
  const dayOfWeek = date.getDay();
  // Output will be a number between 0 and 6
  let type = "a weekday"; // Default value for dayType
  let adv = "it's time to work hard"; // Default value for advice

  if (dayOfWeek === 0 || dayOfWeek === 6) { 
    type = "a weekend";
    adv = "you can rest"
  }// If it's Saturday or Sunday (0 or 6)

  res.render("index.ejs", 
    {dayType: type,
    advice: adv});
    // This will render the index.ejs file in the views folder
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});