const email = document.querySelector("#email");

function forgotPassword(e) {
  e.preventDefault();

  const form = new FormData(e.target);

  const userDetails = {
    email: form.get("email"),
  };
  console.log(userDetails);

  axios
    .post("http://localhost:3000/password/forgotPassword", userDetails)
    .then((response) => {
      if (response.status === 202) {
        document.body.innerHTML +=
          '<div style="color:red;">Mail Successfuly sent <div>';
      } else {
        throw new Error("Something went wrong!!!");
      }
    })
    .catch((err) => {
      document.body.innerHTML += `<div style="color:red;">${err} <div>`;
    });
}
