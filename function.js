


function flashcardGit(){ 
    var url = 'https://github.com/Aditi09-kothari/Flashcard_Generator';
    window.open(url, '_blank');
}

function flashcardLive(){
    var url = 'https://vermillion-horse-067206.netlify.app/';
    window.open(url, '_blank');
}

function YoutubeGit(){
    var url = 'https://github.com/Aditi09-kothari/youtubeSubscriber_project_backend';     
    window.open(url, '_blank');

}

function youtubeLive(){ 
    var url = 'https://steady-bublanina-e47106.netlify.app/';
    window.open(url, '_blank');
}


document.getElementById('downloadButton').addEventListener('click', function() {
            var pdfPath = '/assets/cv/cv.pdf';
            var link = document.createElement('a');
            link.href = pdfPath;
            link.download = 'Aditi.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
