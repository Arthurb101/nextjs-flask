from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/countrys", methods=['GET'])
def get_():
    # Your data to be returned as JSON
    data = [
    {
        "country_name": "Colombia",
        "cost": 1000,            # Combined cost of rent, travel, and food
        "image": "https://media.timeout.com/images/105741310/750/422/image.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Brazil",
        "cost": 1300,
        "image": "https://t4.ftcdn.net/jpg/02/43/29/05/360_F_243290527_4MGjSbuSc9pDwsHWxrS5SwYM3T7A8Fo2.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Mexico",
        "cost": 1000,
        "image": "https://www.fodors.com/wp-content/uploads/2021/05/UltimateMexicoCity__HERO_shutterstock_1058054480.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Canada",
        "cost": 1700,
        "image": "https://cdn.authentik.com/canada/images/section/images_list/3-coucher-soleil-toronto_5605.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Japan",
        "cost": 1700,
        "image": "https://t4.ftcdn.net/jpg/02/43/29/05/360_F_243290527_4MGjSbuSc9pDwsHWxrS5SwYM3T7A8Fo2.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "United Kingdom",
        "cost": 2200,
        "image": "https://t4.ftcdn.net/jpg/02/43/29/05/360_F_243290527_4MGjSbuSc9pDwsHWxrS5SwYM3T7A8Fo2.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Vietnam",
        "cost": 600,
        "image": "https://t4.ftcdn.net/jpg/02/43/29/05/360_F_243290527_4MGjSbuSc9pDwsHWxrS5SwYM3T7A8Fo2.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
    {
        "country_name": "Thailand",
        "cost": 800,
        "image": "https://t4.ftcdn.net/jpg/02/43/29/05/360_F_243290527_4MGjSbuSc9pDwsHWxrS5SwYM3T7A8Fo2.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    },
     {
        "country_name": "Panama",
        "cost": 1300,
        "image": "https://www.tripsavvy.com/thmb/J3DoycHA9FnjgELtdvw39Mk850k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PanamaCity-Panama-AnnaHaines62-7073e053a58c4a0888813a7bf845e71f.jpg",
        "visa_required": False,
        "digital_nomad_visa": True
    }
]

# Note: Combined costs are rough estimates and can vary based on personal choices and location.
# Visa information is based on the status as of my last knowledge update in January 2022.
# Verify the most up-to-date visa requirements before planning any travel.


    # Using jsonify to convert the data to JSON and return the response
    return jsonify(data)