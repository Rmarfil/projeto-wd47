var btn = document.querySelector("#btnMudaLayout")

function alteraNome() {
   if(btn.textContent == "Blocos"){
       btn.textContent = "Linhas"
   } else {
       btn.textContent = "Blocos"
   }
}

btn.onclick = alteraNome