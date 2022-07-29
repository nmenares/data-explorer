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
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/al.json"
  },
  {
    "name": "algeria",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ag.json"
  },
  {
    "name": "angola",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ao.json"
  },
  {
    "name": "argentina",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ar.json"
  },
  {
    "name": "armenia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/am.json"
  },
  {
    "name": "australi",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/as.json"
  },
  {
    "name": "austria",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/au.json"
  },
  {
    "name": "azerbaijan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/aj.json"
  },
  {
    "name": "bahrain",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ba.json"
  },
  {
    "name": "bangladesh",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/bg.json"
  },
  {
    "name": "belarus",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bo.json"
  },
  {
    "name": "belgium",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/be.json"
  },
  {
    "name": "benin",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bn.json"
  },
  {
    "name": "bolivia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/bl.json"
  },
  {
    "name": "bosniaherz",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bk.json"
  },
  {
    "name": "botswana",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bc.json"
  },
  {
    "name": "brazil",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/br.json"
  },
  {
    "name": "brunei",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bx.json"
  },
  {
    "name": "bulgaria",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bu.json"
  },
  {
    "name": "cambodia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json"
  },
  {
    "name": "cameroon",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cm.json"
  },
  {
    "name": "canada",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/ca.json"
  },
  {
    "name": "chile",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ci.json"
  },
  {
    "name": "china",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json"
  },
  {
    "name": "colombia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/co.json"
  },
  {
    "name": "congo",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cf.json"
  },
  {
    "name": "congorep",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cg.json"
  },
  {
    "name": "costarica",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cs.json"
  },
  {
    "name": "coteivoire",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/iv.json"
  },
  {
    "name": "croatia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hr.json"
  },
  {
    "name": "cuba",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cu.json"
  },
  {
    "name": "curacao",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/uc.json"
  },
  {
    "name": "cyprus",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/cy.json"
  },
  {
    "name": "czech",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ez.json"
  },
  {
    "name": "denmark",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/da.json"
  },
  {
    "name": "dominicanr",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/dr.json"
  },
  {
    "name": "ecuador",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ec.json"
  },
  {
    "name": "egypt",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/eg.json"
  },
  {
    "name": "elsalvador",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/es.json"
  },
  {
    "name": "eqguinea",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ek.json"
  },
  {
    "name": "eritrea",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/er.json"
  },
  {
    "name": "estonia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/en.json"
  },
  {
    "name": "ethiopia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/et.json"
  },
  {
    "name": "finland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fi.json"
  },
  {
    "name": "france",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fr.json"
  },
  {
    "name": "gabon",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gb.json"
  },
  {
    "name": "georgia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/gg.json"
  },
  {
    "name": "germany",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json"
  },
  {
    "name": "ghana",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gh.json"
  },
  {
    "name": "gibraltar",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gi.json"
  },
  {
    "name": "greece",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gr.json"
  },
  {
    "name": "guatemala",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/gt.json"
  },
  {
    "name": "guyana",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/gy.json"
  },
  {
    "name": "haiti",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ha.json"
  },
  {
    "name": "honduras",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ho.json"
  },
  {
    "name": "hongkong",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/hk.json"
  },
  {
    "name": "hungary",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hu.json"
  },
  {
    "name": "iceland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ic.json"
  },
  {
    "name": "india",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/in.json"
  },
  {
    "name": "indonesia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/id.json"
  },
  {
    "name": "iran",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ir.json"
  },
  {
    "name": "iraq",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/iz.json"
  },
  {
    "name": "ireland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ei.json"
  },
  {
    "name": "israel",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/is.json"
  },
  {
    "name": "italy",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/it.json"
  },
  {
    "name": "jamaica",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/jm.json"
  },
  {
    "name": "japan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ja.json"
  },
  {
    "name": "jordan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/jo.json"
  },
  {
    "name": "kazakhstan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kz.json"
  },
  {
    "name": "kenya",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ke.json"
  },
  {
    "name": "korea",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json"
  },
  {
    "name": "koreadpr",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json"
  },
  {
    "name": "kosovo",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/kv.json"
  },
  {
    "name": "kuwait",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ku.json"
  },
  {
    "name": "kyrgyzstan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kg.json"
  },
  {
    "name": "lao",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/la.json"
  },
  {
    "name": "latvia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lg.json"
  },
  {
    "name": "lebanon",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/le.json"
  },
  {
    "name": "libya",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ly.json"
  },
  {
    "name": "lithuania",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lh.json"
  },
  {
    "name": "luxembou",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lu.json"
  },
  {
    "name": "malaysia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/my.json"
  },
  {
    "name": "malta",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mt.json"
  },
  {
    "name": "mauritius",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mp.json"
  },
  {
    "name": "mburkinafa",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/uv.json"
  },
  {
    "name": "mchad",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cd.json"
  },
  {
    "name": "mexico",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/mx.json"
  },
  {
    "name": "mgreenland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/gl.json"
  },
  {
    "name": "mmadagasca",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ma.json"
  },
  {
    "name": "mmali",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ml.json"
  },
  {
    "name": "mmauritani",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mr.json"
  },
  {
    "name": "moldova",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/md.json"
  },
  {
    "name": "mongolia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/mg.json"
  },
  {
    "name": "montenegro",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mj.json"
  },
  {
    "name": "morocco",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mo.json"
  },
  {
    "name": "mozambique",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mz.json"
  },
  {
    "name": "mrwanda",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/rw.json"
  },
  {
    "name": "muganda",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ug.json"
  },
  {
    "name": "myanmar",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bm.json"
  },
  {
    "name": "namibia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/wa.json"
  },
  {
    "name": "nepal",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/np.json"
  },
  {
    "name": "nethland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/nl.json"
  },
  {
    "name": "nicaragua",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/nu.json"
  },
  {
    "name": "niger",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ng.json"
  },
  {
    "name": "nigeria",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ni.json"
  },
  {
    "name": "northmaced",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mk.json"
  },
  {
    "name": "norway",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/no.json"
  },
  {
    "name": "nz",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/nz.json"
  },
  {
    "name": "oman",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/mu.json"
  },
  {
    "name": "pakistan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/pk.json"
  },
  {
    "name": "panama",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/pm.json"
  },
  {
    "name": "paraguay",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pa.json"
  },
  {
    "name": "peru",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pe.json"
  },
  {
    "name": "philippine",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/rp.json"
  },
  {
    "name": "poland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/pl.json"
  },
  {
    "name": "portugal",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/po.json"
  },
  {
    "name": "qatar",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/qa.json"
  },
  {
    "name": "romania",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ro.json"
  },
  {
    "name": "russia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/rs.json"
  },
  {
    "name": "saudiarabi",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sa.json"
  },
  {
    "name": "senegal",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sg.json"
  },
  {
    "name": "serbia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ri.json"
  },
  {
    "name": "singapore",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sn.json"
  },
  {
    "name": "slovakia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lo.json"
  },
  {
    "name": "slovenia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/si.json"
  },
  {
    "name": "southafric",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sf.json"
  },
  {
    "name": "spain",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sp.json"
  },
  {
    "name": "srilanka",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/ce.json"
  },
  {
    "name": "ssudan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/od.json"
  },
  {
    "name": "sudan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/su.json"
  },
  {
    "name": "suriname",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ns.json"
  },
  {
    "name": "sweden",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sw.json"
  },
  {
    "name": "switland",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sz.json"
  },
  {
    "name": "syria",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sy.json"
  },
  {
    "name": "taipei",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json"
  },
  {
    "name": "tajikistan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/ti.json"
  },
  {
    "name": "tanzania",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/tz.json"
  },
  {
    "name": "thailand",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/th.json"
  },
  {
    "name": "togo",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/to.json"
  },
  {
    "name": "trinidad",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/td.json"
  },
  {
    "name": "tunisia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ts.json"
  },
  {
    "name": "turkey",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/tu.json"
  },
  {
    "name": "turkmenist",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/tx.json"
  },
  {
    "name": "uae",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ae.json"
  },
  {
    "name": "uk",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/uk.json"
  },
  {
    "name": "ukraine",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/up.json"
  },
  {
    "name": "uruguay",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/uy.json"
  },
  {
    "name": "usa",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/us.json"
  },
  {
    "name": "uzbekistan",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/uz.json"
  },
  {
    "name": "venezuela",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ve.json"
  },
  {
    "name": "vietnam",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json"
  },
  {
    "name": "world",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/world/xx.json"
  },
  {
    "name": "yemen",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ym.json"
  },
  {
    "name": "zambia",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/zafrica/a.json"
  },
  {
    "name": "zimbabwe",
    "info": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/zi.json"
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
