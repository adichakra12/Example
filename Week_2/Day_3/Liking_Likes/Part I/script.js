function incrementLike(){
    var element = document.getElementById('numLikes');
    var value = element.innerHTML;

    ++value;

    document.getElementById('numLikes').innerHTML = value;
}