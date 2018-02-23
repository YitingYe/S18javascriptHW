function validate(){
  var code = document.getElementById("nric").value;
  if (code == ""){
    alert("內容是空的");
  }else if (!isNaN(code)){
    alert("內容只有數字");
  }else if (code.length != 10){
    alert("長度不正確");
  }else{
    if (code.toString()[1] == 1){
      document.getElementById("result").innerHTML = "男生通過驗證";
    }else if (code.toString()[1] == 2){
      document.getElementById("result").innerHTML = "女生通過驗證";
    }else{
      alert("身分證字號有誤");
    }
  }
}