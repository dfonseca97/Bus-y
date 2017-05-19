#! usr/bin/env ruby

require 'firebase'
require 'httpclient'
require 'json'

# Accede a la base de datos con la información proporcionada desde la aplicación, en este caso la parada a ser calificada.
# Luego le suma la cantidad de estrellas asignadas a las estrellas totales de la parada y le suma uno al contador de las calificaciones.
# Toda esa información será útil luego para el cálculo de las estrellas promedio de una parada. 
#
# @param parada [String] la parada a calificar
# @param estrellas [Integer] cantidad de estrellas asignadas a la parada
def agregar_calificacion(parada, estrellas)
   
   # URI de la base de datos del proyecto en Firebase.
   uri = 'https://prueba-2a1c3.firebaseio.com/'
   firebase = Firebase::Client.new(uri)


   # Recupera la cantidad total acumulada de estrellas actualmente de la parada solicitda y convierte este dato a Integer.
   calificacion_actual = Integer(firebase.get('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada + '/suma_estrellas').response.content)

   # Suma la cantidad de estrellas asignadas a la parada.
   estrellas = Integer(estrellas)
   calificacion_actual += estrellas

   # Actualiza la base de datos con la nueva suma de estrellas.
   firebase.update('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada, {:suma_estrellas => calificacion_actual})

   # Recupera la cantidad de veces que ha sido calificada la parada.
   numero_calificaciones = Integer(firebase.get('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada + '/calificaciones').response.content)
   
   # Aumenta en 1 la cantidad de calificaciones.
   numero_calificaciones += 1

   # Actualiza la base de datos con la nueva cantidad de calificaciones de la parada. 
   firebase.update('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada, {:calificaciones => numero_calificaciones})

end
