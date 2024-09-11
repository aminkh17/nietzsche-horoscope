import random
import json


with open("./mobireader/resources/tsz-data.json", "r") as f:
    fJson = json.load(f)


uniqueNumbers = random.sample(range(1, fJson["pages"].__len__()), 3)

sect = ["me", "you", "then"]
i = 0

for num in uniqueNumbers:
    print((50 * "-") + sect[i] + " :"+str(num))
    i+=1
    print(fJson["pages"][num]["en"][:500])
