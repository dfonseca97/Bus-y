import requests,json

def getLocation():
    payload = {'considerIp' : 'true'}
    jsonPayload = json.dumps(payload)
    #print jsonPayload
    headers = {'content-type': 'application/json'}
    privateKey = "AIzaSyD-oZqHXSwr1L5w8LxwPw_AiQbVUSC4xo8"
    url = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + privateKey
    r = requests.post(url,data=jsonPayload,headers = headers)
    response = json.loads(r.text)
    #print response
    return (response['location']['lat'],response['location']['lng'],response['accuracy'])
