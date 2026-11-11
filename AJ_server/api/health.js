module.exports = function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    return res.status(405).json({ status: "error", error: "Method not allowed." });
  }
  return res.status(200).json({ status: "ok", service: "Ask Aron AI Backend" });
};
