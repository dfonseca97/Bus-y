import pyrebase

#le asignamos las configuraciones del proyecto de firebase

config = {
  "apiKey": "AIzaSyANdVKJb_d2ewSvSaD7orZxf3IUbdc_7Zo",
  "authDomain": "prueba-2a1c3.firebaseapp.com",
  "databaseURL": "https://prueba-2a1c3.firebaseio.com",
  "storageBucket": "prueba-2a1c3.appspot.com"
}

firebase = pyrebase.initialize_app(config)

#usamos el metodod que permite conectar la parte del database de nuestro proyecto de firebase

db = firebase.database()
