"use strict";

const heroCardData = [
  {
    id: 1,
    icon: "https://smartfinancial.com/assets/images/index/auto.png",
    alt: "Auto Png",
    link: "./survey.html",
    title: "Auto",
  },
  {
    id: 2,
    icon: "https://smartfinancial.com/assets/images/index/home.png",
    alt: "home Png",
    link: "./survey.html",
    title: "Home",
  },
  {
    id: 3,
    icon: "https://smartfinancial.com/assets/images/index/life.png",
    alt: "life Png",
    link: "./survey.html",
    title: "Life",
  },
  {
    id: 4,
    icon: "https://smartfinancial.com/assets/images/index/health.png",
    alt: "health Png",
    link: "./survey.html",
    title: "Health",
  },
  {
    id: 5,
    icon: "https://smartfinancial.com/assets/images/index/medicare.png",
    alt: "medicare Png",
    link: "./survey.html",
    title: "Medicare",
  },
  {
    id: 6,
    icon: "https://smartfinancial.com/assets/images/index/commercial.png",
    alt: "commercial Png",
    link: "./survey.html",
    title: "Commercial",
  },
  {
    id: 7,
    icon: "https://smartfinancial.com/assets/images/index/motorcycle.png",
    alt: "motorcycle Png",
    link: "./survey.html",
    title: "Motorcycle",
  },
  {
    id: 8,
    icon: "https://smartfinancial.com/assets/images/index/renters.png",
    alt: "renters Png",
    link: "./survey.html",
    title: "Renters",
  },
];

const brandsData = [
  { id: 1, icon: "../progressive.png", alt: "progressive png" },
  { id: 2, icon: "../allstate.png", alt: "allstate png" },
  { id: 3, icon: "../21st.png", alt: "21st png" },
  { id: 4, icon: "../nationwide.png", alt: "nationwide png" },
  {
    id: 5,
    icon: "../liberty_mutual_new.jpg",
    alt: "liberty_mutual_new png",
  },
  { id: 6, icon: "../21st.png", alt: "21st png" },
];

const questAns = [
  {
    id: 1,
    ques: "Answer Questions",
    ans: "We’ll ask you some questions about yourself and the insurance coverage you want.",
  },
  {
    id: 2,
    ques: "Compare Rates",
    ans: "We’ll sort through over 200 insurance companies and find the best rates available in your area. We’ll even check for discounts.",
  },
  {
    id: 3,
    ques: "Find Coverage",
    ans: "Review the offers and find the coverage that is right for you. The best part is that it’s 100% free and only takes a few minutes.",
  },
];

const tabsData = [
  {
    id: 1,
    icon: "https://smartfinancial.com/assets/images/auto_insurance_page/coverage-icon.png",
    alt: "Coverage icon",
    title: "Costs",
  },
  {
    id: 2,
    icon: "https://smartfinancial.com/assets/images/auto_insurance_page/cost-icon.png",
    alt: "coverage icon",
    title: "Coverage",
  },
  {
    id: 3,
    icon: "https://smartfinancial.com/assets/images/auto_insurance_page/save_money-icon.png",
    alt: "save money icon",
    title: "Save Money",
  },
  {
    id: 4,
    icon: "https://smartfinancial.com/assets/images/auto_insurance_page/infractions-icon.png",
    alt: "infractions icon",
    title: "Infractions",
  },
  {
    id: 5,
    icon: "https://smartfinancial.com/assets/images/auto_insurance_page/safety-icon.png",
    alt: "safety icon",
    title: "Safety",
  },
  {
    id: 6,
    icon: "https://smartfinancial.com/assets/images/commercial_insurance_page/types.png",
    alt: "types icon",
    title: "Types",
  },
];

