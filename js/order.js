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

function clearContact() {
    const msg = document.querySelector('.contact_msg');
    msg.innerHTML = '';
    msg.classList = 'contact_msg';

    document.querySelector('.contact_form').reset();
}

let eventDate = document.getElementById('eventDate')

eventDate.addEventListener('change',(e)=>{
  let eventDateVal = e.target.value
  document.getElementById('eventDateSelected').innerText = eventDateVal
})