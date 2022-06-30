const results = [
  {
    "name": "Macro-Econ Transition",
    "children": [
      {
        "name": "Energy demand",
        "folder": "energy_demand",
        "columns": [
          {
            "name": "sector",
            "longName": "Sector"
          },
          {
            "name": "product_category",
            "longName": "Product category"
          },
          {
            "name": "product_long",
            "longName": "Product"
          },
          {
            "name": "flow_category",
            "longName": "Flow category"
          },
          {
            "name": "flow_long",
            "longName": "Flow"
          }
        ],
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
  },
  {
    "name": "Emissions",
    "children": [
      {
        "name": "AFOLU",
        "folder": "afolu",
        "columns": [
          {
            "name": "sector",
            "longName": "Sector"
          },
          {
            "name": "product_long",
            "longName": "Product"
          },
          {
            "name": "flow_category",
            "longName": "Flow category"
          },
          {
            "name": "flow_long",
            "longName": "Flow"
          }
        ],
        "units": [
          {
            "label": "?",
            "factor": 1.0
          }
        ],
        "plotTypes": ["line", "stacked-area"]
      },
      {
        "name": "Emissions",
        "folder": "emissions",
        "columns": [
          {
            "name": "sector",
            "longName": "Sector"
          },
          {
            "name": "product_long",
            "longName": "Product"
          },
          {
            "name": "flow_category",
            "longName": "Flow category"
          },
          {
            "name": "flow_long",
            "longName": "Flow"
          }
        ],
        "units": [
          {
            "label": "MT",
            "factor": 1.0
          }
        ],
        "plotTypes": ["line", "stacked-area"]
      }
    ]
  }
];

const regions = ['albania', 'algeria', 'angola', 'argentina', 'armenia', 'australi', 'austria', 'azerbaijan', 'bahrain', 'bangladesh', 'belarus', 'belgium', 'benin', 'bolivia', 'bosniaherz', 'botswana', 'brazil', 'brunei', 'bulgaria', 'cambodia', 'cameroon', 'canada', 'chile', 'china', 'colombia', 'congo', 'congorep', 'costarica', 'coteivoire', 'croatia', 'cuba', 'curacao', 'cyprus', 'czech', 'denmark', 'dominicanr', 'ecuador', 'egypt', 'elsalvador', 'eqguinea', 'eritrea', 'estonia', 'ethiopia', 'finland', 'france', 'gabon', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'guatemala', 'guyana', 'haiti', 'honduras', 'hongkong', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'korea', 'koreadpr', 'kosovo', 'kuwait', 'kyrgyzstan', 'lao', 'latvia', 'lebanon', 'libya', 'lithuania', 'luxembou', 'malaysia', 'malta', 'mauritius', 'mburkinafa', 'mchad', 'mexico', 'mgreenland', 'mmadagasca', 'mmali', 'mmauritani', 'moldova', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'mrwanda', 'muganda', 'myanmar', 'namibia', 'nepal', 'nethland', 'nicaragua', 'niger', 'nigeria', 'northmaced', 'norway', 'nz', 'oman', 'pakistan', 'panama', 'paraguay', 'peru', 'philippine', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'saudiarabi', 'senegal', 'serbia', 'singapore', 'slovakia', 'slovenia', 'southafric', 'spain', 'srilanka', 'ssudan', 'sudan', 'suriname', 'sweden', 'switland', 'syria', 'taipei', 'tajikistan', 'tanzania', 'thailand', 'togo', 'trinidad', 'tunisia', 'turkey', 'turkmenist', 'uae', 'uk', 'ukraine', 'uruguay', 'usa', 'uzbekistan', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];

const scenarios = ["pathway"];

const vectors = ["All", "Electricity", "Buildings", "Transportation", "Industry", "Agriculture",
               "F&W", "CO2 Removal"];
