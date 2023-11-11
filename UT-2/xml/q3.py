import xml.etree.ElementTree as ET

tree = ET.parse(r"q1.xml")
root = tree.getroot()

tag_name = "price"

value = "696969"

for element in root.iter(tag_name):
    element.text = value
    

tree.write(r'q1.xml')