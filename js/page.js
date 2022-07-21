const script_page = true;

window.onload = function() {
    let anchor = localStorage['anchorToPass'];
    localStorage.removeItem( 'anchorToPass' ); // Clear the localStorage
    if (anchor !== undefined) {
        console.log(anchor);
        scrollToSection(anchor)
    }
}

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


// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topBtn").style.display = "block";
      } else {
        document.getElementById("topBtn").style.display = "none";
      }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
