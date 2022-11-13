const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail.trim() === "" || password.trim() === "") {
    alert("Усі поля повинні бути заповнені");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    formRef.reset();
  }
});
