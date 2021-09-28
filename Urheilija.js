const Henkilo = require("./Henkilo.js");

class Urheilija extends Henkilo {
  // Urheilija-luokan omat attribuutit
  omapaino;
  laji;
  kuva;
  saavutukset;

  // Konstruktori
  constructor(enim, snim, knim, svu, laj, saav, pno, kuv) {
    super(enim, snim, knim, svu);
    this.laji = laj;
    this.saavutukset = saav;
    this.omapaino = pno;
    this.kuva = kuv;
  }

  // Getterit ja setterit
  getENimi() {
    return this.etunimet;
  }

  setENimi(uusinimi) {
    this.etunimet = uusinimi;
    return uusinimi;
  }

  getSNimi() {
    return this.sukunimi;
  }

  setSNimi(uusinimi) {
    this.sukunimi = uusinimi;
    return uusinimi;
  }

  getKNimi() {
    return this.kutsumanimi;
  }

  setKNimi(uusinimi) {
    this.kutsumanimi = uusinimi;
    return uusinimi;
  }

  getSVuosi() {
    return this.syntymavuosi;
  }

  setSVuosi(uusivuosi) {
    this.syntymavuosi = uusivuosi;
    return uusivuosi;
  }

  getOmapaino() {
    return this.omapaino;
  }

  setOmapaino(uusipaino) {
    this.omapaino = uusipaino;
    return uusipaino;
  }

  getLaji() {
    return this.laji;
  }

  setLaji(uusilaji) {
    this.laji = uusilaji;
    return uusilaji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  setSaavutukset(uudetsaavutukset) {
    this.saavutukset = uudetsaavutukset;
    return uudetsaavutukset;
  }

  getLinkkikuvaan() {
    return this.kuva;
  }

  setLinkkikuvaan(uusikuva) {
    this.kuva = uusikuva;
    return uusikuva;
  }

  // Urheilija-olion representaatio taulukkomuodossa.
  toArray() {
    let msg = [
      "Nimi: " + this.etunimet + " " + this.sukunimi,
      "Kutsumanimi: " + this.kutsumanimi,
      "Syntymävuosi: " + this.syntymavuosi,
      "Laji: " + this.laji,
      "Saavutukset: " + this.saavutukset,
      "Paino: " + this.omapaino,
      "Kuva: " + this.kuva,
    ];
    return msg;
  }
}

module.exports = Urheilija;
