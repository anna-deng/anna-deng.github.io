//something fun!
var sites = [
  'http://endless.horse/',
  'http://corndog.io/',
  'http://www.koalastothemax.com/',
  'http://isitwednesdaymydudes.ml/',
  'http://www.pointerpointer.com/',
  'https://crouton.net/',
  'http://www.yesnoif.com/',
  'http://www.ismycomputeron.com/',
  'http://www.patience-is-a-virtue.org/',
  'http://onemillionlols.com/',
  'http://dogs.are.the.most.moe/',
  'http://chihuahuaspin.com/',
  'http://spaceis.cool/',
  'http://www.infinitething.com/',
  'http://buzzybuzz.biz/',
  'http://tinytuba.com/',
  'http://hooooooooo.com/',
];

  function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
    window.open(sites[i]);
  }
