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

const fight = document.getElementById("fight");

//membuat animasi computer memliih gambar
function putar() {
  const imgcomputer = document.getElementById("img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktumulai > 1000) {
      clearInterval;
      return;
    }
    imgcomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    fight.innerHTML  = '';
    if (i == gambar.length) i = 0;
  }, 100);
}

//mempersingkat codingan
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (i) {
  i.addEventListener("click", function () {
    const pilihcomp = getcomp();
    const pilihplayer = i.className;
    const hasil = gethasil(pilihcomp, pilihplayer);
    //animasi
    putar();
    setTimeout(function () {
      const imgcomp = document.querySelector(".computer img");
      imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");
      
      fight.innerHTML = hasil;
    }, 1000);
  });
});

//codingan lama

// const pgajah = document.querySelector(".gajah");
// pgajah.addEventListener("click", function () {
//   const pilihcomp = getcomp();
//   const pilihplayer = pgajah.className;
//   const hasil = gethasil(pilihcomp, pilihplayer);
//   // console.log('computer '+ pilihcomp)
//   // console.log('player ' + pilihplayer)
//   // console.log(gethasil(pilihcomp,pilihplayer))

//   const imgcomp = document.querySelector(".computer img");
//   imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

//   const fight = document.getElementById("fight");
//   fight.innerHTML = hasil;
// });
// const porang = document.querySelector(".orang");
// porang.addEventListener("click", function () {
//   const pilihcomp = getcomp();
//   const pilihplayer = porang.className;
//   const hasil = gethasil(pilihcomp, pilihplayer);
//   // console.log('computer '+ pilihcomp)
//   // console.log('player ' + pilihplayer)
//   // console.log(gethasil(pilihcomp,pilihplayer))

//   const imgcomp = document.querySelector(".computer img");
//   imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

//   const fight = document.getElementById("fight");
//   fight.innerHTML = hasil;
// });
// const psemut = document.querySelector(".semut");
// psemut.addEventListener("click", function () {
//   const pilihcomp = getcomp();
//   const pilihplayer = psemut.className;
//   const hasil = gethasil(pilihcomp, pilihplayer);
//   // console.log('computer '+ pilihcomp)
//   // console.log('player ' + pilihplayer)
//   // console.log(gethasil(pilihcomp,pilihplayer))

//   const imgcomp = document.querySelector(".computer img");
//   imgcomp.setAttribute("src", "img/" + pilihcomp + ".png");

//   const fight = document.getElementById("fight");
//   fight.innerHTML = hasil;
// });
