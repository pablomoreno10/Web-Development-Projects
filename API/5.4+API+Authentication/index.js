import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "pablo";
const yourPassword = "hello";
const yourAPIKey = "08635a46-ce88-431f-95b5-c621fb2fd639";
const yourBearerToken = "4a0e9e98-ecbe-4110-ba1b-2c95329b779c";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}random`);
    res.render("index", { content: JSON.stringify(response.data) });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}filter`, {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}secrets/42`, {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    res.render("index", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});