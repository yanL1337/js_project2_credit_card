function cardChange() {
  const rauten = document.querySelector("#raute");
  let cNumber = document.querySelector("#cardNr").value;

  cNumber == ""
    ? (rauten.innerHTML = "#### #### #### ####")
    : (rauten.innerHTML = cNumber);
}

function nameChange() {
  const holder = document.querySelector("#fullName");
  const fName = document.querySelector("#name").value;

  fName == "" ? (holder.innerHTML = "Full Name") : (holder.innerHTML = fName);
}

function dateChange() {
  const expDate = document.querySelector("#expireDate");
  const datum = document.querySelector("#expire").value;

  datum == "" ? (expDate.innerHTML = "MM/YY") : (expDate.innerHTML = datum);
}
