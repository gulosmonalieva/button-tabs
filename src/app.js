import style from "./style.css";

const body = document.querySelector("body");
const block = document.createElement("div");
const blockAbout = document.createElement("div");
const blockImg = document.createElement("div");
const blockText = document.createElement("div");
const blockTab = document.createElement("div");
const TabNav = document.createElement("div");
const button = document.createElement("button");
const OurButton = document.createElement("button");
const GoalsButton = document.createElement("button");
const TabContent = document.createElement("div");
const Content1 = document.createElement("div");
const AboutTitle = document.createElement("h3");
const AboutText = document.createElement("p");
const Content2 = document.createElement("div");
const OurTitle = document.createElement("h3");
const OurText = document.createElement("p");
const Content3 = document.createElement("div");
const GoalsTitle = document.createElement("h3");
const GoalsText = document.createElement("p");
const title = document.createElement("h2");
const img = document.createElement("img");

body.append(block);
block.setAttribute("class", "about-wrapper");
block.append(title);
title.innerText = "ABOUT";
block.append(blockAbout);
blockAbout.setAttribute("class", "about");
blockAbout.append(blockImg);
blockImg.setAttribute("class", "block-img");
blockImg.append(img);
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
);
blockAbout.append(blockText);
blockText.append(blockTab);
blockText.setAttribute("class", "block-text");
blockTab.append(TabNav);
blockTab.setAttribute("class", "block-tab");
TabNav.append(button);

TabNav.append(OurButton);
TabNav.append(GoalsButton);
button.innerText = "About Us";
button.setAttribute("class", "buttons ");
OurButton.innerText = "Our Mission";
OurButton.setAttribute("class", "buttons ");
GoalsButton.innerText = "Our Goals";
GoalsButton.setAttribute("class", "buttons ");
blockTab.append(TabContent);
TabContent.append(Content1);
Content1.setAttribute("class", "tabcontent about ");
Content1.append(AboutTitle);
AboutTitle.innerText = "About Us";
AboutText.setAttribute("class", "content ");
AboutText.innerText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
Content1.append(AboutText);
TabContent.append(Content2);
Content2.append(OurTitle);
Content2.setAttribute("class", "tabcontent about ");
OurTitle.innerText = "Our mission";
Content2.append(OurText);
OurText.setAttribute("class", "content ");
OurText.innerText =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,";
TabContent.append(Content3);
Content3.append(GoalsTitle);
Content3.setAttribute("class", "tabcontent about");
GoalsTitle.innerText = "Our Goals";
Content3.append(GoalsText);
GoalsText.setAttribute("class", "content ");
GoalsText.innerText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ";

button.addEventListener("click", () => {
  Content1.style.display = "block";
  Content2.style.display = "none";
  Content3.style.display = "none";
});
OurButton.addEventListener("click", () => {
  Content1.style.display = "none";
  Content3.style.display = "none";
  Content2.style.display = "block";
});
GoalsButton.addEventListener("click", () => {
  Content1.style.display = "none";
  Content2.style.display = "none";
  Content3.style.display = "block";
});
