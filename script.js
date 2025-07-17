document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play().catch(e => {
        console.log("Ses çalmadı, kullanıcı etkileşimi gerekli olabilir.");
    });

    // Buraya zambak animasyonu ve havai fişek efektleri eklenebilir
});
