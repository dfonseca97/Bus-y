require 'sinatra'
require 'json'
require_relative 'get_tiempo_demora.rb'
require_relative 'get_promedio_estrellas'
require_relative 'agregar_calificacion'

get '/tiempo' do
	get_tiempo_demora(params[:parada], params[:bus])
end

get '/paradas/promedio' do
	calcular_promedio_calificacion(params[:parada])
end

get '/paradas/calificar' do
	agregar_calificacion(params[:parada], params[:estrellas])
end
