console.log('Get me a sausage!');

function handleError(err) {
  console.log('Algo falló...');
  console.log(err);
}

const randomImgEl = document.querySelector('.randomImg');
const api = 'https://dog.ceo/api/breed/dachshund/images/random';

function traerSalchi() {
  const apiPromise = fetch(api);
  randomImgEl.textContent = 'Buscando un salchicha...';
  apiPromise
    .then(response => {
      return response.json();
    })
    .then(data => {
      randomImgEl.innerHTML = `<img src=${
        data.message
      } alt="A random dachshund photo">`;
    })
    .catch(handleError);
}
