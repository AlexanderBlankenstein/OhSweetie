const script_page = true;

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function scrollToSection(anchorName) {
  localStorage.setItem( 'anchorToPass', anchorName );
  window.location.href = "./index.html";
  closeNav();
}

let eventDate = document.getElementById('eventDate')

eventDate.addEventListener('change',(e)=>{
  let eventDateVal = e.target.value
  document.getElementById('eventDateSelected').innerText = eventDateVal
})

function clearOrder() {
  document.querySelector('.order_form').reset();
}

function toggle(object) {
  let element;
  if (object === "Cake"){
    element = document.getElementById('cake-checkbox');
  } else if (object === "Cupcake"){
    element = document.getElementById('cupcake-checkbox');
  } else if (object === "other") {
    element = document.getElementById('other-checkbox');
  }

  if (element.checked === false){
    element.checked = true;
  } else {
    element.checked = false;
  }
}
