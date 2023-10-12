import xml.etree.ElementTree as ET

tree = ET.parse(r"q1.xml")
root = tree.getroot()

tag_name = 'price'


for element in root.iter(tag_name):
    print(f"Tag Name: {element.tag}")
    print(f"Content in tag: {element.text}")