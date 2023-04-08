const icona = document.querySelectorAll(".div-left img")
const imgCard = document.querySelector(".card-img-top")
const titleCard = document.querySelector(".card-title")
const contentCard = document.querySelector(".content-card")
const modalBodyEl = document.querySelector(".modal-body ")
const modalTitle = document.querySelector(".modal-title")
const modalBodyGallery = document.querySelector(".modal-body-galery img")
const slika = document.querySelectorAll(".gallery img")

icona.forEach((e) => {
  e.addEventListener("click", (e) => {
    let vrednost = e.target
    //vr = uzima vrednost attributa src od ikone na koju smo kliknuli
    let vr = vrednost.getAttribute("src")

    const getDataJson = async () => {
      const response = await fetch("public/img/icone.json")
      if (response.status !== 200) {
        throw new Error(
          "Ne možmo dohvataiti JSON fail (Nepoznata putanja do slike src attributa  )"
        )
      }
      const data = await response.json()
      return data
    }
    if (vrednost) {
      getDataJson()
        .then((data) => {
          //finindex je funkcija koja vraca index prvog elemnat niza koji zadovoljava uslov
          //(x) => x.src === vr je arrow funkcija koja uzima svaki objrkat POJEDINACNO iz JSON iconejson.json, koji za uslov ima  key objekta src iz json fajla jednak je attributu slike(ikone) na koju smo klikmuli.data predstavlja niz iz json fala. x predstavlja niz svih POJEDINACNIH objekata iz json fajla. x.src predstavlja POJEDINACNU vrednost kljuca svih  src kljuceva iz json fajla . vr predstavlja attribute slike src na koju smo kliknuli. ako je uslov ispunjen smesti vrednost indexa u varijablu i.
          let i = data.findIndex((x) => x.src === vr)

          imgCard.setAttribute("src", data[i].src)
          titleCard.innerHTML = data[i].header
          contentCard.innerText = data[i].content
          modalBodyEl.innerText = data[i].modalBody
          modalTitle.innerText = data[i].header
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  })
})

slika.forEach((sl) => {
  sl.addEventListener("click", (e) => {
    const slAttribute = e.target.getAttribute("src")
    modalBodyGallery.setAttribute("src", slAttribute)
  })
})
