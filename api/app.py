from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
import pickle
import pandas as pd
import numpy as np

from audiModelFields import audiKeyFields
print(audiKeyFields)
# creating the flask app
app = Flask(__name__)
# creating an API object
api = Api(app)

# importing models  

modelDict = {
    'Audi': pickle.load(open('audiModel.pickle', 'rb')),
    # 'Volkswagen': pickle.load(open('volkswagenModel.pickle', 'rb'))
}
car_post_args_parser = reqparse.RequestParser()
car_post_args_parser.add_argument('manufacturer', type=str, help='Requires manufacturer')
car_post_args_parser.add_argument('model', type=str, help='Requires model')
car_post_args_parser.add_argument('year', type=int, help='Requires year')
car_post_args_parser.add_argument('mileage', type=int, help='Requires mileage')
car_post_args_parser.add_argument('transmission', type=str, help='Requires transmission')
car_post_args_parser.add_argument('fuelType', type=str, help='Requires fuelType')
car_post_args_parser.add_argument('engineSize', type=float, help='Requires engineSize')

def formatData(args):
    headersToFormat = ['model', 'transmission', 'fuelType']
    for header in headersToFormat:
        args[header] = 'dmy_' + args[header]
    print(5444, args)
    # tempData = []
    # for field in audiKeyFields:
    #     if args[field]:
    #         tempData.append(args[field])
    #     else:
    #         tempData.append(0)

    # for i in range (audiKeyFields.length):
    #     if audiKeyFields[i] == 

    


    data = np.array(tempData)

    manufacturer = args['manufacturer']
    return manufacturer, data

class PredictPrice(Resource):
  
    def get(self):
  
        return jsonify({'message': 'hello world'})
  
    # Corresponds to POST request
    def post(self):
        args = car_post_args_parser.parse_args()

        manufacturer, data = formatData(args)
        model = modelDict[manufacturer]
 
        practice = model.predict(data)
        practiceList = practice.tolist()
        print(practiceList)
        return jsonify({'data': practiceList})
  
  
  
# adding the defined resources along with their corresponding urls
api.add_resource(PredictPrice, '/api/price-prediction')
  
  
# driver function
if __name__ == '__main__':
  
    app.run(debug = True)