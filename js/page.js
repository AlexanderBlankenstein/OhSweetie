const script_page = true;

function initPage() {

    const top = document.querySelector('.top');
    top.classList.add('low');
    top.style.minHeight = `calc(${window.innerHeight}px - 2.7em)`;
    top.insertAdjacentHTML('afterend', pageHTML);
    top.addEventListener('click', () => scrollToSection('contact'));
    
    window.onresize = () => {
        top.style.minHeight = `calc(${window.innerHeight}px - 2.7em)`;
    }

    const anchors = document.querySelectorAll('.anchor');
    const navBtns = document.querySelectorAll('.navButtons > button');

    window.onscroll = () => {
    
        let activeAnchor = -1;
        let tempAnchor = -1;

        anchors.forEach((anchor, ix) => {
            if (activeAnchor === -1) {
                const rect = anchor.getBoundingClientRect();
                if (rect.top <= window.innerHeight/2) {
                    tempAnchor = ix;
                    if (rect.top > 0) {
                        activeAnchor = ix;
                    }
                }
            }
        });

        if (activeAnchor === -1) {
            activeAnchor = tempAnchor;
        }

        navBtns.forEach((btn, ix) => {
            if (ix === activeAnchor) {
                btn.classList.add('on');
            } else {
                btn.classList.remove('on');
            }
        });
    }
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function scrollToSection(anchorName) {

    const anchor = document.querySelector(`.anchor_${anchorName}`);
    closeNav();

    if (anchor) {
        document.activeElement.blur();
        anchor.scrollIntoView({behavior: "smooth", block: "start"});
    }
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