const inputEl = document.querySelectorAll(".forma-msg input")
const submit = document.querySelector(".submit")


const patterns = {
  fullName:
    /^([A-Za-z][a-z]{1,5}\.\s)?([A-Z][a-z]{2,})(\s|\.[A-Z]\.|\s[A-Z][a-z]{1,}\s)([A-Z][a-z]{2,})$/,
  phone: /^\d{6,}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}(\.\w)?$/,
}
/* Validation function*/
function validate(field, regex) {
  let vrednost = regex.test(field.value)

  if (vrednost) {
    field.className = "is-valid form-control"
    field.nextElementSibling.style.color = "green"
    field.nextElementSibling.className = "d-blok"
    field.nextElementSibling.innerText = "Ispravno!!!"
    if (submit) {
      setTimeout(createDiv,3000)
          createDiv(){
            let p = document.createElement('p')
            p.className = "is-valid form-control"
            p.innerText = "Forma ispravno poslata"
            submit.appendChild(p)
            


            
          }

      
    }
  } else {
    field.className = "is-invalid form-control"
    field.nextElementSibling.style.color = "red"
    field.nextElementSibling.className = "d-block"
  }
}

inputEl.forEach((e) => {
  e.addEventListener("keyup", (elem) => {
    validate(elem.target, patterns[elem.target.attributes.name.value])
  })
})

