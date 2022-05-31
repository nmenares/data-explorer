const results = [
  {
    "name": "Macro-Econ Transition",
    "children": [
      {
        "name": "Energy demand",
        "folder": "energy_demand",
        "units": [
          {
            "label": "MJ",
            "factor": 1.0
          },
          {
            "label": "J",
            "factor": 100000
          }
        ],
        "plotTypes": ["line", "stacked-area"]
      }
    ]
  }
];

const regions = ['albania', 'algeria', 'angola', 'argentina', 'armenia', 'australi', 'austria', 'azerbaijan', 'bahrain', 'bangladesh', 'belarus', 'belgium', 'benin', 'bolivia', 'bosniaherz', 'botswana', 'brazil', 'brunei', 'bulgaria', 'cambodia', 'cameroon', 'canada', 'chile', 'china', 'colombia', 'congo', 'congorep', 'costarica', 'coteivoire', 'croatia', 'cuba', 'curacao', 'cyprus', 'czech', 'denmark', 'dominicanr', 'ecuador', 'egypt', 'elsalvador', 'eqguinea', 'eritrea', 'estonia', 'ethiopia', 'finland', 'france', 'gabon', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'guatemala', 'guyana', 'haiti', 'honduras', 'hongkong', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'korea', 'koreadpr', 'kosovo', 'kuwait', 'kyrgyzstan', 'lao', 'latvia', 'lebanon', 'libya', 'lithuania', 'luxembou', 'malaysia', 'malta', 'mauritius', 'mburkinafa', 'mchad', 'mexico', 'mgreenland', 'mmadagasca', 'mmali', 'mmauritani', 'moldova', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'mrwanda', 'muganda', 'myanmar', 'namibia'];

const scenarios = ["pathway"];

const vectors = ["All", "Electricity", "Buildings", "Transportation", "Industry", "Agriculture",
               "F&W", "CO2 Removal"];
