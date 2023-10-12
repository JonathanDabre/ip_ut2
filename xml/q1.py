import xml.etree.ElementTree as ET

tree = ET.parse(r"q1.xml")
root = tree.getroot()


def count_elements(element):
    
    count = 1; # count the current element 
    
    for child in element:
        count += count_elements(child)
        
    return count 


# Call function
print(count_elements(root))

