import requests,simlocator,json

def getLocation():
    (lac, cellTower,operator) = simlocator.getCellTowerInfo()
    #print lac, cellTower, operator
    codesDict =  {'movistar':[732,001],'Tigo':[732,020],'Claro':[732,101]} # replace this with codes in your location. Refer https://en.wikipedia.org/wiki/Mobile_country_code
    mcc = codesDict[operator][0]
    mnc = codesDict[operator][1]
    mnc = codesDict[operator][2]
    payload = {'considerIp':'false','cellTowers':[{'cellId':cellTower,'locationAreaCode':lac,'mobileCountryCode':mcc,'mobileNetworkCode':mnc}]}
    jsonPayload = json.dumps(payload)
    #print jsonPayload
    headers = {'content-type': 'application/json'}
    privateKey = "<your_key>"
    url = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + privateKey
    r = requests.post(url,data=jsonPayload,headers = headers)
    response = json.loads(r.text)
    #print response
    return (response['location']['lat'],response['location']['lng'],response['accuracy'])
