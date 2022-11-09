function getcomp() {
  const compt = Math.random();
  if (compt < 0.34) return "gajah";
  if (compt >= 0.34 && compt < 0.67) return "orang";
  return "semut";
}

function gethasil(comp, player) {
  if (comp == player) return "SERI!!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

const pgajah = document.querySelector(".gajah");
pgajah.addEventListener("click", function () {
  const pilihcomp = getcomp();
  const pilihplayer = pgajah.className;
  const hasil = gethasil(pilihcomp, pilihplayer);
  // console.log('computer '+ pilihcomp)
  // console.log('player ' + pilihplayer)
  // console.log(gethasil(pilihcomp,pilihplayer))

  const imgcomp = document.querySelector(".computer img");
  imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

  const fight = document.getElementById("fight");
  fight.innerHTML = hasil;
});
const porang = document.querySelector(".orang");
porang.addEventListener("click", function () {
  const pilihcomp = getcomp();
  const pilihplayer = porang.className;
  const hasil = gethasil(pilihcomp, pilihplayer);
  // console.log('computer '+ pilihcomp)
  // console.log('player ' + pilihplayer)
  // console.log(gethasil(pilihcomp,pilihplayer))

  const imgcomp = document.querySelector(".computer img");
  imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

  const fight = document.getElementById("fight");
  fight.innerHTML = hasil;
});
const psemut = document.querySelector(".semut");
psemut.addEventListener("click", function () {
  const pilihcomp = getcomp();
  const pilihplayer = psemut.className;
  const hasil = gethasil(pilihcomp, pilihplayer);
  // console.log('computer '+ pilihcomp)
  // console.log('player ' + pilihplayer)
  // console.log(gethasil(pilihcomp,pilihplayer))

  const imgcomp = document.querySelector(".computer img");
  imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

  const fight = document.getElementById("fight");
  fight.innerHTML = hasil;
});
