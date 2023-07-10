with open("subjects.txt", mode = "r", encoding="utf-8") as file:
    subjects = file.read()


subjects = subjects.split('.')
# subjects = subjects.replace('\r\n', 's')
subjects.pop(0)

# for sub in subjects:
#     print(sub)

for key, value in enumerate(subjects):
    subjects[key] = subjects[key][1:]
    lenght = len(subjects[key])
    subjects[key] = subjects[key][:(lenght-2)]
    subjects[key] = subjects[key].replace("\n", "")

print(subjects)
