/*
Example #1 - from Pho
----------------------
var emdict= {
  'pho@gmail.com':'WhatsApp',
  'bennyl@gmail.com': 'WhatsApp',
  'alex@gmail.com': 'WhatsApp',
  'matt@gmail.com': 'WhatsApp',
}
var emlist = ['bennyl@gmail.com','alex@gmail.com', 'WhatsApp','matt@gmail.com','pho@gmail.com'];

var emdictKeys = Object.keys(emdict);

for (var [k,v] of Object.entries(emdict)){
  console.log('k,v as variables :', k,v);
  console.log('\n------------\n');
  console.log( 'keys k:',k, 'values: ',emdict[k]);

}

console.log('\n------------\n');

console.log('keys of dictionary: ',emdictKeys);
console.log('list of emails: ', emlist);

console.log('\n------------\n');

console.log(emdictKeys.includes('pho@gmail.com'));
console.log(emlist.includes('pho@gmail.com'));

console.log('\n------------\n');
console.log(emlist.indexOf('pho@gmail.com'));
console.log('\n------------\n');


Example #2 - TRying to reproduce values
----------------------
var allusers = [
    {__typename: 'Users', _id: '63b78aec08da5cc49e19dddd', email: 'pho@gmail.com', password: 'WhatsApp_Pho'},
    {__typename: 'Users', _id: '63b78b2a5da8e9626bb178ca', email: 'bennyl@gmail.com', password: 'WhatsApp_Benny'},
    {__typename: 'Users', _id: '63b78b33226ec6d7d58c005c', email: 'alex@gmail.com', password: 'WhatsApp_Alex'},
    {__typename: 'Users', _id: '63b78b386d2d630802a6dec3', email: 'matt@gmail.com', password: 'WhatsApp_Matt'}   
]

console.log(allusers)

console.log("------")
let obj1 = allusers.find(o => o.email === 'string 2');

console.log("Type of obj1", typeof(obj1))

if (typeof(obj1) === 'object') {
  if (obj1.length === 0) {
    console.log("string 2 was not found!")
    } else {
        console.log(obj1);
    }
} else {
    console.log("string 2 was not found!")
}

console.log("======")

let obj2 = allusers.find(o => o.email === 'pho@gmail.com');
console.log("Type of obj2", typeof(obj2))
console.log("Password for  'pho@gmail.com'  is:", obj2.password);


Example #3    WORKS!!!
let arr = [
    { name:"string 1", value:"this 1", other: "that 1" },
    { name:"string 2", value:"this 2", other: "that 2" },
    { name:"string 3", value:"this 3", other: "that 3" },
    { name:"string 4", value:"this 4", other: "that 4" }
];

let obj = arr.find(o => o.name === 'string 2');

console.log(obj);
*/

