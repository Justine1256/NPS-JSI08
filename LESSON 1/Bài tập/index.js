// // API
// const api_url1 =
//     "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST"
// // API
// const api_url2 =
//     "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST"
// // Đã sử dụng Thunder Client để đọc dữ liệu

// function Click1() {
//     fetch("https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);

//             const div = document.createElement("div");
//             div.classList.add("card");
//             document.body.appendChild(div);

//             let html = `
//             <h2>Thành phố Hồ Chí Minh:</h1>
//             <h3>- Số ca khỏi: ${data.detail[1].recovered}</h3>
//             <h3>- Số ca đang điều trị: ${data.detail[1].treating}</h3>
//             <h3>- Số ca tử vong: ${data.detail[1].death}</h3>

//             <h2>Hà Nội:</h1>
//             <h3>- Số ca khỏi: ${data.detail[0].recovered}</h3>
//             <h3>- Số ca đang điều trị: ${data.detail[0].treating}</h3>
//             <h3>- Số ca tử vong: ${data.detail[0].death}</h3>

//             <h2>Bến Tre:</h1>
//             <h3>- Số ca khỏi: ${data.detail[35].recovered}</h3>
//             <h3>- Số ca đang điều trị: ${data.detail[35].treating}</h3>
//             <h3>- Số ca tử vong: ${data.detail[35].death}</h3>
//             `;
//             div.insertAdjacentHTML("beforeend", html);

//         })
// }
// Click1()

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "031752da20msh3ca2fd901dc7511p12cdf2jsn431d1cd20b60",
    "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

function Click1() {
  fetch(
    "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      const div = document.createElement("div");
      div.classList.add("card");
      document.body.appendChild(div);

      let html = `
    <h1>Thống kê COVID-19 tại Canada:</h1>            
    <h2>- Tổng số ca mắc covid-19: ${response.data.confirmed}</h2>
    <h2>- Tổng số người chết: ${response.data.deaths}</h2>
                  `;
      div.insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => console.error(err));
}

Click1();
