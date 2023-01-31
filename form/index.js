const btn = document.querySelector(`.btn`);

btn.addEventListener("click", signUp());

const signUp = (e) => {
  e.preventDefault();
  let formData = {
    userName: document.querySelector(`.username`).value,
    password: document.querySelector(`.password`).value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));

  displayData();
};

const displayData = () => {
  let { userName, password } = JSON.parse(localStorage.getItem("formData"));

  const container = document.querySelector(`.container`);

  container.innerHTML = `<table>
  <tbody>
  <tr>
  <td>UserName : </td>
  <td>${userName} </td>
  </tr>
  <tr>
  <td>password : </td>
  <td>${password} </td>
  </tr>
  </tbody>
  
  </table>`;
};
