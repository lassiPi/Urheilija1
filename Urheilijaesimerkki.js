// Esimerkkejä Urheilija-olioista
const Urheilija = require("./Urheilija.js");

const urheilija1 = new Urheilija(
  "Kiira",
  "Korpi",
  "",
  "1988",
  "Taitoluistelu",
  "Suomenmestari x5, EM-mitalisti x3",
  "",
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Kiira_KORPI_Nebelhorn_Trophy_2009_Podium.jpg"
);

const urheilija2 = new Urheilija();
// console.log(urheilija2.toArray()); Kaikki arvot 'undefined'

urheilija2.setENimi("Matti");
urheilija2.setSNimi("Möttönen");
urheilija2.setKNimi("Matsu");
urheilija2.setSVuosi("1986");
urheilija2.setLaji("Pesäpallo");
urheilija2.setSaavutukset("SM-hopea");
urheilija2.setOmapaino("94 kg");
urheilija2.setLinkkikuvaan(
  "https://upload.wikimedia.org/wikipedia/commons/6/60/Casual_Cartoon_Male_Public_Speaker.svg"
);

const urheilija3 = new Urheilija(
  "Mysteeri",
  "Mies",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?"
);

urheilija3.syntymavuosi = urheilija2.getSVuosi();

console.log(urheilija1.toArray());
console.log(urheilija2.toArray());
console.log(urheilija3.toArray());
