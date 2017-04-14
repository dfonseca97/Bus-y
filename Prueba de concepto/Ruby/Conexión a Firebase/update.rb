#!usr/bin/env ruby

require 'firebase'


uri = 'https://prueba-2a1c3.firebaseio.com/'

firebase = Firebase::Client.new(uri)

firebase.update('https://prueba-2a1c3.firebaseio.com/prueba/-Kg1c7RiViMz1XTTnA_F/' , {:numero => '4'})


