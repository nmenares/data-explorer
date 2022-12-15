const regions = [
  {
    "name": "world",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/world/xx.json",
    "short_name": "World"
  },
  {
    "name": "albania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/al.json",
    "short_name": "Albania"
  },
  {
    "name": "algeria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ag.json",
    "short_name": "Algeria"
  },
  {
    "name": "angola",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ao.json",
    "short_name": "Angola"
  },
  {
    "name": "argentina",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ar.json",
    "short_name": "Argentina"
  },
  {
    "name": "armenia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/am.json",
    "short_name": "Armenia"
  },
  {
    "name": "australi",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/as.json",
    "short_name": "Australia"
  },
  {
    "name": "austria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/au.json",
    "short_name": "Austria"
  },
  {
    "name": "azerbaijan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/aj.json",
    "short_name": "Azerbaijan"
  },
  {
    "name": "bahrain",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ba.json",
    "short_name": "Bahrain"
  },
  {
    "name": "bangladesh",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/bg.json",
    "short_name": "Bangladesh"
  },
  {
    "name": "belarus",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bo.json",
    "short_name": "Belarus"
  },
  {
    "name": "belgium",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/be.json",
    "short_name": "Belgium"
  },
  {
    "name": "benin",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bn.json",
    "short_name": "Benin"
  },
  {
    "name": "bolivia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/bl.json",
    "short_name": "Bolivia"
  },
  {
    "name": "bosniaherz",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bk.json",
    "short_name": "Bosnia and Herzegovina"
  },
  {
    "name": "botswana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/bc.json",
    "short_name": "Botswana"
  },
  {
    "name": "brazil",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/br.json",
    "short_name": "Brazil"
  },
  {
    "name": "brunei",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bx.json",
    "short_name": "Brunei"
  },
  {
    "name": "bulgaria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/bu.json",
    "short_name": "Bulgaria"
  },
  {
    "name": "mburkinafa",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/uv.json",
    "short_name": "Burkina Faso"
  },
  {
    "name": "myanmar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bm.json",
    "short_name": "Burma"
  },
  {
    "name": "cambodia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json",
    "short_name": "Cambodia"
  },
  {
    "name": "cameroon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cm.json",
    "short_name": "Cameroon"
  },
  {
    "name": "canada",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/ca.json",
    "short_name": "Canada"
  },
  {
    "name": "mchad",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cd.json",
    "short_name": "Chad"
  },
  {
    "name": "chile",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ci.json",
    "short_name": "Chile"
  },
  {
    "name": "china",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json",
    "short_name": "China"
  },
  {
    "name": "colombia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/co.json",
    "short_name": "Colombia"
  },
  {
    "name": "costarica",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cs.json",
    "short_name": "Costa Rica"
  },
  {
    "name": "coteivoire",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/iv.json",
    "short_name": "Cote d'Ivoire"
  },
  {
    "name": "croatia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hr.json",
    "short_name": "Croatia"
  },
  {
    "name": "cuba",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/cu.json",
    "short_name": "Cuba"
  },
  {
    "name": "curacao",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/uc.json",
    "short_name": "Curacao"
  },
  {
    "name": "cyprus",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/cy.json",
    "short_name": "Cyprus"
  },
  {
    "name": "czech",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ez.json",
    "short_name": "Czech Republic"
  },
  {
    "name": "congorep",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cg.json",
    "short_name": "Democratic Republic of the Congo"
  },
  {
    "name": "denmark",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/da.json",
    "short_name": "Denmark"
  },
  {
    "name": "dominicanr",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/dr.json",
    "short_name": "Dominican Republic"
  },
  {
    "name": "ecuador",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ec.json",
    "short_name": "Ecuador"
  },
  {
    "name": "egypt",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/eg.json",
    "short_name": "Egypt"
  },
  {
    "name": "elsalvador",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/es.json",
    "short_name": "El Salvador"
  },
  {
    "name": "eqguinea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ek.json",
    "short_name": "Equatorial Guinea"
  },
  {
    "name": "eritrea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/er.json",
    "short_name": "Eritrea"
  },
  {
    "name": "estonia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/en.json",
    "short_name": "Estonia"
  },
  {
    "name": "ethiopia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/et.json",
    "short_name": "Ethiopia"
  },
  {
    "name": "finland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fi.json",
    "short_name": "Finland"
  },
  {
    "name": "france",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/fr.json",
    "short_name": "France"
  },
  {
    "name": "gabon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gb.json",
    "short_name": "Gabon"
  },
  {
    "name": "georgia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/gg.json",
    "short_name": "Georgia"
  },
  {
    "name": "germany",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gm.json",
    "short_name": "Germany"
  },
  {
    "name": "ghana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/gh.json",
    "short_name": "Ghana"
  },
  {
    "name": "gibraltar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gi.json",
    "short_name": "Gibraltar"
  },
  {
    "name": "greece",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/gr.json",
    "short_name": "Greece"
  },
  {
    "name": "mgreenland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/gl.json",
    "short_name": "Greenland"
  },
  {
    "name": "guatemala",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/gt.json",
    "short_name": "Guatemala"
  },
  {
    "name": "guyana",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/gy.json",
    "short_name": "Guyana"
  },
  {
    "name": "haiti",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ha.json",
    "short_name": "Haiti"
  },
  {
    "name": "honduras",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/ho.json",
    "short_name": "Honduras"
  },
  {
    "name": "hongkong",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/hk.json",
    "short_name": "Hong Kong"
  },
  {
    "name": "hungary",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/hu.json",
    "short_name": "Hungary"
  },
  {
    "name": "iceland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ic.json",
    "short_name": "Iceland"
  },
  {
    "name": "india",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/in.json",
    "short_name": "India"
  },
  {
    "name": "indonesia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/id.json",
    "short_name": "Indonesia"
  },
  {
    "name": "iran",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ir.json",
    "short_name": "Iran"
  },
  {
    "name": "iraq",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/iz.json",
    "short_name": "Iraq"
  },
  {
    "name": "ireland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ei.json",
    "short_name": "Ireland"
  },
  {
    "name": "israel",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/is.json",
    "short_name": "Israel"
  },
  {
    "name": "italy",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/it.json",
    "short_name": "Italy"
  },
  {
    "name": "jamaica",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/jm.json",
    "short_name": "Jamaica"
  },
  {
    "name": "japan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ja.json",
    "short_name": "Japan"
  },
  {
    "name": "jordan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/jo.json",
    "short_name": "Jordan"
  },
  {
    "name": "kazakhstan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kz.json",
    "short_name": "Kazakhstan"
  },
  {
    "name": "kenya",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ke.json",
    "short_name": "Kenya"
  },
  {
    "name": "kosovo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/kv.json",
    "short_name": "Kosovo"
  },
  {
    "name": "kuwait",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ku.json",
    "short_name": "Kuwait"
  },
  {
    "name": "kyrgyzstan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/kg.json",
    "short_name": "Kyrgyzstan"
  },
  {
    "name": "lao",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/la.json",
    "short_name": "Laos"
  },
  {
    "name": "latvia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lg.json",
    "short_name": "Latvia"
  },
  {
    "name": "lebanon",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/le.json",
    "short_name": "Lebanon"
  },
  {
    "name": "libya",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ly.json",
    "short_name": "Libya"
  },
  {
    "name": "lithuania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lh.json",
    "short_name": "Lithuania"
  },
  {
    "name": "luxembou",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lu.json",
    "short_name": "Luxembourg"
  },
  {
    "name": "mmadagasca",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ma.json",
    "short_name": "Madagascar"
  },
  {
    "name": "malaysia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/my.json",
    "short_name": "Malaysia"
  },
  {
    "name": "mmali",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ml.json",
    "short_name": "Mali"
  },
  {
    "name": "malta",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mt.json",
    "short_name": "Malta"
  },
  {
    "name": "mmauritani",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mr.json",
    "short_name": "Mauritania"
  },
  {
    "name": "mauritius",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mp.json",
    "short_name": "Mauritius"
  },
  {
    "name": "mexico",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/mx.json",
    "short_name": "Mexico"
  },
  {
    "name": "moldova",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/md.json",
    "short_name": "Moldova"
  },
  {
    "name": "mongolia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/mg.json",
    "short_name": "Mongolia"
  },
  {
    "name": "montenegro",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mj.json",
    "short_name": "Montenegro"
  },
  {
    "name": "morocco",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mo.json",
    "short_name": "Morocco"
  },
  {
    "name": "mozambique",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/mz.json",
    "short_name": "Mozambique"
  },
  {
    "name": "namibia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/wa.json",
    "short_name": "Namibia"
  },
  {
    "name": "nepal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/np.json",
    "short_name": "Nepal"
  },
  {
    "name": "nethland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/nl.json",
    "short_name": "Netherlands"
  },
  {
    "name": "nz",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/nz.json",
    "short_name": "New Zealand"
  },
  {
    "name": "nicaragua",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/nu.json",
    "short_name": "Nicaragua"
  },
  {
    "name": "niger",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ng.json",
    "short_name": "Niger"
  },
  {
    "name": "nigeria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ni.json",
    "short_name": "Nigeria"
  },
  {
    "name": "koreadpr",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json",
    "short_name": "North Korea"
  },
  {
    "name": "northmaced",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/mk.json",
    "short_name": "North Macedonia"
  },
  {
    "name": "norway",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/no.json",
    "short_name": "Norway"
  },
  {
    "name": "oman",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/mu.json",
    "short_name": "Oman"
  },
  {
    "name": "pakistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/pk.json",
    "short_name": "Pakistan"
  },
  {
    "name": "panama",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/pm.json",
    "short_name": "Panama"
  },
  {
    "name": "paraguay",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pa.json",
    "short_name": "Paraguay"
  },
  {
    "name": "peru",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pe.json",
    "short_name": "Peru"
  },
  {
    "name": "philippine",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/rp.json",
    "short_name": "Philippines"
  },
  {
    "name": "poland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/pl.json",
    "short_name": "Poland"
  },
  {
    "name": "portugal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/po.json",
    "short_name": "Portugal"
  },
  {
    "name": "qatar",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/qa.json",
    "short_name": "Qatar"
  },
  {
    "name": "congo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/cf.json",
    "short_name": "Republic of the Congo"
  },
  {
    "name": "romania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ro.json",
    "short_name": "Romania"
  },
  {
    "name": "russia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/rs.json",
    "short_name": "Russia"
  },
  {
    "name": "mrwanda",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/rw.json",
    "short_name": "Rwanda"
  },
  {
    "name": "saudiarabi",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sa.json",
    "short_name": "Saudi Arabia"
  },
  {
    "name": "senegal",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sg.json",
    "short_name": "Senegal"
  },
  {
    "name": "serbia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ri.json",
    "short_name": "Serbia"
  },
  {
    "name": "singapore",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sn.json",
    "short_name": "Singapore"
  },
  {
    "name": "slovakia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/lo.json",
    "short_name": "Slovakia"
  },
  {
    "name": "slovenia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/si.json",
    "short_name": "Slovenia"
  },
  {
    "name": "southafric",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/sf.json",
    "short_name": "South Africa"
  },
  {
    "name": "korea",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json",
    "short_name": "South Korea"
  },
  {
    "name": "ssudan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/od.json",
    "short_name": "South Sudan"
  },
  {
    "name": "spain",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sp.json",
    "short_name": "Spain"
  },
  {
    "name": "srilanka",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-asia/ce.json",
    "short_name": "Sri Lanka"
  },
  {
    "name": "sudan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/su.json",
    "short_name": "Sudan"
  },
  {
    "name": "suriname",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ns.json",
    "short_name": "Suriname"
  },
  {
    "name": "sweden",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sw.json",
    "short_name": "Sweden"
  },
  {
    "name": "switland",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/sz.json",
    "short_name": "Switzerland"
  },
  {
    "name": "syria",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/sy.json",
    "short_name": "Syria"
  },
  {
    "name": "taipei",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json",
    "short_name": "Taiwan"
  },
  {
    "name": "tajikistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/ti.json",
    "short_name": "Tajikistan"
  },
  {
    "name": "tanzania",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/tz.json",
    "short_name": "Tanzania"
  },
  {
    "name": "thailand",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/th.json",
    "short_name": "Thailand"
  },
  {
    "name": "togo",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/to.json",
    "short_name": "Togo"
  },
  {
    "name": "trinidad",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-america-n-caribbean/td.json",
    "short_name": "Trinidad and Tobago"
  },
  {
    "name": "tunisia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ts.json",
    "short_name": "Tunisia"
  },
  {
    "name": "turkey",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/tu.json",
    "short_name": "Turkey"
  },
  {
    "name": "turkmenist",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/tx.json",
    "short_name": "Turkmenistan"
  },
  {
    "name": "muganda",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ug.json",
    "short_name": "Uganda"
  },
  {
    "name": "ukraine",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/up.json",
    "short_name": "Ukraine"
  },
  {
    "name": "uae",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ae.json",
    "short_name": "United Arab Emirates"
  },
  {
    "name": "uk",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/europe/uk.json",
    "short_name": "United Kingdom"
  },
  {
    "name": "usa",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/north-america/us.json",
    "short_name": "United States"
  },
  {
    "name": "uruguay",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/uy.json",
    "short_name": "Uruguay"
  },
  {
    "name": "uzbekistan",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/central-asia/uz.json",
    "short_name": "Uzbekistan"
  },
  {
    "name": "venezuela",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/ve.json",
    "short_name": "Venezuela"
  },
  {
    "name": "vietnam",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json",
    "short_name": "Vietnam"
  },
  {
    "name": "yemen",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/middle-east/ym.json",
    "short_name": "Yemen"
  },
  {
    "name": "zambia",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/za.json",
    "short_name": "Zambia"
  },
  {
    "name": "zimbabwe",
    "url": "https://raw.githubusercontent.com/factbook/factbook.json/master/africa/zi.json",
    "short_name": "Zimbabwe"
  }
];

