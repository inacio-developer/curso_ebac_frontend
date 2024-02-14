    const form = document.querySelector('form');
    const numberA = document.querySelector('#numberA');
    const numberB = document.querySelector('#numberB');
    const submit = document.querySelector('input[type="submit"]')



    // add class

    const attSubmit = (result) => {
        const classAdd = result ? "bg-correct" : "bg-error"
        submit.classList.replace(submit.classList.value, classAdd);
        submit.classList.contains("bg-correct") ? submit.removeAttribute('disabled') : submit.setAttribute('disabled', '')
    }

    const formStyle = (result) => {
        result ? form.classList.replace(form.classList[1], "form-correct") : 
                 form.classList.replace(form.classList[1], "form-incorrect")
    }   
    

    // Result element manipulation: create, insert and delete

    const delResult = () => {
        const isTrue = document.querySelector('.verify')
        if(isTrue) isTrue.remove()
    }

    const insertHTML = (newElement, reference) => {
        reference.parentNode.insertBefore(newElement, reference.nextSibling);
    }

    const createView = (result) => {
        const element = document.createElement('div');
        element.classList.add("verify");
        let msg;

        if(result){
            element.classList.add('msg-accept');
            msg = 'Correct! The form complies with the rules ✅';
            
        } else {
            element.classList.add('msg-error');
            msg = 'Number A must be lower than number B <span class="color-error"> ❌ </span>';
        }
        
        element.innerHTML = `${msg}`

        return element
    }

    // Finding out which number is bigger

    const AorB = () => {
        if(parseFloat(numberB.value) > parseFloat(numberA.value)) return true;
        else return false;
    }


    // Program execution flow

    const WichIsBigger = (att) => {
        const deletePast = delResult();

        if(numberA.value && numberB.value) {
        const isBigger = AorB();
        const view = createView(isBigger);
        const submit = attSubmit(isBigger);
        const formBorder = formStyle(isBigger);
        const insertElement = insertHTML(view, att.target)}
    }

    // add events

    const addEvents = () => {

        const formEvents = ['keyup', 'change']
        
        formEvents.forEach((event) => form.addEventListener(event, WichIsBigger));
        submit.addEventListener('click', (click) => {
            click.preventDefault();
            console.warn("The form is correct, but the submit action was prevented :)");
        })
    }

   // init

    const init = () => {
        if(form, numberA, numberB){
        addEvents()
        }
    }

    // function call

    init();