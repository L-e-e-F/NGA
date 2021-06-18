// DotaJSON
var Dota = [
  {
    h2: "冰女大招如果脱手",
    p1: "18001010821",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "李飞",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
  {
    h2: "冰女大招如果脱手",
    p1: "wxjhwxjh",
    p2: "刚才",
    p3: "27",
  },
  {
    h2: "全能大招如果脱手",
    p1: "LeeF",
    p2: "一分钟前",
    p3: "35",
  },
  {
    h2: "影魔大招如果脱手",
    p1: "Berthcon",
    p2: "四分钟前",
    p3: "30",
  },
];
var vlist = document.querySelector(".Dotaul");
for (let i = 0; i < Dota.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = `<a href="./tiezi.html"><h2>${Dota[i].h2}</h2></a>
        <div class="text">
            <p>
                <span class="iconfont icon-renwu"></span>
                ${Dota[i].p1}</p>
            <p>
                <span class="iconfont icon-zhinanzhen"></span>
                ${Dota[i].p2}</p>
            <p>
                <span class="iconfont icon-huifu"></span>
                ${Dota[i].p3}</p>
        </div>`;
  vlist.appendChild(li);
}
// 显示哪一个头部
window.onscroll = function () {
  var h1 = header1.offsetHeight;
  var head = document.querySelector(".head1");
  var p = head.getElementsByTagName("p")[0];
  var svg = head.getElementsByTagName("svg")[1];
  var h2 = head.offsetHeight;
  var st = document.documentElement.scrollTop || document.body.scrollTop;

  if (st > h1 - h2) {
    head.style.background = "#f0ead2";
    p.style.opacity = "1";
    svg.style.opacity = "1";
    nav.style.position = "fixed";
    nav.style.top = h2 + "px";
  } else {
    head.style.background = "transparent";
    p.style.opacity = "0";
    svg.style.opacity = "0";
    nav.style.position = "static";
  }
};
