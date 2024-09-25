
document.getElementById("btn-blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
document.getElementById("btn-home").addEventListener("click", function () {
  window.location.href = "./index.html";
});
document.getElementById("btn-history").addEventListener("click", function () {
  viewHideToggle("history-data");
  const historyButton = document.getElementById("btn-history");
  historyButton.classList.add(
    "bg-lime-400", "px-5", "py-2", "rounded-lg", "font-semibold", "border-2", "border-lime-400"
  );
  const donateButton = document.getElementById("btn-donate");
  donateButton.classList.remove(
    "bg-lime-400", "px-5", "py-2", "rounded-lg", "font-semibold", "border-2", "border-lime-400"
  );
  donateButton.classList.add(
    "border-2", "px-5", "py-2", "rounded-lg", "font-semibold"
  );
});

document.getElementById("btn-donate").addEventListener("click", function () {
  viewHideToggle("card-section");
  const historyButton = document.getElementById("btn-history");
  const donateButton = document.getElementById("btn-donate");
  historyButton.classList.remove(
    "bg-lime-400", "px-5", "py-2", "rounded-lg", "font-semibold", "border-2", "border-lime-400"
  );
  historyButton.classList.add(
    "border-2", "px-5", "py-2", "rounded-lg", "font-semibold"
  );
  donateButton.classList.add(
    "bg-lime-400", "px-5", "py-2", "rounded-lg", "font-semibold", "border-2", "border-lime-400"
  );
});

document.getElementById("donate-now-btn-noakhali")
  .addEventListener("click", function () {
    const addMoney = getValueByIdFromInput("donate-For-noakhali-input");
    const donarBalance = donationValueAmount("main-balance");
    if (addMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (addMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }

    if (isNaN(addMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const getMoney = donationValueAmount("donation-balance-Noakhali-has");
    const donateBalanceISNow = donarBalance - addMoney;
    document.getElementById("main-balance").innerText = donateBalanceISNow;
    const totalDonationGetNoakhali = addMoney + getMoney;
    document.getElementById("donation-balance-Noakhali-has").innerText =
      totalDonationGetNoakhali;
    //!pop up Button
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });

    const div = document.createElement("div");
    div.innerHTML = `
            <p class ='p-3 text-lg border-2 border-gray-400 m-3 rounded-xl'> ${addMoney} tk is donated for famine-2024 at<span class ="text-amber-400 text-lg font-semibold"> Noakhali, Bangladesh</span>.<br>
            date:  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
        `;
    document.getElementById("transaction-container").appendChild(div);
  });

//!Donate for Flood Relief in Feni,Bangladesh

document.getElementById("donate-btn-for-feni")
  .addEventListener("click", function () {
    const inputMoney = getValueByIdFromInput("donate-feni-input");
    const donarBalance = donationValueAmount("main-balance");

    if (inputMoney > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (inputMoney <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(inputMoney)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const feniHasBalance = donationValueAmount("donation-balance-feni");
    const donateBalanceISNow = donarBalance - inputMoney;
    document.getElementById("main-balance").innerText = donateBalanceISNow;
    const totalDonationGetFeni = inputMoney + feniHasBalance;
    document.getElementById("donation-balance-feni").innerText =
    totalDonationGetFeni;

    //pop up Button added
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });

    const div = document.createElement("div");
    div.innerHTML = `
                <p class ='p-3 text-lg border-2 border-gray-400 m-3 rounded-xl'> ${inputMoney} tk is donated for flood relief-2024 at <span class ="text-lime-400 font-semibold">Feni, Bangladesh</span>.<br>
                 date:  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });

//Quota Movement
document.getElementById("donate-for-student")
  .addEventListener("click", function () {
    const donateForStudent = getValueByIdFromInput("donate-amount-input");
    const donarBalance = donationValueAmount("main-balance");

    if (donateForStudent > donarBalance) {
      alert("you don't have sufficient balance for donating");
      return;
    }
    if (donateForStudent <= 0) {
      alert("Negative value is not accepted");
      return;
    }
    if (isNaN(donateForStudent)) {
      alert("Wrong!Input accepts only Valid Number");
      return;
    }

    const balanceIsNow = donationValueAmount("donation-has-rightnow");
    const donateBalanceISNow = donarBalance - donateForStudent;
    document.getElementById("main-balance").innerText = donateBalanceISNow;
    const totalDonationStudentHas = donateForStudent + balanceIsNow;
    document.getElementById("donation-has-rightnow").innerText =
    totalDonationStudentHas;

    //!pop up Button
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("close-confirmation")
      .addEventListener("click", function () {
        document.getElementById("popup").classList.add("hidden");
      });
    const div = document.createElement("div");

    div.innerHTML = `
                <p class ='p-3 text-lg border-2 border-gray-400 m-3 rounded-xl'> ${donateForStudent} tk is donated for aid for Injured in the <span class ="text-emerald-400 font-bold">Quota Movement, Bangladesh</span>.<br>
                 date:  ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
            `;
    document.getElementById("transaction-container").appendChild(div);
  });