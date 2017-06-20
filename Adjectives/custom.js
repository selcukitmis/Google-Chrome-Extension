$(function () {
  Easy();
  $(".btn-primary").click(function () {
    var type = $("#type").val();
    switch (type) {
      case "easy":
        Easy();
        break;
      case "medium":
        Medium();
        break;
      case "hard":
        Hard();
        break;
    }
    Easy();
  });

  $(".easy").click(function () {
    $("#type").val("easy");
    Easy();
  });
  $(".medium").click(function () {
    Medium();
    $("#type").val("medium");
  });
  $(".hard").click(function () {
    Hard();
    $("#type").val("hard");
  });
});

function Easy() {
  var first = basic[Math.floor(Math.random() * basic.length)];
  var second = basic[Math.floor(Math.random() * basic.length)];
  var thirth = basic[Math.floor(Math.random() * basic.length)];
  var fourth = basic[Math.floor(Math.random() * basic.length)];
  var fifth = basic[Math.floor(Math.random() * basic.length)];
  var html = '<table class="table table-striped table-bordered table-hover"><thead><tr><th style="width:50%;">English</th><th style="width:50%;">Türkçe</th></tr></thead><tbody>';
  html += '<tr><th>'+capitalizeFirstLetter(first.eng)+'</th><td>'+capitalizeFirstLetter(first.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(second.eng)+'</th><td>'+capitalizeFirstLetter(second.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(thirth.eng)+'</th><td>'+capitalizeFirstLetter(thirth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fourth.eng)+'</th><td>'+capitalizeFirstLetter(fourth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fifth.eng)+'</th><td>'+capitalizeFirstLetter(fifth.tr)+'</td></tr>';
  html += '</tbody></table>';
$("#easy").html(html);
}

function Medium() {
  var first = medium[Math.floor(Math.random() * medium.length)];
  var second = medium[Math.floor(Math.random() * medium.length)];
  var thirth = medium[Math.floor(Math.random() * medium.length)];
  var fourth = medium[Math.floor(Math.random() * medium.length)];
  var fifth = medium[Math.floor(Math.random() * medium.length)];
  var html = '<table class="table table-striped table-bordered table-hover"><thead><tr><th style="width:50%;">English</th><th style="width:50%;">Türkçe</th></tr></thead><tbody>';
  html += '<tr><th>'+capitalizeFirstLetter(first.eng)+'</th><td>'+capitalizeFirstLetter(first.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(second.eng)+'</th><td>'+capitalizeFirstLetter(second.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(thirth.eng)+'</th><td>'+capitalizeFirstLetter(thirth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fourth.eng)+'</th><td>'+capitalizeFirstLetter(fourth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fifth.eng)+'</th><td>'+capitalizeFirstLetter(fifth.tr)+'</td></tr>';
  html += '</tbody></table>';
$("#medium").html(html);
}

function Hard() {
  var first = hard[Math.floor(Math.random() * hard.length)];
  var second = hard[Math.floor(Math.random() * hard.length)];
  var thirth = hard[Math.floor(Math.random() * hard.length)];
  var fourth = hard[Math.floor(Math.random() * hard.length)];
  var fifth = hard[Math.floor(Math.random() * hard.length)];
  var html = '<table class="table table-striped table-bordered table-hover"><thead><tr><th style="width:50%;">English</th><th style="width:50%;">Türkçe</th></tr></thead><tbody>';
  html += '<tr><th>'+capitalizeFirstLetter(first.eng)+'</th><td>'+capitalizeFirstLetter(first.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(second.eng)+'</th><td>'+capitalizeFirstLetter(second.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(thirth.eng)+'</th><td>'+capitalizeFirstLetter(thirth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fourth.eng)+'</th><td>'+capitalizeFirstLetter(fourth.tr)+'</td></tr>';
  html += '<tr><th>'+capitalizeFirstLetter(fifth.eng)+'</th><td>'+capitalizeFirstLetter(fifth.tr)+'</td></tr>';
  html += '</tbody></table>';
$("#hard").html(html);
}

function capitalizeFirstLetter(string) {
  string = string.trim();
    return string.charAt(0).toUpperCase() + string.slice(1);
}