const newsData = [
  {
    id: 1,
    title: "COVID-19 Vaccines Rollout Continues Across the Globe",
    description:
      "Efforts to vaccinate populations against COVID-19 are ongoing worldwide, with millions of doses administered daily.",
    image:
      "https://imgs.search.brave.com/Y22kLARTQD1lyG_CvJdXN6FUh0hH_q8p6IrSvy1oIfY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzAwOTUzNzgwMDQt/Y2U2NWQ2YzJkNWJi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/TnNhVzFoZEdVbE1q/QmphR0Z1WjJWOFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
  },
  {
    id: 2,
    title: "Climate Change Summit Addresses Urgent Environmental Issues",
    description:
      "World leaders gather to discuss strategies for combating climate change and its impacts on the planet.",
    image:
      "https://imgs.search.brave.com/Y22kLARTQD1lyG_CvJdXN6FUh0hH_q8p6IrSvy1oIfY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzAwOTUzNzgwMDQt/Y2U2NWQ2YzJkNWJi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRGOGZH/TnNhVzFoZEdVbE1q/QmphR0Z1WjJWOFpX/NThNSHg4TUh4OGZE/QT0.jpeg",
  },
  {
    id: 3,
    title: "Stock Markets Reach Record Highs Amid Economic Recovery Optimism",
    description:
      "Stock markets soar as investors remain optimistic about the global economic recovery from the COVID-19 pandemic.",
    image:
      "https://imgs.search.brave.com/PHrTAdepU9-YQ_kP7spg5H9Y_2-HKkDJI5MZ_M8thB4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Mi8wNS8wOC8xMi9z/dG9jay02MjQ3MTJf/NjQwLmpwZw",
  },
  {
    id: 4,
    title: "New Study Shows Benefits of Mediterranean Diet for Heart Health",
    description:
      "Researchers find that following a Mediterranean diet can significantly reduce the risk of heart disease and improve overall health.",
    image:
      "https://imgs.search.brave.com/uUuxGT4Vn7W-ghKCfZtTiUTWeOZdwUcbhva4qHdm27k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aW1l/LXRvLXN0dWR5LXNj/aG9vbC10b29scy1h/cm91bmQtYmxhY2ti/b2FyZC1iYWNrZ3Jv/dW5kLTQ2MDYwNTU2/LmpwZw",
  },
  {
    id: 5,
    title: "SpaceX Launches Mission to Deploy Starlink Satellites",
    description:
      "SpaceX successfully launches a Falcon 9 rocket carrying dozens of Starlink satellites, expanding its global internet coverage.",
    image:
      "https://imgs.search.brave.com/PJYIcuyM1Is5XaFxLv2X7kp4tKVC3uEtd0mSjfdMI9I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/My8yNi8xOC80NC9s/aWZ0LW9mZi02OTMy/NTdfNjQwLmpwZw",
  },
  {
    id: 6,
    title:
      "World Health Organization Warns of Variants' Threat to COVID-19 Progress",
    description:
      "The WHO raises concerns about the spread of COVID-19 variants and urges continued vigilance to prevent further outbreaks.",
    image:
      "https://imgs.search.brave.com/8OqBe6kes0BNkYYmIWbu6db4KSLl6m9sQoeTn0hPGkc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/NjIwMzc5Ny9waG90/by90b3BzaG90LWEt/cGhvdG8tdGFrZW4t/aW4tdGhlLWxhdGUt/aG91cnMtb2YtbWF5/LTI5LTIwMjAtc2hv/d3MtYS1zaWduLW9m/LXRoZS13b3JsZC1o/ZWFsdGguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxQRnhO/aTlkZHNXVmw4NzZM/dGc2M2E3eFozMWdN/NjNKWTNWM1lULTZ3/bUE9",
  },
  {
    id: 7,
    title: "Tech Giants Face Scrutiny Over Data Privacy Practices",
    description:
      "Facebook, Google, and other tech companies face increasing scrutiny over their handling of user data and privacy concerns.",
    image:
      "https://imgs.search.brave.com/8OqBe6kes0BNkYYmIWbu6db4KSLl6m9sQoeTn0hPGkc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/NjIwMzc5Ny9waG90/by90b3BzaG90LWEt/cGhvdG8tdGFrZW4t/aW4tdGhlLWxhdGUt/aG91cnMtb2YtbWF5/LTI5LTIwMjAtc2hv/d3MtYS1zaWduLW9m/LXRoZS13b3JsZC1o/ZWFsdGguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxQRnhO/aTlkZHNXVmw4NzZM/dGc2M2E3eFozMWdN/NjNKWTNWM1lULTZ3/bUE9",
  },
  {
    id: 8,
    title: "Olympic Games Tokyo 2020 Postponed Amid COVID-19 Concerns",
    description:
      "The International Olympic Committee announces the postponement of the Tokyo 2020 Olympics due to the ongoing COVID-19 pandemic.",
    image: "https://imgs.search.brave.com/8OqBe6kes0BNkYYmIWbu6db4KSLl6m9sQoeTn0hPGkc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/NjIwMzc5Ny9waG90/by90b3BzaG90LWEt/cGhvdG8tdGFrZW4t/aW4tdGhlLWxhdGUt/aG91cnMtb2YtbWF5/LTI5LTIwMjAtc2hv/d3MtYS1zaWduLW9m/LXRoZS13b3JsZC1o/ZWFsdGguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUxQRnhO/aTlkZHNXVmw4NzZM/dGc2M2E3eFozMWdN/NjNKWTNWM1lULTZ3/bUE9",
  },
  {
    id: 9,
    title: "Apple Unveils Latest iPhone Model with Advanced Features",
    description:
      "Apple launches the newest iPhone model, boasting enhanced performance, camera capabilities, and innovative features.",
    image: "https://imgs.search.brave.com/-85VVXKgdf3iZaM8yf3xCwqSuyICi4FvlKUacVrBBQI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDI3ODAz/LzQ0NzEvaS80NTAv/ZGVwb3NpdHBob3Rv/c180NDcxMTgyNS1z/dG9jay1waG90by10/aGUtYXBwbGUtbWFj/aW50b3NoLXN5bWJv/bC1vdmVyLmpwZw",
  },
  {
    id: 10,
    title: "United Nations Convenes Summit on Global Hunger Crisis",
    description:
      "The UN holds a summit to address the escalating global hunger crisis exacerbated by conflicts, climate change, and the COVID-19 pandemic.",
    image: "https://imgs.search.brave.com/dODpsTxVJ-UYb3luj5eo67Ea2Y9RT0ZD6QSS8IV9eDo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUw/NjU1NDgyNy9waG90/by9hbi1hZXJpYWwt/aW1hZ2Utb2YtdGhl/LXNob3Jlcy1vZi12/aWN0b3JpYS1pc2xh/bmQtbGFnb3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWpX/b0ptN1BPQjVvWXlC/SURLVlhxVHRabTlZ/Zm1OMjF5cHRHWFRU/SUNsX009",
  },
  {
    id: 11,
    title: "Elon Musk Becomes World's Richest Person as Tesla Stock Surges",
    description:
      "Tesla CEO Elon Musk surpasses Amazon's Jeff Bezos to become the world's richest person, fueled by a surge in Tesla's stock price.",
    image: "https://imgs.search.brave.com/vn107FXl2zUDRwHtVErqYck8iNNY3XCNDm9Pm9v-WjE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwNDg0/NDAuanBn",
  },
  {
    id: 12,
    title: "Artificial Intelligence Revolutionizes Healthcare Diagnostics",
    description:
      "Advancements in AI technology are transforming healthcare diagnostics, enabling faster and more accurate detection of diseases.",
    image: "https://imgs.search.brave.com/QcJgrkhI3rgCTD06kfOy_lj7d4q7owKQrVpJlYTtvUg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWct/Y2RuLnBpeGxyLmNv/bS9wYWdlcy1zdG9y/YWdlL0FpSW1hR2Vu/SGVhZGVyLnBuZw",
  },
  {
    id: 13,
    title:
      "Renewable Energy Surpasses Coal as Largest Source of Electricity in the US",
    description:
      "Renewable energy sources, including wind and solar, overtake coal to become the largest source of electricity in the United States.",
    image: "https://imgs.search.brave.com/BPZVPQsNpJWOJ-MSWRVvOgdkTyDYA2NwopSKPj_bK1o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg2/MTYzNTQ4L3Bob3Rv/L2ltYWdlLW9mLXRo/ZS1yZW5ld2FibGUt/ZW5lcmd5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1QT2FZ/ZFNQTzkzb0JpR19O/VlVfOXhHektDWHgz/ckhjLWlOcmROT1Bq/YmlvPQ",
  },
  {
    id: 14,
    title: "Amazon Announces Plans to Expand Its Delivery Drone Fleet",
    description:
      "Amazon reveals plans to expand its delivery drone fleet, aiming to increase efficiency and speed in its package delivery operations.",
    image: "https://imgs.search.brave.com/95Om5WPtWKrg8AMjw-AgJ2VggJcCOMPBmULPhN0HchI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRlc2suY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0FtYXpvbi1pbWFn/ZS1jbG9zZS11cC1l/eGFtcGxlLTEwMjR4/NTc0LmpwZw",
  },
];

