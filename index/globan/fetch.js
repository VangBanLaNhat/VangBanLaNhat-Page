function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
    // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function fetchh () {
  var input = document.querySelector('#inputt').value;
  if(input != "" && (input >= 100000000000000 && input < 200000000000000) || (input >= 100000000 && input < 1000000000)){
    document.getElementById('err').style.display= 'none';
    document.getElementById('err').style.transform= 'translateY(10px)';
    document.getElementById('err').style.color="yellow";
    var errorr = document.querySelector('#errorr')
    errorr.innerHTML="Đang tải dữ liệu, bạn chờ tí nhé..."
    document.getElementById('err').style.display= 'block';
    var url = `https://api.vangbanlanhat.tk/ban?mode=check&id=${input}`
    var info = document.querySelector('.info')
    var uid = document.querySelector('.uid');
    var uidd = document.querySelector('.uidd');
    var reason = document.querySelector('.reason');
    var proof = document.querySelector('.proof');

    fetch(url).then(function(fe) {
      document.getElementById('err').style.display= 'none';
      fe.json().then(function(json) {
        if(json.reason != undefined){
          uid.innerHTML = "UID: "+input;
          reason.innerHTML = "Reason: "+json.reason;
          proof.innerHTML = "Proof: "+json.proof;
          document.getElementById('info1').style.display= 'none';
          document.getElementById('info').style.display= 'block';
        }
        else{
          uidd.innerHTML = input;
          document.getElementById('info').style.display= 'none';
          document.getElementById('info1').style.display= 'block';
        }
      })
    })
  }
  else{
    document.getElementById('info').style.display= 'none';
    document.getElementById('info1').style.display= 'none';
    document.getElementById('err').style.color="red";
    document.getElementById('err').style.transform= 'translateY(0px)';
    document.getElementById('err').style.display= 'block';
    var errorr = document.querySelector('#errorr')
    errorr.innerHTML="Vui lòng nhập đúng định dạng UID Facebook.<br>Ví dụ: 100012345678987"
  };
  document.getElementById('inputt').value = "";
}

const search = document.querySelector('.search .icon')
search.onclick = function () {
  fetchh()
}

function searchh(e) {
  if (e.keyCode = 13){
    fetchh()
  }
}

var url = `https://api.vangbanlanhat.tk/ban?mode=check&id=1`

fetch(url).then(function(fe) {
      fe.json().then(function(json) {
        var length = document.querySelector('.lenght');
        length.innerHTML = "Hiện có <strong>"+json.length+"</strong> người dùng vi phạm được thêm vào VBLNBan";
      })
    })
