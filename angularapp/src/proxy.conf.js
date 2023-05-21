const PROXY_CONFIG = [
  {
    context: [
      "/dipendente",
      "/authentication",
    ],
    target: "https://localhost:7157",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
