//IE의 버전을 리턴한다.
//IE가 아닐 경우 0을 리턴.
function getIEVersion() {
  var appVersion = navigator.appVersion.toUpperCase();

  //IE 6~10
  for (var i = 7; i < 11; i++)
    if (appVersion.indexOf("MSIE " + i + ".") != -1) return i;

  //IE11
  if (
    navigator.appName == "Netscape" &&
    navigator.userAgent.toLowerCase().indexOf("trident") != -1
  )
    return 11;

  return 0;
}

function arrayToDate(arr) {
  var date = new Date();
  if (!arr) return;
  date.setFullYear(arr[0]);
  date.setMonth(arr[1] - 1);
  date.setDate(arr[2]);
  return date;
}

var ieVer = getIEVersion();
var now = new Date();

if (!ieVer) {
  $id("ie-info").style.display = "none";
} else {
  var lastUpdateDate = arrayToDate(
    {
      "7": [2009, 3, 1],
      "8": [2010, 3, 16],
      "9": [2011, 4, 12],
      "10": [2013, 7, 25],
      "11": [2015, 1, 21],
    }[ieVer]
  );
  $id("ie-version").innerHTML = ieVer;
  $id("old-browser").className = "";
  if (lastUpdateDate) {
    var timeDiff = Date.now() - lastUpdateDate.getTime();
    $id("browser-last-update-date").innerHTML =
      Math.floor(timeDiff / (1000 * 24 * 60 * 60)) + "일";
  } else {
    $id("browser-last-update-date").innerHTML = "최소 10년, 최대 20년";
  }
}

$id("year-diff-ie11").innerHTML = now.getFullYear() - 2015;
