// /api/lti.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Si la petición es POST, la conexión es exitosa.
    // Redirigimos a una página de prueba.
    console.log('¡Petición POST recibida desde Moodle!');
    res.redirect(302, '/lti-success');
  } else {
    // Si es GET u otro método, lo rechazamos.
    res.status(405).send('Método no permitido');
  }
}