const heroCardContainer = document.querySelector(".hero-cards");
const brandContainer = document.querySelector(".brand");
const insuranceBrandContainer = document.querySelector(".right");
const tabsContainer = document.querySelector(".tabs");
const newsContainer = document.querySelector(".wrapper-news");

const headerEl = document.querySelector("header");

const showMoreBtn = document.querySelector(".show-btn");

renderHeroCard(heroCardData);
renderBrands(brandsData);
renderInsuranceQues(questAns);
renderTabs(tabsData);
renderNews(newsData, 6);

const tabs = document.querySelectorAll(".tab");

function renderHeroCard(data) {
  let html = "";
  data.forEach((item) => {
    html += `
        <li>
            <a href=${item.link}><img src=${item.icon} alt=${item.alt}>${item.title}</a>
        </li>
        `;
  });
  heroCardContainer.innerHTML = html;
}

function renderBrands(data) {
  let html = "";
  data.forEach((item) => {
    html += `<li><img src=${item.icon} alt=${item.alt} /></li>`;
  });
  brandContainer.innerHTML = html;
}

function renderInsuranceQues(data) {
  let html = "";
  data.forEach((item) => {
    html += `
        <div class="q-p">
            <p class="question">${item.id}. ${item.ques}</p>
            <p class="answer">${item.ans}</p>
        </div
        `;
  });
  insuranceBrandContainer.insertAdjacentHTML("beforeend", html);
}

function renderTabs(data) {
  let html = "";
  data.forEach((item) => {
    html += `
        <button class="tab">
            <img src=${item.icon} alt=${item.alt} />
            ${item.title}
      </button>
        `;
  });
  tabsContainer.insertAdjacentHTML("beforeend", html);
}

function renderNews(data, limit) {
  const sortedData = data?.slice(0, limit);
  let html = "";
  sortedData.forEach((item) => {
    html += `
        <div class="news">
            <img src=${item.image} alt="" />
            <p>${item.title}</p>
      </div>
        `;
  });
  newsContainer.innerHTML = html;
}

showMoreBtn.addEventListener("click", function (e) {
  let prevLimit = e.target.previousElementSibling.children.length;
  const limit = prevLimit + 3;
  renderNews(newsData, limit);
});

tabsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("tab")) {
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    e.target.classList.add("active-tab");
  }
});

const header = function (enteries) {
  const { isIntersecting } = enteries[0];
  isIntersecting
    ? headerEl.classList.remove("stick")
    : headerEl.classList.add("stick");
};

const observer = new IntersectionObserver(header, {
  root: null,
  threshold: 0,
});

observer.observe(heroCardContainer);
