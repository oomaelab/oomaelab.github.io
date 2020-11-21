function navigator()
{
  var html = "";
  html += "<div class='container'>";
  html += "<section class='color-1'>";
  html += "<p>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/index.html\"'>トップページ</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://researchmap.jp/oomae/\"' target='_blank' rel='noopener noreferrer'>研究成果<br>(researchmap)</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/research1.html\"'>硫化すずの研究</button>";
  html += "</p>";
  html += "<p>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/research2.html\"'>磁性ガーネットの研究</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/research3.html\"'>磁性シミュレーションの研究</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/research4.html\"'>ハーブティの研究</button>";
  html += "</p>";
  html += "<p>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/member.html\"'>メンバー</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/message.html\"'>研究室選び</button>";
  //html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/oomaelab/index.html\"'>研究室内部ページ</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/book.html\"'>研究で参考になる本</button>";
  html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/learning.html\"'>授業資料など</button>";
  html += "</p>";
  //html += "<p>";
  //html += "<button class='btn btn-1 btn-1a' onclick='location.href=\"https://oomaelab.github.io/joint-research.html\"'>共同研究の歓迎</button>";
  //html += "</p>";
  
  html += "</section>";
  html += "</div><!-- /container -->";
  document.open();
  document.write(html);
  document.close();
}
