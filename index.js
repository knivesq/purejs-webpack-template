//outside
let test = document.getElementById("template");
test.innerHTML = "TESTE WEBPACK";


//uso atraves de closure
(function () {
  let test2 = document.createElement("div");
  test2.innerHTML = "TESTE WEBPACK POR CLOSURE"
    test.appendChild(test2)
})();