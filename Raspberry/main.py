import sys,time,geolocation,pyrebase
from subprocess import call

config = {
  "apiKey": "AIzaSyANdVKJb_d2ewSvSaD7orZxf3IUbdc_7Zo",
  "authDomain": "prueba-2a1c3.firebaseapp.com",
  "databaseURL": "https://prueba-2a1c3.firebaseio.com",
  "storageBucket": "prueba-2a1c3.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()

SleepTime = 10 # seconds
_lat = 0.00
_lon = 0.00

def maintain():
    global _lat
    global _lon
    #x=y
    (lat,lon,accuracy) = geolocation.getLocation()
    if(lat != _lat or lon !=_lon):
        data = str(lat) + "," + str(lon) + "," + str(accuracy)
        print "publishing ", data
        db.child("Buses").child("Gascuna_1").update({"coordenada_x": str(lat),"coordenada_y": str(lon)})
        _lat = lat
        _lon = lon
    else:
        print "no change in coordinates"

print "program begins"
while True:
    try:
        maintain()
    except Exception as inst:
        print type(inst), ' exception captured'
        print inst
        sys.stdout.flush()
        #file = open('/tmp/loctracker.error.log','a')
        #file.write('exception occured, trying to reboot')
        #file.close()
        #call(["sudo","reboot"])
    #break
    for i in range(0,SleepTime):
        sys.stdout.write("\restarting in %d seconds " % (SleepTime-i))
        sys.stdout.flush()
        time.sleep(1)

       
