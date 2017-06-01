#!/usr/bin/env ruby

require 'firebase'

uri = 'https://prueba-2a1c3.firebaseio.com/'

firebase = Firebase::Client.new(uri)

response = firebase.delete("users", {'name' => 'Diego'})

puts(response.success?)
