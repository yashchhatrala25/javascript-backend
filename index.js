require("dotenv").config();
const express = require("express");

const app = express();

const githubData = {
  login: "yash2500",
  id: 67836361,
  node_id: "MDQ6VXNlcjY3ODM2MzYx",
  avatar_url: "https://avatars.githubusercontent.com/u/67836361?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/yash2500",
  html_url: "https://github.com/yash2500",
  followers_url: "https://api.github.com/users/yash2500/followers",
  following_url: "https://api.github.com/users/yash2500/following{/other_user}",
  gists_url: "https://api.github.com/users/yash2500/gists{/gist_id}",
  starred_url: "https://api.github.com/users/yash2500/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/yash2500/subscriptions",
  organizations_url: "https://api.github.com/users/yash2500/orgs",
  repos_url: "https://api.github.com/users/yash2500/repos",
  events_url: "https://api.github.com/users/yash2500/events{/privacy}",
  received_events_url: "https://api.github.com/users/yash2500/received_events",
  type: "User",
  site_admin: false,
  name: "Yash",
  company: "Student",
  blog: "https://in.linkedin.com/in/yashchhatrala",
  location: "Gujarat",
  email: null,
  hireable: null,
  bio: "I am studying Information Technology.\r\nI like a programming language, like ReactJs, HTML, CSS, JS, and I have also got some language certificates.",
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 1,
  following: 0,
  created_at: "2020-07-04T16:30:35Z",
  updated_at: "2024-01-27T13:07:10Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter Page!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page!</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube Page!</h2>");
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
