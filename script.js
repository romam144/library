
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputPages = document.getElementById('pages');
const sumbitbtn = document.getElementById('submitbtn');
const exitbtn = document.getElementById('exitmodal')
const library = document.getElementById('library');
const form = document.getElementById('form')
const pageMask = document.getElementById('page-mask')
const cover = document.getElementById('cover')

const readCheck = false;

sumbitbtn.textContent = 'Add'


exitbtn.addEventListener('click', test)

function test(){
    $(".modal").hide()
    $(".cover").hide()
}

form.addEventListener('submit', newBook);


$('#addbtn').click(function() {
    $(".cover").add
    var backdropHeight = $(document).height();
    $('#cover').css('height', backdropHeight);
    $('#cover').fadeIn(100, function() {
      $('#modal').fadeIn(200);
    });
  });
  


function openForm(){
    document.getElementById("popupForm").style.display = "block"
    
}

function closeForm(){
    document.getElementById("popupForm").style.display = "none"

}


let myLibrary = [];

function Book(name, author, pages, read){
    //constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(bookcard){
    library.appendChild(bookcard)
}

function newBook(){
    const book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, readCheck)
    myLibrary.push(book)
    createInfo()

}


function createInfo(){
    event.preventDefault();

    myLibrary.forEach(book => {
        let {name, author, pages, read} = book;


        if(/^[A-Za-z0-9]*$/.test(name) === true && /^[A-Za-z0-9]*$/.test(author) === true &&  pages!== ''){
            const card = document.createElement('div');
            card.classList.add('card');
        
            const titleElement = document.createElement('h2')
            const authorElement = document.createElement('h2')
            const pagesElement = document.createElement('h2')
            const readElement = document.createElement('button')
            const removeBtn = document.createElement('button');
    
            readElement.classList.add("readbtn")
        
            titleElement.textContent = name;
            authorElement.textContent = author;
            pagesElement.textContent = pages;
        
            removeBtn.textContent = 'Delete'
            removeBtn.classList.add("removebtn");
    
    
            card.appendChild(titleElement)
            card.appendChild(authorElement)
            card.appendChild(pagesElement)
            card.appendChild(readElement)
            card.appendChild(removeBtn)
        
            //add bookcard to the library
        
            addBookToLibrary(card)
        
            removeBtn.addEventListener('click' , () => card.remove())
    
            fadeoutAll()
    
            
            readElement.addEventListener('click', function () {
                readElement.classList.toggle('hasread')
    
                //change readStatus//
                if(read === true){
                    read = false;
                }else if(read === false){
                    read = true
                }
                console.log(read)
            })
    
    
            
            
    
        }else {
            alert("Something is wrong with the info you entered! might check it out")
        }
    })

    

    clearLastForm()


}




function clearLastForm(){
    inputTitle.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
}


function fadeoutAll(){
    $('#modal').fadeOut(200, function() {
            
        $('#cover').fadeOut(100);
        closeForm()
        
    });
}