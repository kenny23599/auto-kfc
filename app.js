

  function openhome(){
    let matric_input = document.getElementById('matric-number').value;
    let year = matric_input.slice(5,7);
    let new_year = Number(year)
    let num = matric_input.slice(12);
    let new_num = Number(num)
      
    if (matric_input == "kasu/"+`${new_year}`+ "/csc/" + `${new_num}`){
         document.location='home.html'
    }

    else if(matric_input == "KASU/"+`${new_year}`+ "/CSC/" + `${new_num}`){
      document.location='home.html'
    }
    else if(matric_input == "Kasu/"+`${new_year}`+ "/csc/" + `${new_num}`){
      document.location='home.html'
    }
    else{
      alert('wrong input');
    
    }
  }


 function openlogin() {
    document.getElementById("form-div").style.display = "none";
    document.getElementById("log-div").style.display = "block";
  }
  
  function opensignup() {
    document.getElementById("form-div").style.display = "block";
    document.getElementById("log-div").style.display = "none";
  }
  
  //HOME PAGE JAVASCRIPT//

  function home(){
    document.location='home.html'
  }
  function Registration(){
    document.location='Registration.html'
    
  }

  function LectureNote( ){
    document.location='Lecture-Note.html'
  }
  function calculator(){
    document.location='Calculator.html'
  }
  function tutorial(){document.location='Toturial-videos.html'}
  function courseReg() {document.location='Course-registration.html'}

  