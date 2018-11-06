
//AOS css setting
AOS.init({
	duration: 800,
	once: true, 
});


/* Navbar 色変化、送信ボタンAnimation、Update文章表示 */
$(document).ready(function(){ 
    var scroll_pos = 0;
    var mainTop = $("#contentTop").offset().top; /* メインが始まる箇所指定 */

    /* Change Navbar color on Scroll */
    $(document).on('scroll', function() { 
        scroll_pos = $(this).scrollTop();
        headerChange(scroll_pos);
    });

    headerChange($(document).scrollTop());    

    function headerChange (scroll_pos){
	    if(scroll_pos > mainTop-70) {
	        $(".navbar").addClass('fade-in');
	        $(".navbar").removeClass('fade-out');
	        $(".nav--item__menu").addClass('change-color');
	        $(".company-name__text").addClass('change-color');
	    } else {
	    	$(".navbar").addClass('fade-out');
	        $(".navbar").removeClass('fade-in');
	        $(".nav--item__menu").removeClass('change-color');
	        $(".company-name__text").removeClass('change-color');
	    }
	}

	/* 紙飛行機を飛ばす*/
	  $('#contactForm').on('submit', function () {
	  	$('#paperPlane').attr("src","image/plane.png")
	    $('.paperplane').addClass('fly-animation');
	  });

	/* Updateの中身を表示 */
	  $('.update-toggle').on('click',function(){
	  	$(this).parent().nextAll('').slideToggle('fast');
	  });
});

/* navbarのメニューが押されたらその位置までスクロールアニメーションを出しながら移動する */
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});

/* ハンバーガーメニューのアニメーション */
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menuBar = true;

// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
	hamburger.classList.toggle("is-active");
// Do something else, like open/close menu

	if(menuBar == true){
	    document.getElementById("mySideNav").style.width = "250px";
	    menuBar = false;
    //if menuBar = true （つまり最初の状態)なら、３つの条件を変えた後、falseに切り替え
    
    } else {
        document.getElementById("mySideNav").style.width = "0px";
        menuBar = true;
        //else(もしそれ以外、つまりvar menuBar = true でないなら) menuBarをtrueに切り替える。menuBarはfalseに切り替えられたので、適用される。
    }
	
});

/* Close Side Nav on outside Click */
$(document).click(function(event) {
 
  if (!$(event.target).closest(".sidenav, #hamburgerBtn").length) {
  	hamburger.classList.remove("is-active");
    document.getElementById("mySideNav").style.width = "0";
    menuBar = true;
  }
});
/* ハンバーガーメニューのアニメーション ここまで*/

//toggle Service ドロップダウンメニュー
$("#toggleDropdown").on('click', function(){
    $(".nav--item__sub").toggleClass("open-submenu");
    $(".triangle").toggleClass('open-submenu');
});

//toggle SideNav サブメニュー
$("#toggleSubmenu").on('click', function(){
    $(".sidenav--submenu").toggleClass("open-submenu");
});


/* リンク先がないものに「ページ準備中」の表示 */
/*var serviceImg = document.getElementsByClassName('service-gallery__link');

for(var j = 0, jLen = serviceImg.length; j < jLen; j++){
	serviceImg[j].addEventListener('click', Alert);
}*/

function Alert (){
	alert("Page Not Available.\n" + "ページ準備中");
}


