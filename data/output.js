const results = [
  {
    "name": "Macro-Econ Transition",
    "children": [
      {
        "name": "Energy demand",
        "folder": "energy",
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
      },
      {
        "name": "Emissions in CO<sub>2</sub>e",
        "folder": "emissions_co2e",
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
            "label": "CO2e",
            "factor": 1.0
          }
        ],
        "plotTypes": ["line", "stacked-area"]
      },
      {
        "name": "Emissions wedges",
        "folder": "emissions_wedges",
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
            "label": "CO2e",
            "factor": 1.0
          }
        ],
        "plotTypes": ["line", "stacked-area"]
      }
    ]
  }
];

const regions = [
  {
    "name": "albania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/al.json"
  },
  {
    "name": "algeria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ag.json"
  },
  {
    "name": "angola",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ao.json"
  },
  {
    "name": "argentina",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ar.json"
  },
  {
    "name": "armenia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/am.json"
  },
  {
    "name": "australi",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/as.json"
  },
  {
    "name": "austria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/au.json"
  },
  {
    "name": "azerbaijan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/aj.json"
  },
  {
    "name": "bahrain",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ba.json"
  },
  {
    "name": "bangladesh",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/bg.json"
  },
  {
    "name": "belarus",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bo.json"
  },
  {
    "name": "belgium",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/be.json"
  },
  {
    "name": "benin",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bn.json"
  },
  {
    "name": "bolivia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/bl.json"
  },
  {
    "name": "bosniaherz",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bk.json"
  },
  {
    "name": "botswana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bc.json"
  },
  {
    "name": "brazil",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/br.json"
  },
  {
    "name": "brunei",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bx.json"
  },
  {
    "name": "bulgaria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bu.json"
  },
  {
    "name": "cambodia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json"
  },
  {
    "name": "cameroon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cm.json"
  },
  {
    "name": "canada",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/ca.json"
  },
  {
    "name": "chile",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ci.json"
  },
  {
    "name": "china",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json"
  },
  {
    "name": "colombia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/co.json"
  },
  {
    "name": "congo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cf.json"
  },
  {
    "name": "congorep",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cg.json"
  },
  {
    "name": "costarica",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cs.json"
  },
  {
    "name": "coteivoire",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/iv.json"
  },
  {
    "name": "croatia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hr.json"
  },
  {
    "name": "cuba",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cu.json"
  },
  {
    "name": "curacao",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/uc.json"
  },
  {
    "name": "cyprus",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/cy.json"
  },
  {
    "name": "czech",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ez.json"
  },
  {
    "name": "denmark",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/da.json"
  },
  {
    "name": "dominicanr",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/dr.json"
  },
  {
    "name": "ecuador",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ec.json"
  },
  {
    "name": "egypt",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/eg.json"
  },
  {
    "name": "elsalvador",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/es.json"
  },
  {
    "name": "eqguinea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ek.json"
  },
  {
    "name": "eritrea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/er.json"
  },
  {
    "name": "estonia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/en.json"
  },
  {
    "name": "ethiopia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/et.json"
  },
  {
    "name": "finland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fi.json"
  },
  {
    "name": "france",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fr.json"
  },
  {
    "name": "gabon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gb.json"
  },
  {
    "name": "georgia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/gg.json"
  },
  {
    "name": "germany",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json"
  },
  {
    "name": "ghana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gh.json"
  },
  {
    "name": "gibraltar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gi.json"
  },
  {
    "name": "greece",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gr.json"
  },
  {
    "name": "guatemala",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/gt.json"
  },
  {
    "name": "guyana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/gy.json"
  },
  {
    "name": "haiti",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ha.json"
  },
  {
    "name": "honduras",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ho.json"
  },
  {
    "name": "hongkong",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/hk.json"
  },
  {
    "name": "hungary",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hu.json"
  },
  {
    "name": "iceland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ic.json"
  },
  {
    "name": "india",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/in.json"
  },
  {
    "name": "indonesia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/id.json"
  },
  {
    "name": "iran",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ir.json"
  },
  {
    "name": "iraq",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/iz.json"
  },
  {
    "name": "ireland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ei.json"
  },
  {
    "name": "israel",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/is.json"
  },
  {
    "name": "italy",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/it.json"
  },
  {
    "name": "jamaica",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/jm.json"
  },
  {
    "name": "japan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ja.json"
  },
  {
    "name": "jordan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/jo.json"
  },
  {
    "name": "kazakhstan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kz.json"
  },
  {
    "name": "kenya",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ke.json"
  },
  {
    "name": "korea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json"
  },
  {
    "name": "koreadpr",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json"
  },
  {
    "name": "kosovo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/kv.json"
  },
  {
    "name": "kuwait",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ku.json"
  },
  {
    "name": "kyrgyzstan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kg.json"
  },
  {
    "name": "lao",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/la.json"
  },
  {
    "name": "latvia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lg.json"
  },
  {
    "name": "lebanon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/le.json"
  },
  {
    "name": "libya",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ly.json"
  },
  {
    "name": "lithuania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lh.json"
  },
  {
    "name": "luxembou",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lu.json"
  },
  {
    "name": "malaysia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/my.json"
  },
  {
    "name": "malta",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mt.json"
  },
  {
    "name": "mauritius",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mp.json"
  },
  {
    "name": "mburkinafa",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/uv.json"
  },
  {
    "name": "mchad",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cd.json"
  },
  {
    "name": "mexico",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/mx.json"
  },
  {
    "name": "mgreenland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/gl.json"
  },
  {
    "name": "mmadagasca",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ma.json"
  },
  {
    "name": "mmali",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ml.json"
  },
  {
    "name": "mmauritani",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mr.json"
  },
  {
    "name": "moldova",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/md.json"
  },
  {
    "name": "mongolia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/mg.json"
  },
  {
    "name": "montenegro",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mj.json"
  },
  {
    "name": "morocco",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mo.json"
  },
  {
    "name": "mozambique",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mz.json"
  },
  {
    "name": "mrwanda",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/rw.json"
  },
  {
    "name": "muganda",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ug.json"
  },
  {
    "name": "myanmar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bm.json"
  },
  {
    "name": "namibia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/wa.json"
  },
  {
    "name": "nepal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/np.json"
  },
  {
    "name": "nethland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/nl.json"
  },
  {
    "name": "nicaragua",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/nu.json"
  },
  {
    "name": "niger",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ng.json"
  },
  {
    "name": "nigeria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ni.json"
  },
  {
    "name": "northmaced",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mk.json"
  },
  {
    "name": "norway",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/no.json"
  },
  {
    "name": "nz",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/nz.json"
  },
  {
    "name": "oman",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/mu.json"
  },
  {
    "name": "pakistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/pk.json"
  },
  {
    "name": "panama",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/pm.json"
  },
  {
    "name": "paraguay",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pa.json"
  },
  {
    "name": "peru",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pe.json"
  },
  {
    "name": "philippine",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/rp.json"
  },
  {
    "name": "poland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/pl.json"
  },
  {
    "name": "portugal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/po.json"
  },
  {
    "name": "qatar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/qa.json"
  },
  {
    "name": "romania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ro.json"
  },
  {
    "name": "russia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/rs.json"
  },
  {
    "name": "saudiarabi",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sa.json"
  },
  {
    "name": "senegal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sg.json"
  },
  {
    "name": "serbia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ri.json"
  },
  {
    "name": "singapore",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sn.json"
  },
  {
    "name": "slovakia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lo.json"
  },
  {
    "name": "slovenia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/si.json"
  },
  {
    "name": "southafric",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sf.json"
  },
  {
    "name": "spain",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sp.json"
  },
  {
    "name": "srilanka",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/ce.json"
  },
  {
    "name": "ssudan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/od.json"
  },
  {
    "name": "sudan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/su.json"
  },
  {
    "name": "suriname",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ns.json"
  },
  {
    "name": "sweden",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sw.json"
  },
  {
    "name": "switland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sz.json"
  },
  {
    "name": "syria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sy.json"
  },
  {
    "name": "taipei",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json"
  },
  {
    "name": "tajikistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/ti.json"
  },
  {
    "name": "tanzania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/tz.json"
  },
  {
    "name": "thailand",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/th.json"
  },
  {
    "name": "togo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/to.json"
  },
  {
    "name": "trinidad",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/td.json"
  },
  {
    "name": "tunisia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ts.json"
  },
  {
    "name": "turkey",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/tu.json"
  },
  {
    "name": "turkmenist",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/tx.json"
  },
  {
    "name": "uae",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ae.json"
  },
  {
    "name": "uk",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/uk.json"
  },
  {
    "name": "ukraine",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/up.json"
  },
  {
    "name": "uruguay",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/uy.json"
  },
  {
    "name": "usa",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/us.json"
  },
  {
    "name": "uzbekistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/uz.json"
  },
  {
    "name": "venezuela",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ve.json"
  },
  {
    "name": "vietnam",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json"
  },
  {
    "name": "world",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/world/xx.json"
  },
  {
    "name": "yemen",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ym.json"
  },
  {
    "name": "zambia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/zafrica/a.json"
  },
  {
    "name": "zimbabwe",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/zi.json"
  }
]

const vectors = [
{
  "name": "Energy demand",
  "folder": "energy",
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
},
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
},
// {
//   "name": "Emissions in CO<sub>2</sub>e",
//   "folder": "emissions_co2e",
//   "columns": [
//     {
//       "name": "sector",
//       "longName": "Sector"
//     },
//     {
//       "name": "product_long",
//       "longName": "Product"
//     },
//     {
//       "name": "flow_category",
//       "longName": "Flow category"
//     },
//     {
//       "name": "flow_long",
//       "longName": "Flow"
//     }
//   ],
//   "units": [
//     {
//       "label": "CO2e",
//       "factor": 1.0
//     }
//   ],
//   "plotTypes": ["line", "stacked-area"]
// },
{
  "name": "Emissions wedges",
  "folder": "emissions_wedges",
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
      "label": "CO2e",
      "factor": 1.0
    }
  ],
  "plotTypes": ["line", "stacked-area"]
}
];
