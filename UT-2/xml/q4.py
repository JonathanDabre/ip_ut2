import xmltodict
import json

# Loading and parsing the xml file.
with open (r'q1.xml', "r") as xml_file:
    xml_data = xml_file.read()
    print(xml_data)
    
# Convert xml to json 
json_data = json.dumps(xmltodict.parse(xml_data), indent=4)

print(json_data)

with open("output.json", "w") as json_file:
    json_file.write(json_data)