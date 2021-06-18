// zhutiJSON
var zhuti = [
  {
    img: "./img/default_icon.png",
    namep1: "18001010821李飞",
    namep2: "楼主",
    qitap1: "级别:学徒",
    qitap2: "威望:1",
    qitap3: "发帖:1319",
    p: "-",
    mainp: "这里是楼主发言内容",
    timep1: "2020-12-1",
    timep2: "11:55",
  },
  {
    img: "./img/head_img.JPG",
    namep1: "Twinkle",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:-1",
    qitap3: "发帖:540",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:57",
  },
  {
    img: "./img/kxxs.jpg",
    namep1: "Berthcon",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:1",
    qitap3: "发帖:999",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:59",
  },
  {
    img: "./img/default_icon.png",
    namep1: "Twinkle",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:-1",
    qitap3: "发帖:540",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:57",
  },
  {
    img: "./img/head_img.JPG",
    namep1: "Twinkle",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:-1",
    qitap3: "发帖:540",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:57",
  },
  {
    img: "./img/kxxs.jpg",
    namep1: "Twinkle",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:-1",
    qitap3: "发帖:540",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:57",
  },
  {
    img: "./img/default_icon.png",
    namep1: "Twinkle",
    namep2: "楼",
    qitap1: "级别:学徒",
    qitap2: "威望:-1",
    qitap3: "发帖:540",
    p: "-",
    mainp: "这里是回复文字内容",
    timep1: "2020-12-1",
    timep2: "11:57",
  },
];
var vlist = document.querySelector(".zhutiul");
var j = 0;
for (let i = 0; i < zhuti.length; i++) {
  let li = document.createElement("li");
  j++;
  if (i == 0) {
    li.innerHTML = `<div class="lihead">
        <div class="img">
            <img src="${zhuti[i].img}">
        </div>
        <div class="text">
            <div class="name">
                <p>${zhuti[i].namep1}</p>
                <p>${zhuti[i].namep2}</p>
            </div>
            <div class="qita">
                <p>${zhuti[i].qitap1}</p>
                <p>${zhuti[i].qitap2}</p>
                <p>${zhuti[i].qitap3}</p>
            </div>
            <p>${zhuti[i].p}</p>
        </div>
    </div>
    <div class="limain">
        <p>${zhuti[i].mainp}</p>
        <div class="time">
            <p>${zhuti[i].timep1}</p>
            <p>${zhuti[i].timep2}</p>
        </div>
    </div>
    <div class="lifoot">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liwu"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zanpress"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-step"></use>
            </svg>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-plus"></use>
            </svg>
        </div>
    </div>`;
  } else {
    li.innerHTML = `<div class="lihead">
        <div class="img">
            <img src="${zhuti[i].img}">
        </div>
        <div class="text">
            <div class="name">
                <p>${zhuti[i].namep1}</p>
                <p>${j}${zhuti[i].namep2}</p>
            </div>
            <div class="qita">
                <p>${zhuti[i].qitap1}</p>
                <p>${zhuti[i].qitap2}</p>
                <p>${zhuti[i].qitap3}</p>
            </div>
            <p>${zhuti[i].p}</p>
        </div>
    </div>
    <div class="limain">
        <p>${zhuti[i].mainp}</p>
        <div class="time">
            <p>${zhuti[i].timep1}</p>
            <p>${zhuti[i].timep2}</p>
        </div>
    </div>
    <div class="lifoot">
        <div class="left">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liwu"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zanpress"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-step"></use>
            </svg>
        </div>
        <div class="right">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liuyan"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-plus"></use>
            </svg>
        </div>
    </div>`;
  }

  vlist.appendChild(li);
}
// 上拉加载更多
window.onscroll = function () {
  var st = document.documentElement.scrollTop || document.body.scrollTop;
  var st1 = document.documentElement.clientHeight || document.body.clientHeight;
  var st2 = document.documentElement.offsetHeight || document.body.offsetHeight;
  if (st2 - st1 - st == 0) {
    loading.style.display = "block";
    setTimeout(add, 3000);
  }

  function add() {
    loading.style.display = "none";
    for (let i = 1; i < zhuti.length; i++) {
      let li = document.createElement("li");
      j++;
      li.innerHTML = `<div class="lihead">
                <div class="img">
                    <img src="${zhuti[i].img}">
                </div>
                <div class="text">
                    <div class="name">
                        <p>${zhuti[i].namep1}</p>
                        <p>${j}${zhuti[i].namep2}</p>
                    </div>
                    <div class="qita">
                        <p>${zhuti[i].qitap1}</p>
                        <p>${zhuti[i].qitap2}</p>
                        <p>${zhuti[i].qitap3}</p>
                    </div>
                    <p>${zhuti[i].p}</p>
                </div>
            </div>
            <div class="limain">
                <p>${zhuti[i].mainp}</p>
                <div class="time">
                    <p>${zhuti[i].timep1}</p>
                    <p>${zhuti[i].timep2}</p>
                </div>
            </div>
            <div class="lifoot">
                <div class="left">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liwu"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zanpress"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-step"></use>
                    </svg>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liuyan"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-plus"></use>
                    </svg>
                </div>
            </div>`;
      vlist.appendChild(li);
    }
  }
};
