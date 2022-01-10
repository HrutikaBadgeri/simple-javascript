const calculator = () => {
  let tc = document.getElementById("tc").value;
  let dw = document.getElementById("dw").value;
  let cn = document.getElementById("cn").value;
  let ip = document.getElementById("ip").value;
  let se = document.getElementById("se").value;
  let bc = document.getElementById("bc").value;
  let grades = "";

  totalGrades =
    parseFloat(tc) +
    parseFloat(dw) +
    parseFloat(cn) +
    parseFloat(ip) +
    parseFloat(se) +
    parseFloat(bc);
  console.log(totalGrades);
  let perc = (totalGrades / 600) * 100;
  console.log(perc);
  //to check the grade of the sstudent from A to F
  if (perc <= 100 && perc >= 80) {
    grades = "A";
  } else if (perc <= 79 && perc >= 60) {
    grades = "B";
  } else if (perc <= 59 && perc >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }
  // To check if the student is pass or fail
  if (perc >= 40) {
    // console.log('pass hogaya')
    document.getElementById(
      "showdata"
    ).innerHTML = `Out of 600 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You have passed`;
  } else {
    document.getElementById(
      "showdata"
    ).innerHTML = `Out of 600 your total is ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You have not passsed`;
  }
};
