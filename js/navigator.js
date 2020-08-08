function navigator(){
var html = "";

html += '<div class="container">';
html += '<section class="color-1">';
html += '<p>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='https://researchmap.jp/oomae/'" target="_blank" rel="noopener noreferrer">研究成果<br>(researchmap)</button>';
html += '</p>';
html += '<p>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='equipment.html'">実験装置</button>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='equipment_corp.html'">実験装置（共同研究）</button>';
html += '</p>';
html += '<p>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='member.html'">メンバー</button>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='book.html'">研究で参考になる本</button>';
html += '</p>';
html += '<p>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='oomaelab/index.html'">研究室内部ページ</button>';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='learning.html'">授業のプリント</button>';
html += '<!--';
html += '<button class="btn btn-1 btn-1a" onclick="location.href='schoolonly/lecture.html'">講義ノート(学内専用）</button>';
html += '-->';
html += '</p>';
html += '</section>';
html += '</div><!-- /container -->';


document.write(html);



}
