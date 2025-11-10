export default async function handler(req, res) {
  const { appName, device, key } = req.query;

  const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${appName}/${device}/la`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-M2M-Origin': key,
        'Accept': 'application/json',
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}
