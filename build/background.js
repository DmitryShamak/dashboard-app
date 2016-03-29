(function() {
    var interval = null,
        count = 0;

    interval = setInterval(function() {
        var target = document.getElementById("container");
        if(target) {
            target.innerHTML = "Welcome" + count;
            alert(count);
            count++;
        }
    }, 2000);
})();