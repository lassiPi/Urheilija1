class Henkilo {
  // Konstruktori
  constructor(enim, snim, knim, svu) {
    this.etunimet = enim;
    this.sukunimi = snim;
    this.kutsumanimi = knim;
    this.syntymavuosi = svu;
  }

  // Olion merkkijonorepresentaatio taulukkomuodossa
  toArray() {
    let msg = [
      "Nimi: " + this.etunimet + " " + this.sukunimi,
      "Kutsumanimi: " + this.kutsumanimi,
      "Syntymävuosi: " + this.syntymavuosi,
    ];
    return msg;
  }
}

module.exports = Henkilo;
