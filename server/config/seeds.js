const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  
  const categories = await Category.insertMany([
    { name: 'Brain and Memory' },
    { name: 'Energy and Stress' },
    { name: 'Immune Support' },
    { name: 'Sleep and Mood' }
    // { name: 'All' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {name:"Brain Sharp",description:"Vitamin Shoppe",image:"brainsharp.jpg",price:37.99,quantity:6,category:categories[0]._id},
    {name:"Neuro-Mag - Magnesium L-Threonate",description:"Life Extension",image:"neuromag.jpg","price":44.99,quantity:11,category:categories[0]._id},
    {name:"Acetyl-L-Carnitine",description:"Vitamin Shoppe",image:"acetylcarnitine.jpg","price":24.99,quantity:8,category:categories[0]._id},
    {name:"Cognitex Elite",description:"Life Extension",image:"cognitex.jpg","price":49.99,quantity:3,category:categories[0]._id},
    {name:"Alpha Brain",description:"Onnit Labs",image:"alphabrain.jpg","price":34.99,quantity:16,category:categories[0]._id},
    {name:"Advanced Nootropic Formula",description:"Vthrive",image:"adv_nootropic.jpg","price":26.39,quantity:5,category:categories[0]._id},
    {name:"Magnesium Threonate",description:"Vitamin Shoppe",image:"magnes_threonate.jpg","price":32.99,quantity:3,category:categories[0]._id},
    {name:"Lion's Mane",description:"Host Defense Organic Mushrooms",image:"lions_mane.jpg","price":44.96,quantity:32,category:categories[0]._id},
    {name:"Alcohol-Free Ginkgo Biloba Extract",description:"Vitamin Shoppe",image:"ginkgo_biloba_alc_free.jpg","price":14.99,quantity:6,category:categories[0]._id},
    {name:"KSM-66 Ashwagandha",description:"Vthrive",image:"ashwagandha_ksm66.jpg","price":19.99,quantity:12,category:categories[1]._id},
    {name:"Black Maca",description:"Plnt",image:"black_maca.jpg","price":17.99,quantity:7,category:categories[1]._id},
    {name:"Ashwagandha - Non-GMO",description:"Plnt",image:"ashwagandha_nongmo.jpg","price":19.99,quantity:5,category:categories[1]._id},
    {name:"Mood Balance",description:"Vthrive",image:"moodbalance.jpg","price":31.99,quantity:8,category:categories[1]._id},
    {name:"Adrenal Fatigue Fighter",description:"Ridgecrest",image:"adrenal.jpg","price":31.99,quantity:4,category:categories[1]._id},
    {name:"Thyroid Complex",description:"Vitamin Shoppe",image:"thyroid_complex.jpg","price":13.99,quantity:2,category:categories[1]._id},
    {name:"Red Panax Ginseng Extractum Liquid",description:"Prince Of Peace",image:"red_panax_ginseng_liq.jpg","price":14.99,quantity:1,category:categories[1]._id},
    {name:"Kava Kava Herbal Extract",description:"Natrol",image:"kava_kava_extract.jpg","price":9.59,quantity:10,category:categories[1]._id},
    {name:"Super Energy Up",description:"Vitamin Shoppe",image:"super_energy_up.jpg","price":18.99,quantity:4,category:categories[1]._id},
    {name:"Quercetin + C",description:"Vitamin Shoppe",image:"quercetin_c.jpg","price":24.99,quantity:23,category:categories[2]._id},
    {name:"Oscillococcinum",description:"Boiron",image:"oscillococcinum.jpg","price":29.99,quantity:12,category:categories[2]._id},
    {name:"Zinc - Immune & Antioxidant Support",description:"Vitamin Shoppe",image:"zinc50.jpg","price":21.99,quantity:8,category:categories[2]._id},
    {name:"Liposomal Vitamin C",description:"Vthrive",image:"liposomal_c.jpg","price":16.99,quantity:7,category:categories[2]._id},
    {name:"Oreganol Oil",description:"N.American Herb Spice",image:"oreganol_oil.jpg","price":29.99,quantity:10,category:categories[2]._id},
    {name:"Vitamin C-1000 Complex",description:"Vitamin Shoppe",image:"vit_c_1000.jpg","price":29.99,quantity:9,category:categories[2]._id},
    {name:"Elderberry Gummires for adults",description:"Vitamin Shoppe",image:"elderberry_gummies_adults.jpg","price":17.99,quantity:7,category:categories[2]._id},
    {name:"Organic Virgin Cold-Pressed Black Seed Oil",description:"PLNT",image:"org_cpress_blk_seed_oil.jpg","price":49.99,quantity:6,category:categories[2]._id},
    {name:"AHCC",description:"Vitamin Shoppe",image:"ahcc.jpg","price":57.99,quantity:8,category:categories[2]._id},
    {name:"Organic Valerian Root Extract",description:"Vitamin Shoppe",image:"valerian_extract.jpg","price":17.99,quantity:10,category:categories[3]._id},
    {name:"New Mood - With 5-HTP & L-Tryptophan",description:"Onnit Labs",image:"newmood_5htp_trypt.jpg","price":29.99,quantity:8,category:categories[3]._id},
    {name:"Olly -Extra Strength Sleep Gummies",description:"Olly",image:"olly_xs_gummies.jpg","price":18.99,quantity:4,category:categories[3]._id},
    {name:"Melatonin for Sleep Support",description:"Vitamin Shoppe",image:"melatonin_5mg.jpg","price":8.99,quantity:15,category:categories[3]._id},
    {name:"Dr. Formulated CBD + Sleep Gummies",description:"Garden Of Life",image:"cbd_gummies.jpg","price":34.99,quantity:16,category:categories[3]._id},
    {name:"L-Theanine",description:"Vitamin Shoppe",image:"l_theanine.jpg","price":44.99,quantity:12,category:categories[3]._id},
    {name:"Sam-e",description:"Vitamin Shoppe",image:"sam-e.jpg","price":46.99,quantity:12,category:categories[3]._id},
    {name:"5-HTP Time Release",description:"Natrol",image:"5-htp_time_rel.jpg","price":19.99,quantity:23,category:categories[3]._id},
    {name:"Stress Relief",description:"Genexa",image:"stress_relief_homeopath.jpg","price":16.48,quantity:3,category:categories[3]._id},    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  // await User.create({
  //   firstName: 'Pamela',
  //   lastName: 'Washington',
  //   email: 'pamela@testmail.com',
  //   password: 'password12345',
  //   orders: [
  //     {
  //       products: [products[0]._id, products[0]._id, products[1]._id]
  //     }
  //   ]
  // });

  let currUsers =[
    { fName: "Pho", lName:"Phimvongsa",email: "pho@gmail.com", pass: "WhatsApp" },
    { fName: "Benny",lName:"Gabel",email: "bennyl@gmail.com", pass: "WhatsApp" },
    { fName: "Alex", lName:"Winters",email:"alex@gmail.com", pass: "WhatsApp"  },
    { fName: "Matt", lName:"Parsons",email: "matt@gmail.com", pass: "WhatsApp" }
  ];
  for(var elem of currUsers){
    await User.create({
      firstName: elem.fName,
      lastName: elem.lName,
      email: elem.email,
      password: elem.pass
    });
  }

    // let currUsers =[
    //   { firstName: "Pho", lastName:"Phimvongsa",email: "pho@gmail.com", password: "WhatsApp" },
    //   { firstName: "Benny", lastName:"Gabel", email: "bennyl@gmail.com", password: "WhatsApp" },
    //   { firstName: "Alex", lastName:"Winters", email:"alex@gmail.com", password: "WhatsApp"  },
    //   { firstName: "Matt", lastName:"Parsons", email: "matt@gmail.com", password: "WhatsApp" }
    // ];

    // await User.insertMany(currUsers);



  


  console.log('users seeded');

  process.exit();
});



