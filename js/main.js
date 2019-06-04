window.onload = function(){
    var leftClick = document.getElementById("bannerLeftArrow");
    var rightClick = document.getElementById("bannerRightArrow");
    var photo = document.getElementById("banner");
    var idx = 1;
    var timeRecord = null;

    startTimer();

    function showLeftPic(){
        idx--;
        if (idx < 1){
            idx = 5;
        }
        refreshDisplay();
    }

    function showRightPic(){
        idx++;
        if (idx > 5){
            idx = 1;
        }        
        refreshDisplay();
    }
    leftClick.addEventListener("click", showLeftPic);
    rightClick.addEventListener("click", showRightPic);

    function refreshDisplay(){
        photo.style.backgroundImage = 'url("img/banner'+ idx +'.jpg")';
        clearInterval(timeRecord);
        startTimer();
    }


    function startTimer(){
        timeRecord = setInterval(function(){
            idx++;
            if (idx > 5){
                idx = 1;
            }
            photo.style.backgroundImage = 'url("img/banner'+ idx +'.jpg")';
        }, 5000);
    }
}