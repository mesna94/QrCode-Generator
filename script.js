const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;
 // console.log(url,size); to check 
   //validate
  if(url==='') { // if url is empty
    alert('Please enter a URL');
  }else{ // if url isnt empty
    showSpinner(); // fn call
    setTimeout(() => {
        hideSpinner();  // to hide after 1s
        generateQRCode(url,size);
       // to get img src to download
       setTimeout( () => {
        const saveUrl = qr.querySelector('img').src;
        createSaveBtn(saveUrl); // fn call
         
       }, 50);
        
    }, 1000);
  }
};


// Generate QRCode
const generateQRCode = (url,size) => {
const qrcode = new QRCode('qrcode', {
  text: url,
	width: size,
	height: size,
});
};zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


const showSpinner = () => { // fn def showSpinner
    document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => { //fn def hideSpinner
    document.getElementById('spinner').style.display = 'none';
};
//clear UI
const clearUI = () => {
  qr.innerHTML='';
  // to clear old save btn
  const saveLink = document.getElementById('save-link');
  if(saveLink){
     saveLink.remove();
  }

};
// creating save btn with js 
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
};


form.addEventListener('submit', onGenerateSubmit);