/* モーダル JAVASCRIPT ここから*/
var obj = {

	1: {
		header: "#FF6103",
		firstname: "HIROMOTO",
		lastname: "NAKAHARA",
		title: "CEO",
		image: "image/member/george.png",
		message: "image/member/nakahara.jpg",
		text: "モーダルを表示させたとき、何も考えずにコーディングするとモーダルをスクロールしたいのに背景までスクロールされちゃう、なんてことに陥りがち。",
	},

	2: {
		header: "#FFCC11",
		firstname: "MOTOKI",
		lastname: "HIGASHI",
		title: "Director / Frontend Engineer",
		image: "image/member/higashi2.png",
		message: "image/member/higashimsg.png",
		text: "ディレクター兼フロントエンドエンジニア。マルチなクリエイターを目指しています。唐揚げとビールが大好きです。",
	},

	3: {
		header: "#e00000",
		firstname: "YU",
		lastname: "NAKAJI",
		title: "Full-stack Developer / Motorcycle Enthusiast / Guitarist",
		image: "image/member/nakaji2.png",
		message: "image/member/nakajimsg.png",
		text: "バイクとキャンプが生きがいの放浪人。目指すは生涯自由人。ツナ缶大好き。",
	},

	4: {
		header: "#3BA6DE",
		firstname: "SEIYA",
		lastname: "FUJIOKA",
		title: "Web Designer",
		image: "image/member/fujioka2.png",
		message: "image/member/fujiokamsg.png",
		text: "どうも僕です。趣味は世の中にあるクリエイティブ全般の「どのように意図してこのコンテンツは作られたか」というネタを追いかける事。映画であったりゲームであったり文化であったり・・・色んな分野のちょっとした裏話を日々探し続けています。",
	},

	5: {
		header: "",
		firstname: "YU",
		lastname: "MATSUSHIMA",
		title: "IT Specialist",
		image: "",
		message: "",
		text: "",
	},

	6: {
		header: "#5ee5cc",
		firstname: "RISA",
		lastname: "TAJIMA",
		title: "Engineer / Guitarist",
		image: "image/member/tajima2.png",
		message: "image/member/tajimamsg.png",
		text: "たじまです。3度の飯より猫が好きです。休日は飼っている猫をよく食べています。音楽も好きです。たまにギターを弾きます。まだまだ未熟者です。よろしくお願いします。",
	},

	7: {
		header: "#09DD09",
		firstname: "TAKAHIRO",
		lastname: "MARUYAMA",
		title: "Engineer",
		image: "image/member/takahiro2.png",
		message: "image/member/takahiromsg.png",
		text: "名駅のラッシュ時に歩くことが多いせいで無駄に人を避けて進むスキルがついた。例えば自分の進行方向に対して垂直に歩いてくる人と、「このままだとぶつかる!」って思ったら、その人目指して歩くと日体大の集団行動みたいにギリギリですれ違える。",
	},

	8: {
		header: "#f39c12",
		firstname: "HIROTO",
		lastname: "WATANABE",
		title: "Frontend Engineer (Part-time)",
		image: "image/member/watanabe2.png",
		message: "image/member/watanabemsg.png",
		text: "主にフロントエンドの開発に携わっています。Webに関することたくさん勉強します。よろしくお願いします。",
	},

	9: {
		header: "#ffc107",
		firstname: "RYOJI",
		lastname: "NODA",
		title: "Web Developer (Part-time)",
		image: "image/member/noda2.png",
		message: "image/member/nodamsg.png",
		text: "じーよです。これからWeb業界を知るために羽ばたいていきまーーーす。",
	},
}

//class="modal-btn" がついた a タグにopenModal()をつける ここから---
var modal = document.getElementById('modal');

var modalBtns = document.getElementsByClassName('modal-btn');

for(var i = 0, iLen = modalBtns.length; i < iLen; i++) {
	modalBtns[i].addEventListener('click', openModal);
}
//---ここまでの処理


//var closeBtn = document.getElementsByClassName('closeBtn')[0]; //現在使われていない

var header = document.getElementById("modalHeader");
var firstName = document.getElementById("modalFn");
var lastName = document.getElementById("modalLn");
var title = document.getElementById("modalTitle");
var image = document.getElementById("modalImage");
var message = document.getElementById("modalMessage");
var text = document.getElementById("modalText");
var current_scrollY;

//closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);


function openModal (){
	
		var i = $(this).attr("data-type");

		header.style.background = obj[i]['header'];
		firstName.innerText = obj[i]['firstname'];
		lastName.innerText = obj[i]['lastname'];
		title.innerText = obj[i]['title'];
		image.setAttribute("src", obj[i]['image']);
		message.setAttribute("src", obj[i]['message']);
		text.innerText = obj[i]['text'];

		//スクロール止める
		current_scrollY = $( window ).scrollTop(); 
		$( '#wholePage' ).css({
		    top: -1 * current_scrollY
		 });

		$('#wholePage').addClass('prevent-scroll');

		modal.style.display = 'block';

}

// Function to close modal
function closeModal(){

	if ( modal.style.display === "block" ){
	    $( '#wholePage' ).removeClass('prevent-scroll');
	    $( 'html, body' ).prop( { scrollTop: current_scrollY } );
	    modal.style.display = 'none';
	}
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    closeModal();
  }
}

/* モーダル JAVASCRIPT ここまで*/




