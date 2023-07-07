from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import json
from datetime import date


def get_citizens_file():
    citizens = []

    with open("citizen.json", "r", encoding='utf-8') as file:
        citizens = json.load(file)

    return citizens


app = FastAPI()

class Citizen(BaseModel):
    number_LD: int
    surname: str
    name: str
    patronymic: str
    born: date
    


@app.get('/')
async def hello_world():
    return {"Hello": "world"}


@app.get("/citizens")
async def citizens():
    citizens = get_citizens_file()

    return {
        "citizens": citizens
    }



@app.post("/citizens/")
async def add_citizen(citizen: Citizen):
    citizens = get_citizens_file()

    searche_res = {}

    for cit in citizens:
        if cit["number_LD"] == citizen.number_LD:
            searche_res = cit
            break

    if searche_res == {}:
    
        return {
            "number_LD": citizen.number_LD,
            "surname": citizen.surname,
            "name": citizen.name,
            "patronymic": citizen.patronymic,
            "born": citizen.born
        }
    
    else:
        return "citizen with same LD also exist"
    


@app.get("/citizens/{citizen_LD}")
async def inf_about_citizen(citizen_LD: int):
    citizens = get_citizens_file()

    cit_result = {}

    for cit in citizens:
        if cit["number_LD"] == citizen_LD:
            cit_result = cit

    if cit_result != {}:
        return cit_result
    else:
        return "citizen not found"


@app.delete("/citizens/{citizen_LD}")
async def delete_citezen(citizen_LD: int):
    citizens = get_citizens_file()

    del_citizen = {}
    for cit in citizens:
        if cit["number_LD"] == citizen_LD:
            del_citizen = cit
            break


    if del_citizen != {}:
        citizens.remove(del_citizen)
        return citizens
    else:
        return "citizen with the same LD not exist"      


# @app.get("/items/{item_id}")
# async def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: Item):
#     return {"item_name": item.name, "item_id": item_id}


# @app.post("/items/")
# async def add_item(item: Item):
#     return item



