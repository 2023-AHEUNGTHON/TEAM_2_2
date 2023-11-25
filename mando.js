//만두틀 -> 만두로 변경 후 유지
function changeMandoImage(id) {
  var mold = document.getElementById(id);

  var randomImage = Math.random();
  var newSrc;

  if (mold.src.includes("mold.png")) {
    if (randomImage < 0.5) {
      newSrc = "white_mando.png";
    } else {
      newSrc = "yellow_mando.png";
    }

    // 변경된 이미지 정보 저장 id값에 따라
    localStorage.setItem("mandoImageSrc_" + id, newSrc);

    mold.src = newSrc;

    setTimeout(function () {
      window.location.href = "write.html";
    }, -1);
  }
}

//저장된 이미지 소스가져오기 -> 변경된 이미지 유지되도록
window.onload = function () {
  for (var i = 1; i <= 9; i++) {
    var storedSrc = localStorage.getItem("mandoImageSrc_mold" + i);
    if (storedSrc) {
      var mold = document.getElementById("mold" + i);
      mold.src = storedSrc;
    }
  }
};

//reset 만두틀
function resetImages() {
  for (var i = 1; i <= 9; i++) {
    var mold = document.getElementById("mold" + i);
    var storedSrc = localStorage.getItem("mandoImageSrc_mold" + i);

    if (storedSrc && !storedSrc.includes("mold.png")) {
      mold.src = "mold.png";
      localStorage.removeItem("mandoImageSrc_mold" + i);
    }
  }
}

document.getElementById("reset").addEventListener("click", resetImages);

//만두 리셋 경고창
const reset = document.getElementById("reset");
const resetGuide = document.getElementById("reset-guide");

reset.addEventListener("mouseover", function () {
  resetGuide.style.display = "block";
});

reset.addEventListener("mouseout", function () {
  resetGuide.style.display = "none";
});

//링크 복사
function copyLink() {
  const currentPageUrl = window.location.href; // 현재 페이지의 URL

  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = currentPageUrl;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  
}

//링크가 복사될 떄
function showLinkAlert() {
  const linkAlert = document.getElementById("link-alert");

  if (linkAlert.style.display === "none") {
    linkAlert.style.display = "block"; // 링크 알림 보이기
    // 일정 시간이 지난 후에 다시 숨김 처리
    setTimeout(function () {
      linkAlert.style.display = "none";
    }, 2000);
  } else {
    linkAlert.style.display = "none";
  }
}
