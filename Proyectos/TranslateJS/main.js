const URL_API = 'https://text-translator2.p.rapidapi.com/getLanguages';

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81b9ed665cmsh67ebb482f54cb5fp16e9b6jsn429bcd1c55a5',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

//DOM
let translateFrom = document.querySelector('#translateFrom');
let translateTo = document.querySelector('#translateTo');
let translateBtn = document.querySelector('#translateBtn');
let textToTranslate = document.querySelector('#textToTranslate');
let textTranslated = document.querySelector('#textTranslated');

//Variables
let source_language = 'es';
let target_language = 'af';

//conseguir datos del servidor
fetch(URL_API, OPTIONS)
	.then(response => response.json()) //obtengo los datos y utilizo el metodo json
	.then(objeto => {
        let languages = objeto.data.languages;
        //llenar los Select
        languages.forEach(element => {
            translateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
            translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
        });
        translateFrom.addEventListener('click', () => {
            //console.log(translateFrom.value);
            source_language = translateFrom.value;
        });
        translateTo.addEventListener('click', () => {
            target_language = translateTo.value;
        });
        }
    )
	.catch(err => console.error(err)); //en caso de error

//**Obtener datos del cliente, enviar al servidor y mostrar resultado:**
    //Recoger datos:
translateBtn.addEventListener('click', () => {
            //console.log(textToTranslate.value);
            let valueTextToTranslate = textToTranslate.value;
            //source_language = 
            //Fetch al servidor con los datos del cliente:
            const encodedParams = new URLSearchParams();
            console.log(source_language)
            console.log(target_language)
            encodedParams.append("source_language", source_language);
            encodedParams.append("target_language", target_language);
            encodedParams.append("text", valueTextToTranslate);
            
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '81b9ed665cmsh67ebb482f54cb5fp16e9b6jsn429bcd1c55a5',
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                },
                body: encodedParams
            };
            
            fetch('https://text-translator2.p.rapidapi.com/translate', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response.data.translatedText)
                    textTranslated.innerText = response.data.translatedText;
                })
                .catch(err => console.error(err));
        }
);

