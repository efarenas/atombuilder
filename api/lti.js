// /api/lti.js

import LTI from 'ims-lti';

export default function handler(req, res) {
  // LTI envía los datos en un POST
  if (req.method !== 'POST') {
    return res.status(405).send('Método no permitido');
  }

  // Lee las claves desde las Variables de Entorno de Vercel (¡muy importante!)
  const consumerKey = process.env.LTI_KEY;
  const consumerSecret = process.env.LTI_SECRET;

  // Crea el proveedor LTI
  const provider = new LTI.Provider(consumerKey, consumerSecret);

  // Valida la petición que viene de Moodle
  provider.valid_request(req, (err, isValid) => {
    if (err || !isValid) {
      console.error('Error en la validación LTI:', err);
      return res.status(401).send('Petición LTI inválida.');
    }

    // ¡Éxito! La petición es válida y viene de Moodle.
    // provider.body contiene la información del usuario de Moodle
    console.log('Usuario LTI autenticado:', provider.body);
    const userEmail = provider.body.lis_person_contact_email_primary;
    const userName = provider.body.lis_person_name_full;
    
    // Aquí es donde "disponibilizas" tu app.
    // Una forma simple es redirigir a la página principal pasando
    // los datos del usuario como parámetros de consulta (query params).
    // NOTA: Para producción real, es mejor usar un token (JWT).
    const redirectUrl = `/?email=${encodeURIComponent(userEmail)}&name=${encodeURIComponent(userName)}`;
    
    res.redirect(302, redirectUrl);
  });
}