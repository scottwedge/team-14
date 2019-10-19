## Version 0.0.1
# SS

from flask import request, url_for
from flask_api import FlaskAPI, status, exceptions
import pandas as pd
from flask import jsonify
from flask_cors import CORS, cross_origin

app = FlaskAPI(__name__)
app.config["DEBUG"] = True
app.config['CORS_HEADERS'] = {'Content-Type' : 'application/json'}
cors = CORS(app, resources={r"/*": {"origins": "*"}})



united_csv = pd.read_csv('United_Clean.csv')
hash = {}
table = {
     'Strong Individuals and Families Impact Council' : 15799,
     'Ready Children Impact Council' : 15797,
     'Successful Students Impact Council' : 15798
}

# To get the impact councils 
for i in united_csv['Investment_Name']:
    im = i[i.index('-') + 1:]
    im = im[im.index('-') + 2:]
    hash[im] = 0
impact_councils = list(hash.keys())

# To get strats
def strategies(name):
    list = {}
    for i in (united_csv.loc[united_csv['Investment_ID'] == table[impact_councils[0]]]['Strategy_Name']):
        list[i] = 0
    return list.keys()


@app.route("/api/get-impact/", methods=['GET'])
def get_impact():
    """
    Returns the different impact councils
    """
    return jsonify(names=impact_councils), status.HTTP_201_CREATED
@app.route("/api/get-strategy/", methods=['POST'])
def get_strategy():
    """
    Returns the different strategies for the different impact councils 
    """
    name = request.form['council']
    # response.headers.add('Access-Control-Allow-Origin')
    strat = strategies(name)
    print(name)
    return jsonify(strategies=list(strat)), status.HTTP_201_CREATED

app.run()
