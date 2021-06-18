// 主界面JSON
var retieJSON = [
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
  {
    img: "./img/DOTA2.png",
    h4: "[DOTA2杂谈]Ti11的冠军是谁",
    lanmu: "DOTA2",
    yonghu: "Twinkle丶L",
    liuyan: "16405",
  },
  {
    img: "./img/CSGO.png",
    h4: "[CS:GO]大行动什么时候出？",
    lanmu: "CS:GO",
    yonghu: "Berthcon",
    liuyan: "540",
  },
  {
    img: "./img/Monster Hunter.png",
    h4: "[MWHI]被自己蠢哭了",
    lanmu: "MWHI",
    yonghu: "puzze",
    liuyan: "1319",
  },
];
var vlist = document.querySelector(".vlist");
for (let i = 0; i < retieJSON.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = `<a href="./tiezi.html">
        <div class="img">
                <img src="${retieJSON[i].img}">
                </div>
                <div class="ftext">
                <h4>${retieJSON[i].h4}</h4>
                <p class="lanmu">
                    <span class="iconfont icon-iconfontanlishangjia05"></span>
                    ${retieJSON[i].lanmu}</p>
                <p class="yonghu">
                    <span class="iconfont icon-renwu"></span>
                    ${retieJSON[i].yonghu}</p>
                <p class="liuyan">
                    <span class="iconfont icon-liuyan"></span>
                    ${retieJSON[i].liuyan}</p>
                    </div>
                    </a>`;
  vlist.appendChild(li);
}
//  挂墙消失
var guaqiang = document.querySelector(".guaqiang");
guaqiang.onmouseover = function () {
  guaqiang.style.display = "none";
};
//  tab选项卡
// 1
var alltab = document.querySelectorAll(".tab");
for (var i = 0; i < alltab.length; i++) {
  tabs(alltab[i]);
}

function tabs(tab) {
  var title = tab.getElementsByClassName("title")[0];
  var s = title.getElementsByClassName("s");
  var tc = tab.querySelectorAll(".tc");
  for (let i = 0; i < s.length; i++) {
    s[i].onmouseover = function () {
      for (let j = 0; j < s.length; j++) {
        s[j].index = j;
        tc[j].className = "tc";
      }
      tc[this.index].className += " show";
    };
  }
}
// 2
var alltab1 = document.querySelectorAll(".shequ");
for (var i = 0; i < alltab.length; i++) {
  tabs1(alltab[i]);
}

function tabs1(tab) {
  var title1 = tab.getElementsByClassName("title1")[0];
  var kong = title1.getElementsByClassName("kong");
  var tc1 = tab.querySelectorAll(".tc1");
  for (let i = 0; i < kong.length; i++) {
    kong[i].onmouseover = function () {
      for (let j = 0; j < kong.length; j++) {
        kong[j].className = "kong";
        kong[j].index = j;
        tc1[j].className = "tc1";
      }
      this.className += " cur";
      tc1[this.index].className += " show";
    };
  }
}
// 用户界面显示
var user = document.querySelector(".user");
var user1 = document.querySelector(".user1");
var exit = document.querySelector(".exit");
window.onload = function onloadMemu() {
  //打开菜单
  user.addEventListener("click", (e) => {
    user1.style.display = "block";
  });
  //关闭菜单
  exit.addEventListener("click", (e) => {
    user1.style.display = "none";
  });
};
// 社区收藏板块点击按钮之后单击删除li
var tc11 = document.getElementsByClassName("tc1")[0];
var btn = tc11.getElementsByClassName("btn");
var ul = tc11.getElementsByClassName("fenleiul")[0];
btn[0].onclick = function () {
  var nli = ul.querySelectorAll("li");
  for (let j = 0; j < nli.length; j++) {
    nli[j].onclick = function () {
      ul.removeChild(this);
    };
  }
};
// 社区其他页面手风琴
var btn1 = document.getElementsByClassName("btn1");
var ul1 = document.getElementsByClassName("ulcur");
var flag = new Array(btn1.length);
for (let j = 0; j < btn1.length; j++) {
  flag[j] = 0;
}
for (let i = 0; i < btn1.length; i++) {
  btn1[i].onclick = function () {
    flag[i] += 1;
    if (Math.floor(flag[i] % 2) == 1) {
      ul1[i].className = "ulcur";
    } else {
      ul1[i].className += " show";
    }
  };
}
