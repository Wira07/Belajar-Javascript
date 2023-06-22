function otpGenerate() {
  let optShow = document.getElementById("otp");
  let digts = "0123456789";
  let otp = "";

  // Generate 4 digit OTP

  for (let i = 0; i < 4; i++) {
    otp += digts[Math.floor(Math.random() * 10)];
  }

  optShow.innerHTML = "<span></span>";

  setTimeout(() => {
    optShow.innerHTML = otp;
  }, 100);
}
