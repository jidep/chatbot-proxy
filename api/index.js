export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const response = await fetch("https://n8n.srv1905779.htstr.cloud/webhook/chat-corruption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.text();
    res.setHeader("Access-Control-Allow-Origin", "https://225stopcorruption.org");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).send("Erreur proxy : " + error.message);
  }
}
