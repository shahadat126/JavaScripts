for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".my-button")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);

      switch (text) {
        case "A":
          var audio = new Audio("./Sounds/a.mp3");
          audio.play();
          break;
        case "B":
          var audio = new Audio("./Sounds/b.mp3");
          audio.play();
          break;
        case "C":
          var audio = new Audio("./Sounds/c.mp3");
          audio.play();
          break;
      }
    });
}
