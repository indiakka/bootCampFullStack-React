const API_URL = "https://veterinaria-backend-ebon.vercel.app/";

export const listarEntidad = async({ entidad = 'mascotas'}) => {
    try
    {
      const respuesta = await fetch (`${API_URL}/${entidad}`)
        const datos = await respuesta.json()
        return datos
    } catch ( error )
    {
        
  }
}; // la entidad va a ir a nuestra API en Vercel
