from flask import Flask, request, jsonify

app = Flask(__name__)

LICENCAS_VALIDAS = ["TESTE123", "CLIENTE001", "THIAGO-1234-ABCD"]

@app.route('/')
def home():
    return "Servidor Online"

@app.route('/validar', methods=['POST'])
def validar_licenca():
    dados = request.get_json()
    chave = dados.get('chave')
    
    if chave in LICENCAS_VALIDAS:
        return jsonify({"status": "valida", "mensagem": "Licença ativa!"})
    else:
        return jsonify({"status": "invalida", "mensagem": "Licença não encontrada"})

if __name__ == '__main__':
    app.run()
