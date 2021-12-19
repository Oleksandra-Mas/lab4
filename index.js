function setValue() {
  console.log(data);
}
const interval = setInterval(() => {
  fetch(`https://sandbox.ee.kpi.ua/~kp9117/fcgi/api/${name}`, {
    method: "GET",
    headers: { "Content-Type": "text/plain" },
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      setValue(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}, 1000);
