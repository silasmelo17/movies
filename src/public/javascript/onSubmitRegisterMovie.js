
const formRegisterMovie = document.querySelector('#form-register-movie');
const form_message = document.querySelector("#form-message");

const name = document.querySelector("#name");
const description = document.querySelector("#description");
const slug = document.querySelector("#slug");
const duration = document.querySelector("#duration");
const year = document.querySelector("#year");
const thumb = document.querySelector("#thumb");
const source = document.querySelector("#source");

const fields = [ name, description, slug, duration, year, thumb, source ];

const categories = document.querySelectorAll('[name="category"]');



const clearFields = () =>
    fields.forEach( field => field.value = "" )

const printMessage = status => {
    form_message.classList.remove('text-sucess', 'text-danger');

    const messeges = {
        sucess: () => { 
            form_message.classList.add('text-success');
            return "Successfully recorded movie";
        },
        error: () => {
            form_message.classList.add('text-danger');
            return "Unable to register the movie";
        }
    };

    form_message.textContent = messeges[status]();
}



const onSubmit = async event => {
    event.preventDefault();

    const result = await axios.post( '/api/movies', {
        name: name.value,
        description: description.value,
        slug: slug.value,
        duration: duration.value,
        year: Number(year.value),
        thumb: thumb.value,
        src: source.value
    });

    if(result.status === 201 ) {
        clearFields();
        printMessage('sucess');
    } else {
        printMessage('error')
    }
}

formRegisterMovie.addEventListener('submit', onSubmit);
