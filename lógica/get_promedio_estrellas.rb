#! usr/bin/env ruby

require 'firebase'
require 'httpclient'
require 'json'

# Accede a la base de datos con la información proporcionada desde la aplicación, en este caso la parada de la cual se desea saber la cantidad
# promedio de estrellas. Recuperando la suma total de estrellas y la cantidad de veces que ha sido calificada y con estos datos se logra sacar el promedio.
#
# @param parada [String] la parada a calcular el promedio de estrellas
# @return [Integer] Promedio de estrellas de la parada.
def calcular_promedio_calificacion(parada)
   
   # URI de la base de datos del proyecto en Firebase.
   uri = 'https://prueba-2a1c3.firebaseio.com/'
   firebase = Firebase::Client.new(uri)

   # Recupera la cantidad total acumulada de estrellas actualmente de la parada solicitda y convierte este dato a Integer.
   calificacion_actual = Integer(firebase.get('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada + '/suma_estrellas').response.content)

   # Recupera la cantidad de veces que ha sido calificada la parada.
   numero_calificaciones = Integer(firebase.get('https://prueba-2a1c3.firebaseio.com/Paradas/' + parada + '/calificaciones').response.content)

   # Calcula el promedio
   calificacion_actual/numero_calificaciones

end

parada = gets.chomp

puts calcular_promedio_calificacion(parada)