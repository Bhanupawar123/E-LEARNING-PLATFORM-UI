function increaseProgress() {
  let progressBar = document.getElementById("progressBar");
  let progressText = document.getElementById("progressText");

  if (progressBar.value < 100) {
    progressBar.value += 20;
    progressText.innerText = 'Progress: ${progressBar.value}%';
  } else {
    alert("🎉 Course Completed!");
  }
}
