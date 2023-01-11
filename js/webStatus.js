export default class WebStatus {
    constructor(){
        WebStatus.getDomSections();
        WebStatus.getLinkElements();
        WebStatus.bindLinksToSections();

        WebStatus.changeSection(WebStatus.defaultSection);
    }

    static webSections = [
        'book-list-section',
        'add-book-section',
        'contact-section',
    ]

    static defaultSection = 'book-list-section'

    static domElements = []
    static linkElements = []

    static getDomSections(){
        WebStatus.webSections.forEach((section) => {
            const myDomSection = document.getElementById(section);
            WebStatus.domElements.push(myDomSection);
        })
    }

    static getLinkElements(){
        WebStatus.webSections.forEach((section) => {
            const myLinkElement = document.getElementById(`${section}-link`);
            WebStatus.linkElements.push(myLinkElement);
        })
    }

    static hideAllSections(){
        WebStatus.domElements.forEach((section) => {
            section.classList.add('hidden');
        })
    }

    static bindLinksToSections(){
        WebStatus.linkElements.forEach((link, index) => {
            link.addEventListener('click', () => {
                WebStatus.hideAllSections();
                WebStatus.domElements[index].classList.remove('hidden');
            })
        })
    }

    static changeSection(newSection) {
        WebStatus.domElements.forEach(section => {
            if(section.id === newSection){
                WebStatus.hideAllSections();
                section.classList.remove('hidden');
            }
        });
    }
}