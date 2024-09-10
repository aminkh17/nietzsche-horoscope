import json
import random

with open('./resources/book_data.json', 'r') as f:
    data = json.load(f)


fJson = {
    "title": data["title.xml"],
    "about": data["about.xml"],
    "pages" : []
}

# print(fJson["about"])

for key, value in data.items():
    if key.startswith("main"):
        fJson["pages"].append( {"en": value} )


# Convert the book data to JSON
book_json = json.dumps(fJson, indent=4)

# write json file in a file in the resource folder
with open("./resources/tsz-data.json", "w") as f:
    f.write(book_json)


uniqueNumbers = random.sample(range(1, fJson["pages"].__len__()), 3)

sect = ["me", "you", "then"]
i = 0

for num in uniqueNumbers:
    print((50 * "-") + sect[i] + " :"+str(num))
    i+=1
    print(fJson["pages"][num]["en"][:100])

    