// Example #4
let greenes = [
    {"_id":"63b85c8327063e5cec2cdbf2","itemcode":"VS-3451_2022754","name":"Brain Sharp","brand":"Vitamin Shoppe","image":"brainsharp.jpg","price":37.99,"inventory":6,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf3","itemcode":"UX-1057_1787449","name":"Neuro-Mag - Magnesium L-Threonate","brand":"Life Extension","image":"neuromag.jpg","price":44.99,"inventory":11,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf4","itemcode":"VS-1526_1051389","name":"Acetyl-L-Carnitine","brand":"Vitamin Shoppe","image":"acetylcarnitine.jpg","price":24.99,"inventory":8,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf5","itemcode":"UX-1002_1624428","name":"Cognitex Elite","brand":"Life Extension","image":"cognitex.jpg","price":49.99,"inventory":3,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf6","itemcode":"ONN1001_1991041","name":"Alpha Brain","brand":"Onnit Labs","image":"alphabrain.jpg","price":34.99,"inventory":16,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf7","itemcode":"VS-5815_2208064","name":"Advanced Nootropic Formula","brand":"Vthrive","image":"adv_nootropic.jpg","price":26.39,"inventory":5,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf8","itemcode":"VS-3920_2194249","name":"Magnesium Threonate","brand":"Vitamin Shoppe","image":"magnes_threonate.jpg","price":32.99,"inventory":3,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbf9","itemcode":"1F-1058_2021632","name":"Lion's Mane","brand":"Host Defense Organic Mushrooms","image":"lions_mane.jpg","price":44.96,"inventory":32,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbfa","itemcode":"VS-1624_1776020","name":"Alcohol-Free Ginkgo Biloba Extract","brand":"Vitamin Shoppe","image":"ginkgo_biloba_alc_free.jpg","price":14.99,"inventory":6,"category":"Brain and Memory"},
    {"_id":"63b85c8327063e5cec2cdbfb","itemcode":"VS-6601_2231082","name":"KSM-66 Ashwagandha","brand":"Vthrive","image":"ashwagandha_ksm66.jpg","price":19.99,"inventory":12,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdbfc","itemcode":"VS-4302_2232601","name":"Black Maca","brand":"Plnt","image":"black_maca.jpg","price":17.99,"inventory":7,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdbfd","itemcode":"VS-2673_1969468","name":"Ashwagandha - Non-GMO","brand":"Plnt","image":"ashwagandha_nongmo.jpg","price":19.99,"inventory":5,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdbfe","itemcode":"VS-6121_2212728","name":"Mood Balance","brand":"Vthrive","image":"moodbalance.jpg","price":31.99,"inventory":8,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdbff","itemcode":"PH-1065_1688365","name":"Adrenal Fatigue Fighter","brand":"Ridgecrest","image":"adrenal.jpg","price":31.99,"inventory":4,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdc00","itemcode":"VS-1597_1054492","name":"Thyroid Complex","brand":"Vitamin Shoppe","image":"thyroid_complex.jpg","price":13.99,"inventory":2,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdc01","itemcode":"PI-7022_1440973","name":"Red Panax Ginseng Extractum Liquid","brand":"Prince Of Peace","image":"red_panax_ginseng_liq.jpg","price":14.99,"inventory":1,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdc02","itemcode":"NO-1375_1216785","name":"Kava Kava Herbal Extract","brand":"Natrol","image":"kava_kava_extract.jpg","price":9.59,"inventory":10,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdc03","itemcode":"VS-1206_1040648","name":"Super Energy Up","brand":"Vitamin Shoppe","image":"super_energy_up.jpg","price":18.99,"inventory":4,"category":"Energy and Stress"},
    {"_id":"63b85c8327063e5cec2cdc04","itemcode":"VS-1267_1042855","name":"Quercetin + C","brand":"Vitamin Shoppe","image":"quercetin_c.jpg","price":24.99,"inventory":23,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc05","itemcode":"BI-1375_1780907","name":"Oscillococcinum","brand":"Boiron","image":"oscillococcinum.jpg","price":29.99,"inventory":12,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc06","itemcode":"VS-4048_2220234","name":"Zinc - Immune & Antioxidant Support","brand":"Vitamin Shoppe","image":"zinc50.jpg","price":21.99,"inventory":8,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc07","itemcode":"VS-4128_2230902","name":"Liposomal Vitamin C","brand":"Vthrive","image":"liposomal_c.jpg","price":16.99,"inventory":7,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc08","itemcode":"OO-1002_1220213","name":"Oreganol Oil","brand":"N.American Herb Spice","image":"oreganol_oil.jpg","price":29.99,"inventory":10,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc09","itemcode":"VS-1013_1034535","name":"Vitamin C-1000 Complex","brand":"Vitamin Shoppe","image":"vit_c_1000.jpg","price":29.99,"inventory":9,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc0a","itemcode":"VS-3201_2208114","name":"Elderberry Gummires for adults","brand":"Vitamin Shoppe","image":"elderberry_gummies_adults.jpg","price":17.99,"inventory":7,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc0b","itemcode":"VS-3639_2151264","name":"Organic Virgin Cold-Pressed Black Seed Oil","brand":"PLNT","image":"org_cpress_blk_seed_oil.jpg","price":49.99,"inventory":6,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc0c","itemcode":"VS-2294_2061042","name":"AHCC","brand":"Vitamin Shoppe","image":"ahcc.jpg","price":57.99,"inventory":8,"category":"Immune Support"},
    {"_id":"63b85c8327063e5cec2cdc0d","itemcode":"VS-1645_1776509","name":"Organic Valerian Root Extract","brand":"Vitamin Shoppe","image":"valerian_extract.jpg","price":17.99,"inventory":10,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc0e","itemcode":"ONN1010_2187888","name":"New Mood - With 5-HTP & L-Tryptophan","brand":"Onnit Labs","image":"newmood_5htp_trypt.jpg","price":29.99,"inventory":8,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc0f","itemcode":"OLY1017_2207553","name":"Olly -Extra Strength Sleep Gummies","brand":"Olly","image":"olly_xs_gummies.jpg","price":18.99,"inventory":4,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc10","itemcode":"VS-3306_1978576","name":"Melatonin for Sleep Support","brand":"Vitamin Shoppe","image":"melatonin_5mg.jpg","price":8.99,"inventory":15,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc11","itemcode":"GU-0039_2206688","name":"Dr. Formulated CBD + Sleep Gummies","brand":"Garden Of Life","image":"cbd_gummies.jpg","price":34.99,"inventory":16,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc12","itemcode":"VS-3836_2187136","name":"L-Theanine","brand":"Vitamin Shoppe","image":"l_theanine.jpg","price":44.99,"inventory":12,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc13","itemcode":"VS-2659_1721133","name":"Sam-e","brand":"Vitamin Shoppe","image":"sam-e.jpg","price":46.99,"inventory":12,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc14","itemcode":"NO-1019_1772144","name":"5-HTP Time Release","brand":"Natrol","image":"5-htp_time_rel.jpg","price":19.99,"inventory":23,"category":"Sleep and Mood"},
    {"_id":"63b85c8327063e5cec2cdc15","itemcode":"GNX1011_2172815","name":"Stress Relief","brand":"Genexa","image":"stress_relief_homeopath.jpg","price":16.48,"inventory":3,"category":"Sleep and Mood"}
]

// result = greenes.filter(o => o.category === 'Sleep and Mood')
result = greenes.filter(o => o.category === 'Energy and Stress')
console.log(result)