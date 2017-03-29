#!/usr/bin/env ruby

require 'firebase'

uri = 'https://prueba-2a1c3.firebaseio.com/'

firebase = Firebase::Client.new(uri)

response = firebase.push("users" , {:name => 'Diego', :age => 19})

puts(response)
print("respone.success? ")
puts(response.success?)
