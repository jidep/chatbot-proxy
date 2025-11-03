export default async function handler(req, res) {
  const response = await fetch("https://s4n.srv1905779.htstr.cloud/webhook/chat-corruption", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.text();
  res.setHeader("Access-Control-Allow-Origin", "https://225stopcorruption.org");
  res.setHeader("Content-Type", "application/json");
  res.status(response.status).send(data);
}
