from app import app, jsonify, request, Blueprint, send_file


@app.route('/', methods=['GET'])
def hello():
    return jsonify("hello world")


@app.route('/send-table', methods=['GET'])
def download_example_table():
    return send_file("upload/table.xls", download_name="Запрос по вакансиям работодателя.xls")
