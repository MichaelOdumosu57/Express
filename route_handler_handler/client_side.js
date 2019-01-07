function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.readyState)
​
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;
      console.log(   this.responseText   )
    }
  };
  /////////////////////////////////////////////////////////////
  xhttp.open("PUT", "http://localhost:3000/book", true);
   xhttp.send(JSON.stringify({
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa": "b"
  }));
  ///////////////////////////////////////////////////////////
  
}
