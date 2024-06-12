// الوصول إلى عناصر HTML
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const context = canvas.getContext('2d');

// طلب إذن المستخدم لاستخدام الكاميرا
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("خطأ في الوصول إلى الكاميرا: " + err);
    });

// التقاط صورة عند الضغط على زر "التقاط صورة"
snap.addEventListener('click', () => {
    context.drawImage(video, 0, 0, 640, 480);
});
