from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
import pickle
import pandas as pd
import numpy as np
import sys

sys.path.insert(0, './model-fields')
from audiModelFields import audiKeyFields
from bmwModelFields import bmwKeyFields
from vwModelFields import vwKeyFields
from mercedesModelFields import mercedesKeyFields

# creating the flask app
app = Flask(__name__)
# creating an API object
api = Api(app)

# importing models

resourcesDict = {
    'Audi': [audiKeyFields, pickle.load(open('./models/audiModel.pickle', 'rb'))],
    'BMW': [bmwKeyFields, pickle.load(open('./models/bmwModel.pickle', 'rb'))],
    'Volkswagen': [vwKeyFields, pickle.load(open('./models/vwModel.pickle', 'rb'))],
    'Mercedes': [mercedesKeyFields, pickle.load(open('./models/mercedesModel.pickle', 'rb'))]
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
    manufacturer = args['manufacturer']
    del args['manufacturer']
    keyFields, model = resourcesDict[manufacturer]

    headersToFormat = ['model', 'transmission', 'fuelType']
    for header in headersToFormat:
        args[header] = 'dmy_' + args[header]
   
    # Potential Solution:
    # Convert the args (input data) into an array using only the args values
    input_data = list(args.values())
    # Create empty array (finalInputData) for input data to pass into the model
    finalInputData = []
    # Loop through the KeyFieldsArray (e.g., audiKeyFields)
        # Each iteration check the keyfields array value and see if it exists inside the args array
        # If it does exist, append 2 to finalInputData array
        # Else, append 0 value to finalInputData array
    # First for loop is for appending the non-dummy variables to the array
    for i in range(0, 3):
        finalInputData.append(input_data[i])
    for i in range (3, len(keyFields)):
        if keyFields[i] in input_data:
            finalInputData.append(1)
        else:
            finalInputData.append(0)
    data = np.array(finalInputData)
    data = [data]
    return model, data

class PredictPrice(Resource):
  
    def get(self):
  
        return jsonify({'message': 'hello world'})
  
    # Corresponds to POST request
    def post(self):
        args = request.json
        model, data = formatData(args)
        practice = model.predict(data)
        practiceList = practice.tolist()
        return jsonify({'data': practiceList})
  
  
  
# adding the defined resources along with their corresponding urls
api.add_resource(PredictPrice, '/api/price-prediction')
  
  
# driver function
if __name__ == '__main__':
  
    app.run(debug = True)