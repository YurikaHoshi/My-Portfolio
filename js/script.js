const menuOpen = document.getElementById("js-open-menu");
const menuClose = document.getElementById("js-close-menu");
const menuPanel = document.getElementById("menu-panel");
//アニメーションのオプション
const menuOptions = {
    duration: 1200,   //アニメーションの再生時間。1.2秒。
    easing: 'ease',   //開始時と終了時は緩やかに変化させる
    fill: 'forwards', //アニメーション再生後、最後のキーフレーム状態を保持する
}

//メニューを開く
menuOpen.addEventListener('click', () => {
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);
});

//メニューを閉じる
menuClose.addEventListener('click', ()=>{
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});