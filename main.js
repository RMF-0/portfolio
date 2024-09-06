document.getElementById('darkSwitch').addEventListener('change', function(event){
    var htmlTag = document.getElementById('htmlTag');
    if (event.currentTarget.checked) {
        htmlTag.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
    }
});
window.addEventListener('scroll', () => {
    document.querySelectorAll('.hidden-section').forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const flexItems = section.querySelectorAll('.flex-item');
        const sectionVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

        if (sectionVisible) {
            section.classList.add('visible');

            if (flexItems.length > 0) {
                flexItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index *200);
                });
            }
        } else {
            section.classList.remove('visible');
            if (flexItems.length > 0) flexItems.forEach((item) => {item.classList.remove('visible');});
        }
    });
});

    function displayTextLetterByLetter(texts, index = 0) {
        const container = document.getElementById('message');
        container.innerHTML = '';
        let i = 0;

        function addLetter() {
            if (i < texts[index].length) {
                container.innerHTML += texts[index].charAt(i); 
                i++;
                setTimeout(addLetter, 30);
            } else {
                setTimeout(() => {
                    index = (index + 1) % texts.length;
                    displayTextLetterByLetter(texts, index);
                }, 2000);
            }
        }

        addLetter();
    }
    const messages = [
        'Salut 🖖,',
        ' Je m\'appelle Ratsimbazafy Mbola Fanantenana Olivier',
        'Bienvenu sur mon portfolio site personnel',
        'Laisser moi un message sur mes réseaux📩'
    ];
    displayTextLetterByLetter(messages);

    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        const cardInner = card.querySelector('.flip-card-inner');
        const btn = cardInner.querySelector('.bouton');

        btn.addEventListener('click', () => {
            cardInner.classList.toggle('flipped');
        });

        card.addEventListener('mouseleave', () => {
            cardInner.classList.remove('flipped');
        });
        card.addEventListener('touchstart', () => {
        cardInner.classList.add('flipped');
        });

        card.addEventListener('touchend', () => {
            cardInner.classList.remove('flipped');
        });
    });
