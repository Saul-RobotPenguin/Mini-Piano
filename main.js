document.onkeydown = keyDownEvent;
document.onkeyup = keyUpEvent;

function playSound(url) {
  new Audio(url).play();
}

// Key Number 1
function keyDownEvent(one) {
  if (one.keyCode == 49) {
    document.getElementsByClassName("key")[0].classList.add("active");
    document.getElementById("audio").play();
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
    }
  } else if (one.keyCode == 50) {
    document.getElementsByClassName("key2")[0].classList.add("active");
    document.getElementById("audio2").play();
    if (audio2.paused) {
      audio2.play();
    } else {
      audio2.currentTime = 0;
    }
  } else if (one.keyCode == 51) {
    document.getElementsByClassName("key3")[0].classList.add("active");
    document.getElementById("audio3").play();
    if (audio3.paused) {
      audio3.play();
    } else {
      audio3.currentTime = 0;
    }
  } else if (one.keyCode == 52) {
    document.getElementsByClassName("key4")[0].classList.add("active");
    document.getElementById("audio4").play();
    if (audio4.paused) {
      audio4.play();
    } else {
      audio4.currentTime = 0;
    }
  } else if (one.keyCode == 53) {
    document.getElementsByClassName("key5")[0].classList.add("active");
    document.getElementById("audio5").play();
    if (audio5.paused) {
      audio5.play();
    } else {
      audio5.currentTime = 0;
    }
  } else if (one.keyCode == 54) {
    document.getElementsByClassName("key6")[0].classList.add("active");
    document.getElementById("audio6").play();
    if (audio6.paused) {
      audio6.play();
    } else {
      audio6.currentTime = 0;
    }
  } else if (one.keyCode == 55) {
    document.getElementsByClassName("key7")[0].classList.add("active");
    document.getElementById("audio7").play();
    if (audio7.paused) {
      audio7.play();
    } else {
      audio7.currentTime = 0;
    }
  } else if (one.keyCode == 56) {
    document.getElementsByClassName("key8")[0].classList.add("active");
    document.getElementById("audio8").play();
    if (audio8.paused) {
      audio8.play();
    } else {
      audio8.currentTime = 0;
    }
  } else if (one.keyCode == 57) {
    document.getElementsByClassName("key9")[0].classList.add("active");
    document.getElementById("audio9").play();
    if (audio9.paused) {
      audio9.play();
    } else {
      audio9.currentTime = 0;
    }
  } else if (one.keyCode == 48) {
    document.getElementsByClassName("key10")[0].classList.add("active");
    document.getElementById("audio10").play();
    if (audio10.paused) {
      audio10.play();
    } else {
      audio10.currentTime = 0;
    }
  }
}
function keyUpEvent(one) {
  if (one.keyCode == 49) {
    document.getElementsByClassName("key")[0].classList.remove("active");
  } else if (one.keyCode == 50) {
    document.getElementsByClassName("key2")[0].classList.remove("active");
  } else if (one.keyCode == 51) {
    document.getElementsByClassName("key3")[0].classList.remove("active");
  } else if (one.keyCode == 52) {
    document.getElementsByClassName("key4")[0].classList.remove("active");
  } else if (one.keyCode == 53) {
    document.getElementsByClassName("key5")[0].classList.remove("active");
  } else if (one.keyCode == 54) {
    document.getElementsByClassName("key6")[0].classList.remove("active");
  } else if (one.keyCode == 55) {
    document.getElementsByClassName("key7")[0].classList.remove("active");
  } else if (one.keyCode == 56) {
    document.getElementsByClassName("key8")[0].classList.remove("active");
  } else if (one.keyCode == 57) {
    document.getElementsByClassName("key9")[0].classList.remove("active");
  } else if (one.keyCode == 48) {
    document.getElementsByClassName("key10")[0].classList.remove("active");
  }
}
