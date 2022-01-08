const script_page = true;

/*
function initPage() {

    const top = document.querySelector('.top');
    top.classList.add('low');
    top.style.minHeight = `calc(${window.innerHeight}px - 2.7em)`;
    top.insertAdjacentHTML('afterend', pageHTML);
    top.addEventListener('click', () => scrollToSection('about'));
    
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

function scrollToSection(anchorName) {

    const anchor = document.querySelector(`.anchor_${anchorName}`);

    if (anchor) {
        document.activeElement.blur();
        anchor.scrollIntoView({behavior: "smooth", block: "start"});
    }
}

*/

/*
// Contact

function sendContact() {

    const msg = document.querySelector('.contact_msg');
    msg.innerHTML = '';
    msg.classList = 'contact_msg';

    const fieldset = document.querySelector('.contact_fieldset');
    fieldset.disabled = true;

    var formdata = new FormData();
	
    formdata.append('Name', document.querySelector('#contact-name').value);
    formdata.append('Email', document.querySelector('#contact-email').value);
    formdata.append('Phone', document.querySelector('#contact-phone').value);
    formdata.append('Message', document.querySelector('#contact-msg').value);

    var ajax = new XMLHttpRequest();
    ajax.open("POST", './php/contact.php', true);
    //ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = () =>{

        if(ajax.readyState === 4) {
        
            if (ajax.status === 200) {
            
                const res = ajax.responseText;

                if (res == 'OK') {

                    document.querySelector('.contact_form').reset();
                    msg.innerHTML = 'Message sent successfully';
                    msg.classList.add('ok');

                } else {

                    // error
                    msg.innerHTML = res;
                    msg.classList.add('error');
                }

            } else {

                // Communication error
                msg.innerHTML = 'Communication error';
                msg.classList.add('error');
            }
            fieldset.disabled = false;
        } 
    }	        
    ajax.send(formdata);	
    return false;
}
/**/

function clearContact() {
    const msg = document.querySelector('.contact_msg');
    msg.innerHTML = '';
    msg.classList = 'contact_msg';

    document.querySelector('.contact_form').reset();
}
