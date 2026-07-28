export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbycWA6vMg4mB6jj-kDPq2oEFU1aqapfRPTEmsAIulJfZrxqk3d6o6Up5J5vbiGQfRoz/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      }
    )

    const text = await response.text()

    return res.status(200).send(text)

  } catch (err) {
    return res.status(500).json({ error: 'erro ao enviar' })
  }
}