const vectors = [
  {
    "name": "Energy",
    "folder": "energy",
    "columns": [
      {
        "name": "sector",
        "longName": "Sector",
        "description": "A category of industries or ecosystems that share common characteristics."
      },
      {
        "name": "product_category",
        "longName": "Product category",
        "description": "The product category filter is offered to enable visualizations that are simplified by 'bundling up' products with similar characteristics into a smaller number of categories."
      },
      {
        "name": "product_long",
        "longName": "Product",
        "description": "A good or service, which may be tangible (e.g. coal) or intangible (e.g. avoided peat impacts)"
      },
      {
        "name": "flow_category",
        "longName": "Flow category",
        "description": "The flow category filter is offered to enable visualizations that are simplified by 'bundling up' flows with similar characteristics into a smaller number of categories."
      },
      {
        "name": "flow_long",
        "longName": "Flow",
        "description": "The path that a product takes. It can be thought of as 'where the product ends up when it is used'."
      }
    ],
    "units": [
      {
        "label": "TJ",
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
        "longName": "Sector",
        "description": "A category of industries or ecosystems that share common characteristics."
      },
      {
        "name": "product_long",
        "longName": "Product",
        "description": "A good or service, which may be tangible (e.g. coal) or intangible (e.g. avoided peat impacts)"
      },
      {
        "name": "flow_category",
        "longName": "Flow category",
        "description": "The flow category filter is offered to enable visualizations that are simplified by 'bundling up' flows with similar characteristics into a smaller number of categories."
      },
      {
        "name": "flow_long",
        "longName": "Flow",
        "description": "The path that a product takes. It can be thought of as 'where the product ends up when it is used'."
      }
    ],
    "units": [
      {
        "label": "Mha",
        "factor": 1.0
      }
    ],
    "plotTypes": ["line", "stacked-area"]
  },
  {
    "name": "Emissions",
    "folder": "emissions_co2e",
    "columns": [
      {
        "name": "sector",
        "longName": "Sector",
        "description": "A category of industries or ecosystems that share common characteristics."
      },
      {
        "name": "product_long",
        "longName": "Product",
        "description": "A good or service, which may be tangible (e.g. coal) or intangible (e.g. avoided peat impacts)"
      },
      {
        "name": "flow_category",
        "longName": "Flow category",
        "description": "The flow category filter is offered to enable visualizations that are simplified by 'bundling up' flows with similar characteristics into a smaller number of categories."
      },
      {
        "name": "flow_long",
        "longName": "Flow",
        "description": "The path that a product takes. It can be thought of as 'where the product ends up when it is used'."
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
  // {
  //   "name": "Emissions wedges",
  //   "folder": "emissions_wedges",
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
  // {
  //   "name": "Adoption",
  //   "folder": "pdindex_output",
  //   "columns": [
  //     {
  //       "name": "sector",
  //       "longName": "Sector"
  //     },
  //     {
  //       "name": "product_long",
  //       "longName": "Product"
  //     },
  //   ],
  //   "units": [
  //     {
  //       "label": "% Adoption",
  //       "factor": 1.0
  //     }
  //   ],
  //   "plotTypes": ["line", "stacked-area"]
  // }
];
