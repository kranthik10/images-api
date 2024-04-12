const api_key = 'USE_OWN_API_KEY'
const limit = 5
const apiURL = `https://api.unsplash.com/photos/?client_id=${api_key}&count=${limit}`


const imageContainer = document.getElementById("image-container")
const loader = document.getElementById("loader")

let imagesData = [];


// creating elements 

function displayImages(){
      imagesData.forEach((image) => {
        // <a> element
        const aElement = document.createElement('a');
        aElement.setAttribute('href',image.links.html);
        aElement.setAttribute('target','_blank');

        // <img> element
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src',image.urls.regular);
        imgElement.setAttribute('alt',image.alt_description)
        imgElement.setAttribute('title',image.alt_description)

        // appending the elements which are created above
        aElement.appendChild(imgElement);
        imageContainer.appendChild(aElement);

         

      });
}

async function getImages(){
    try {

        const response = await fetch(apiURL);
        imagesData = await response.json()
        
        displayImages()
        
        
    } catch (error) {
        console.log(error);
    }
}

// function to get the images on load
getImages();


window.addEventListener('scroll',()=>{

   if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000){
    
   }
})

