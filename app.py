from flask import Flask, request, jsonify
app = Flask(__name__)
LICENCAS_VALIDAS = {"TESTE123", "CLIENTE001", "DEMO2024"}

@app.route('/verificar', methods=['POST'])
def verificar():
    dados = request.json
    licenca = dados.get('licenca')
    if licenca in LICENCAS_VALIDAS:
        return jsonify({"status": "valida"})
    return jsonify({"status": "invalida"})

@app.route('/')
def home():
    return "Servidor Online"

if __name__ == '__main__':
    app.run()
