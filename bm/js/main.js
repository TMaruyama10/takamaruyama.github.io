//listen for form submit

var myForm = document.getElementById("myForm")
myForm.addEventListener('submit', saveBookmark);
 

 function saveBookmark(e) {
 	//console.log();

 	//Get form values
 	var siteName = document.getElementById("siteName").value;
 	var siteUrl = document.getElementById("siteUrl").value;

 	if(!validateForm(siteName,siteUrl)){
 		return false;
 	}

 	var bookmark = {
 		name: siteName,
 		url: siteUrl
 	}

 	//Local storage (テキストしか保存できない) Storage 大文字！！
 	/*localStorage.setItem('test', 'hello');
 	console.log(localStorage.getItem("test"));
 	localStorage.removeItem("test");
 	console.log(localStorage.getItem("test"));*/

//もしbookmarks が空なら 新たにbookmarks のarrayをつくり、bookmark(siteName siteUrl) をLSに保存
 	if(localStorage.getItem('bookmarks') === null ){

 		var bookmarks = [];
 		bookmarks.push(bookmark); //bookmarksに bookmarkの値入れる
 		localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); // LSにJSON文字列形式で保存

 	}  else {

 		var bookmarks = JSON.parse(localStorage.getItem('bookmarks')); //文字列をjavascript objectに変換
 		bookmarks.push(bookmark);
 		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
 	}

 	//clear form
 	document.getElementById('myForm').reset();
 	
 	fetchBookmarks();

 	//送信してページ外に送信されるのを阻止
 	e.preventDefault();
 }

 function fetchBookmarks() {
 	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

 	//Get output id
 	var bookmarksResults = document.getElementById("bookmarksResults");
 	bookmarksResults.innerHTML = "";

 	for (var i = 0; i < bookmarks.length; i++){
 		var name = bookmarks[i].name;
 		var url = bookmarks[i].url;

 		bookmarksResults.innerHTML +=   "<div class='well'>" +
 										"<h3>" + name + 
 										"<a class='btn btn-default' target=_blank href='" + url + "'>Visit</a>" + 
 										'<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>' + 
 										"</h3>" +
 										"</div>";
 	}

 }


function deleteBookmark(url) {
	//Get bookmark from local storage
	var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

	for (var i = 0; i < bookmarks.length; i++) {
		if(bookmarks[i].url == url){
			//Array.splice(x, 1) will remove the xth element in the array
			bookmarks.splice(i, 1);
		}
	}

	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	fetchBookmarks();

}


function validateForm (siteName, siteUrl){

	if(!siteName || !siteUrl){
 		alert("Please fill in the form.");
 		return false;
 	} 

 	//regular expression (regex) 正しいフォーマットかチェックすることができる
 	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!siteUrl.match(regex)){
		alert("Please use a valid URL.");
		return false;
	}

	return true;
}

 //34:33  learn javascript by building a bookmarker application
















