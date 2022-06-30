from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

@app.route('/api/', methods=['GET'])
def data():
    listen_text = str(request.args['query'])
    
    return 


@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    # sec.create_csv()
    app.run()