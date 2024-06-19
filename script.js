document.getElementById('download-btn').addEventListener('click', function() {
    var disclaimer = document.getElementById('disclaimer');
    disclaimer.classList.remove('hidden');
    setTimeout(function() {
        window.location.href = 'https://mega.nz/folder/MmoT3QpY#Uh6a7oTwOKZ2uawZU8kxSg';
    }, 3000);
});

// Optionally, remove the following mousemove event listener or modify it not to affect body transformation
/*
document.addEventListener('mousemove', function(e) {
    var disclaimer = document.getElementById('disclaimer');
    if (!disclaimer.classList.contains('hidden')) {
        return;
    }

    var body = document.querySelector('body');
    var x = (e.clientX / window.innerWidth) - 0.5;
    var y = (e.clientY / window.innerHeight) - 0.5;
    body.style.transform = 'translate(' + x * 10 + 'px, ' + y * 10 + 'px)';
});
*/
