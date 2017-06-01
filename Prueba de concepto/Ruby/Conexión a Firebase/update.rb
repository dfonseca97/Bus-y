#!usr/bin/env ruby

require 'firebase'


uri = 'https://prueba-2a1c3.firebaseio.com/'

firebase = Firebase::Client.new(uri)

firebase.update('https://prueba-2a1c3.firebaseio.com/users/-KhhojbnXRIUF_PnQkfa' , {:age => '20'})


