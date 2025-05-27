export default async function handler(req, res) {
  const response = await fetch("https://identity.passkit.io/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      client_id: "4E5tdObW30jEiZdyFs9fL9uA",
      client_secret: "47RCjidzZPlzOkMnvd6vv3osWvUbCGXtEapcB0pO",
      grant_type: "client_credentials",
      scope: "api"
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(response.status).json({ error: data });
  }

  return res.status(200).json(data);
}
