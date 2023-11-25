/*function saveAndSend() {
    var title = document.getElementById('memoTitle').value;
    var text = document.getElementById('memoText').value;

    fetch('/url/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, text: text }),
    })
}*/
//메인 페이지로 이동
function goMando() {
    window.location.href = 'mando.html';
  }

  const uploadInput = document.getElementById('uploadInput');
  const uploadTrigger = document.getElementById('uploadTrigger');
  const imgPreview = document.querySelector('.img-preview');
  
  uploadTrigger.addEventListener('click', () => uploadInput.click());
  
  uploadInput.addEventListener('change', function() {
    const file = this.files[0];
  
    if (!file.type.match('image/.*')) {
      alert('이미지 파일만 업로드가 가능합니다.');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.classList.add('preview-image');
  
      img.onload = function() {
        URL.revokeObjectURL(img.src); // 이미지 로드 후 URL 해제
      };
  
      imgPreview.innerHTML = ''; 
      imgPreview.appendChild(img); // 업로드된 이미지를 미리보기 영역에 추가
    };
  
    reader.readAsDataURL(file);
  });