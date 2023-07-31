from app import Blueprint, request, jsonify


anketa_soiskatelya = Blueprint('anketa_soiskatelya', __name__)


@anketa_soiskatelya.route('/anketa_soiskatelya/add', methods=['POST'])
def add_anketa_soiskatelya():
    if request.method == 'POST':
        surname = request.json['surname']
        name = request.json['name']
        patronymic = request.json['patronymic'] if (request.json['patronymic'] != '') else None
        age = request.json['age']
        mail = request.json['mail']
        