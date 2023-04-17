PullToRefresh.init({
  mainElement: "main",
  onRefresh: function () {
    setTime();
  },
});

function setTime() {
  document.getElementById("date").innerHTML = new Date().toLocaleString();
}

setTime();
TouchEmulator();
