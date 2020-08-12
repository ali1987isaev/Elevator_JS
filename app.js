const audio = document.querySelector("audio"),
  controlPanel = document.querySelector(".controlPanel"),
  building = document.querySelector(".buildingContainer"),
  floors = document.querySelectorAll(".floor"),
  floor_1 = document.querySelector(".floor_1"),
  floor_2 = document.querySelector(".floor_2"),
  floor_3 = document.querySelector(".floor_3"),
  floor_4 = document.querySelector(".floor_4"),
  floor_5 = document.querySelector(".floor_5"),
  CB1 = document.querySelector(".CB1"),
  CB2 = document.querySelector(".CB2"),
  CB3 = document.querySelector(".CB3"),
  CB4 = document.querySelector(".CB4"),
  CB5 = document.querySelector(".CB5"),
  screen = document.querySelector(".screen");
timer = document.querySelector(".timer");

let functionArr = [];
let elevatorState = false;
let controlPanelBtn = [];
let screenValue = "";
let elevatorValue = 1;

(function () {
  floor_1.childNodes[1].classList.add("elevatorPosition--active");
})();

controlPanel.addEventListener("click", (e) => {
  e.target.classList.contains("CB1") ? functionQueue(activeFloor_1) : false;
  e.target.classList.contains("CB2") ? functionQueue(activeFloor_2) : false;
  e.target.classList.contains("CB3") ? functionQueue(activeFloor_3) : false;
  e.target.classList.contains("CB4") ? functionQueue(activeFloor_4) : false;
  e.target.classList.contains("CB5") ? functionQueue(activeFloor_5) : false;
});
controlPanel.addEventListener("click", (e) => {
  e.target.classList.contains("CB1") ? activeElevatorBtn(floor_1, e) : false;
  e.target.classList.contains("CB2") ? activeElevatorBtn(floor_2, e) : false;
  e.target.classList.contains("CB3") ? activeElevatorBtn(floor_3, e) : false;
  e.target.classList.contains("CB4") ? activeElevatorBtn(floor_4, e) : false;
  e.target.classList.contains("CB5") ? activeElevatorBtn(floor_5, e) : false;
});

building.addEventListener("click", (e) => {
  buttonUp(e);
});

function buttonUp(e) {
  e.target.classList.contains("buttonUp") &&
  e.target.parentElement.parentElement.classList.contains("floor_4")
    ? functionQueue(activeFloor_4) + activeElevatorBtn(floor_4, e)
    : false;
  e.target.classList.contains("buttonUp") &&
  e.target.parentElement.parentElement.classList.contains("floor_3")
    ? functionQueue(activeFloor_3) + activeElevatorBtn(floor_3, e)
    : false;
  e.target.classList.contains("buttonUp") &&
  e.target.parentElement.parentElement.classList.contains("floor_2")
    ? functionQueue(activeFloor_2) + activeElevatorBtn(floor_2, e)
    : false;
  e.target.classList.contains("buttonUp") &&
  e.target.parentElement.parentElement.classList.contains("floor_1")
    ? functionQueue(activeFloor_1) + activeElevatorBtn(floor_1, e)
    : false;
}

building.addEventListener("click", (e) => {
  buttonDown(e);
});

function buttonDown(e) {
  e.target.classList.contains("buttonDown") &&
  e.target.parentElement.parentElement.classList.contains("floor_5")
    ? functionQueue(activeFloor_5) + activeElevatorBtn(floor_5, e)
    : false;
  e.target.classList.contains("buttonDown") &&
  e.target.parentElement.parentElement.classList.contains("floor_4")
    ? functionQueue(activeFloor_4) + activeElevatorBtn(floor_4, e)
    : false;
  e.target.classList.contains("buttonDown") &&
  e.target.parentElement.parentElement.classList.contains("floor_3")
    ? functionQueue(activeFloor_3) + activeElevatorBtn(floor_3, e)
    : false;
  e.target.classList.contains("buttonDown") &&
  e.target.parentElement.parentElement.classList.contains("floor_2")
    ? functionQueue(activeFloor_2) + activeElevatorBtn(floor_2, e)
    : false;
}

function activeElevatorBtn(floor, e) {
  elevatorValue < e.target.dataset.value
    ? floor.childNodes[3].childNodes[1].classList.add("button--active")
    : false;

  elevatorValue > e.target.dataset.value && floor.childNodes[3].childNodes[3]
    ? floor.childNodes[3].childNodes[3].classList.add("button--active")
    : floor.childNodes[3].childNodes[1].classList.add("button--active");

  e.target.classList.add("controlButton--active");
  controlPanelBtn.push(e.target);
}

function activeFloor_1() {
  floor_1.classList.add("active");
  screenValue = 1;
}
function activeFloor_2() {
  floor_2.classList.add("active");
  screenValue = 2;
}
function activeFloor_3() {
  floor_3.classList.add("active");
  screenValue = 3;
}
function activeFloor_4() {
  floor_4.classList.add("active");
  screenValue = 4;
}
function activeFloor_5() {
  floor_5.classList.add("active");
  screenValue = 5;
}

function functionQueue(foo) {
  functionArr.push(foo);
  if (elevatorState === false) {
    elevatorActivator();
  }
}

function elevatorActivator() {
  elevatorState = true;
  if (functionArr.length > 0) {
    const start = functionArr.shift();
    start();
  }
  elevatorMoveUp();
  elevatorMoveDown();
}

function elevatorMoveDown() {
  elevatorValue === 5 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        floor_5.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[3].classList.add("button--active");
        elevatorValue = 4;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 5 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        floor_5.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_4.childNodes[1].classList.remove("elevatorPosition--active");
          floor_4.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[3].classList.add("button--active");
          elevatorValue = 3;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 5 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        floor_5.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_4.childNodes[1].classList.remove("elevatorPosition--active");
          floor_4.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[3].classList.add("button--active");
          setTimeout(() => {
            floor_3.childNodes[1].classList.remove("elevatorPosition--active");
            floor_3.childNodes[3].childNodes[3].classList.remove(
              "button--active"
            );
            floor_2.childNodes[1].classList.add("elevatorPosition--active");
            floor_2.childNodes[3].childNodes[3].classList.add("button--active");
            elevatorValue = 2;
            setTimeout(activeFloor, 100);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 5 && floor_1.classList.contains("active")
    ? setTimeout(() => {
        floor_5.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_4.childNodes[1].classList.remove("elevatorPosition--active");
          floor_4.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[3].classList.add("button--active");
          setTimeout(() => {
            floor_3.childNodes[1].classList.remove("elevatorPosition--active");
            floor_3.childNodes[3].childNodes[3].classList.remove(
              "button--active"
            );
            floor_2.childNodes[1].classList.add("elevatorPosition--active");
            floor_2.childNodes[3].childNodes[3].classList.add("button--active");
            setTimeout(() => {
              floor_2.childNodes[1].classList.remove(
                "elevatorPosition--active"
              );
              floor_2.childNodes[3].childNodes[3].classList.remove(
                "button--active"
              );
              floor_1.childNodes[1].classList.add("elevatorPosition--active");
              floor_1.childNodes[3].childNodes[1].classList.add(
                "button--active"
              );
              elevatorValue = 1;
              setTimeout(activeFloor, 100);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 4;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        floor_4.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[3].classList.add("button--active");
        elevatorValue = 3;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        floor_4.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_3.childNodes[1].classList.remove("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_2.childNodes[1].classList.add("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[3].classList.add("button--active");
          elevatorValue = 2;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_1.classList.contains("active")
    ? setTimeout(() => {
        floor_4.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_3.childNodes[1].classList.remove("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_2.childNodes[1].classList.add("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[3].classList.add("button--active");
          setTimeout(() => {
            floor_2.childNodes[1].classList.remove("elevatorPosition--active");
            floor_2.childNodes[3].childNodes[3].classList.remove(
              "button--active"
            );
            floor_1.childNodes[1].classList.add("elevatorPosition--active");
            elevatorValue = 1;
            setTimeout(activeFloor, 100);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 3;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        floor_3.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[3].classList.add("button--active");
        elevatorValue = 2;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_1.classList.contains("active")
    ? setTimeout(() => {
        floor_3.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[3].classList.add("button--active");
        setTimeout(() => {
          floor_2.childNodes[1].classList.remove("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[3].classList.remove(
            "button--active"
          );
          floor_1.childNodes[1].classList.add("elevatorPosition--active");
          floor_1.childNodes[3].childNodes[1].classList.add("button--active");
          elevatorValue = 1;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 2 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 2;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 2 && floor_1.classList.contains("active")
    ? setTimeout(() => {
        floor_2.childNodes[1].classList.remove("elevatorPosition--active");
        floor_1.childNodes[1].classList.add("elevatorPosition--active");
        floor_1.childNodes[3].childNodes[1].classList.add("button--active");
        elevatorValue = 1;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;
}

function elevatorMoveUp() {
  elevatorValue === 1 && floor_1.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 1;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 1 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        floor_1.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[1].classList.add("button--active");
        elevatorValue = 2;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 1 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        floor_1.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_2.childNodes[1].classList.remove("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          elevatorValue = 3;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 1 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        floor_1.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_2.childNodes[1].classList.remove("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[1].classList.add("button--active");
          setTimeout(() => {
            floor_3.childNodes[1].classList.remove("elevatorPosition--active");
            floor_3.childNodes[3].childNodes[1].classList.remove(
              "button--active"
            );
            floor_4.childNodes[1].classList.add("elevatorPosition--active");
            elevatorValue = 4;
            setTimeout(activeFloor, 100);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 1 && floor_5.classList.contains("active")
    ? setTimeout(() => {
        floor_1.childNodes[1].classList.remove("elevatorPosition--active");
        floor_2.childNodes[1].classList.add("elevatorPosition--active");
        floor_2.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_2.childNodes[1].classList.remove("elevatorPosition--active");
          floor_2.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_3.childNodes[1].classList.add("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[1].classList.add("button--active");
          setTimeout(() => {
            floor_3.childNodes[1].classList.remove("elevatorPosition--active");
            floor_3.childNodes[3].childNodes[1].classList.remove(
              "button--active"
            );
            floor_4.childNodes[1].classList.add("elevatorPosition--active");
            floor_4.childNodes[3].childNodes[1].classList.add("button--active");
            setTimeout(() => {
              floor_4.childNodes[1].classList.remove(
                "elevatorPosition--active"
              );
              floor_4.childNodes[3].childNodes[1].classList.remove(
                "button--active"
              );
              floor_5.childNodes[1].classList.add("elevatorPosition--active");
              floor_5.childNodes[3].childNodes[1].classList.add(
                "button--active"
              );
              elevatorValue = 5;
              setTimeout(activeFloor, 100);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 2 && floor_2.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 2;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 2 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        floor_2.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[1].classList.add("button--active");
        elevatorValue = 3;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 2 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        floor_2.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_3.childNodes[1].classList.remove("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_4.childNodes[1].classList.add("elevatorPosition--active");
          elevatorValue = 4;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;
  
  elevatorValue === 2 && floor_5.classList.contains("active")
    ? setTimeout(() => {
        floor_2.childNodes[1].classList.remove("elevatorPosition--active");
        floor_3.childNodes[1].classList.add("elevatorPosition--active");
        floor_3.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_3.childNodes[1].classList.remove("elevatorPosition--active");
          floor_3.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_4.childNodes[1].classList.add("elevatorPosition--active");
          floor_4.childNodes[3].childNodes[1].classList.add("button--active");
          setTimeout(() => {
            floor_4.childNodes[1].classList.remove("elevatorPosition--active");
            floor_4.childNodes[3].childNodes[1].classList.remove(
              "button--active"
            );
            floor_5.childNodes[1].classList.add("elevatorPosition--active");
            elevatorValue = 5;
            setTimeout(activeFloor, 100);
          }, 1000);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_3.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 3;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        floor_3.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[1].classList.add("button--active");
        elevatorValue = 4;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 3 && floor_5.classList.contains("active")
    ? setTimeout(() => {
        floor_3.childNodes[1].classList.remove("elevatorPosition--active");
        floor_4.childNodes[1].classList.add("elevatorPosition--active");
        floor_4.childNodes[3].childNodes[1].classList.add("button--active");
        setTimeout(() => {
          floor_4.childNodes[1].classList.remove("elevatorPosition--active");
          floor_4.childNodes[3].childNodes[1].classList.remove(
            "button--active"
          );
          floor_5.childNodes[1].classList.add("elevatorPosition--active");
          elevatorValue = 5;
          setTimeout(activeFloor, 100);
        }, 1000);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_4.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 4;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 4 && floor_5.classList.contains("active")
    ? setTimeout(() => {
        floor_4.childNodes[1].classList.remove("elevatorPosition--active");
        floor_5.childNodes[1].classList.add("elevatorPosition--active");
        floor_5.childNodes[3].childNodes[1].classList.add("button--active");
        elevatorValue = 5;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;

  elevatorValue === 5 && floor_5.classList.contains("active")
    ? setTimeout(() => {
        elevatorValue = 5;
        setTimeout(activeFloor, 100);
      }, 1000)
    : false;
}

function activeFloor() {
  floors.forEach((floor) => {
    if (floor.classList.contains("active")) {
      setTimeout(() => {
        screen.textContent = screenValue;
        setTimeout(() => {
          floor.childNodes[1].childNodes[3].classList.add("doorOpen--active");
          audio.play();
          setTimeout(() => {
            floor.childNodes[1].childNodes[3].classList.remove(
              "doorOpen--active"
            );
            setTimeout(() => {
              floor.childNodes[3].childNodes[1] &&
              floor.childNodes[3].childNodes[1].classList.contains(
                "button--active"
              )
                ? floor.childNodes[3].childNodes[1].classList.remove(
                    "button--active"
                  )
                : floor.childNodes[3].childNodes[3] &&
                  floor.childNodes[3].childNodes[3].classList.contains(
                    "button--active"
                  )
                ? floor.childNodes[3].childNodes[3].classList.remove(
                    "button--active"
                  )
                : false;

              floor.classList.remove("active");
              removeActiveClassControlPanel();
              screen.textContent = "";
              elevatorActivator();
              functionArr.length === 0
                ? (elevatorState = false) 
                + setTimeout(() => {
                  restartElevator()
                }, 10000)
                : false;
            }, 2000);
          }, 3000);
        }, 1000);
      }, 1000);
    }
  });
}

function removeActiveClassControlPanel() {
  if (controlPanelBtn.length > 0) {
    const activePanelBtn = controlPanelBtn.shift();
    activePanelBtn.classList.remove("controlButton--active");
  }
}

function restartElevator() {
  elevatorValue > 1
  ? setTimeout(() => {
    timer.dataset.timer = 5;
    timer.textContent = timer.dataset.timer;
    setTimeout(() => {
      timer.dataset.timer--;
      timer.textContent = timer.dataset.timer;
      setTimeout(() => {
        timer.dataset.timer--;
        timer.textContent = timer.dataset.timer;
        setTimeout(() => {
          timer.dataset.timer--;
          timer.textContent = timer.dataset.timer;
          setTimeout(() => {
            timer.dataset.timer--;
            timer.textContent = timer.dataset.timer;
            setTimeout(() => {
              timer.dataset.timer--;
              timer.dataset.timer == 0 ? goDown() : false;
              function goDown() {
                functionQueue(activeFloor_1);
                timer.innerHTML = `&#11206;`;
                timer.style.fontSize = "30px";
                elevatorValue = 1;
                setTimeout(() => {
                  removeActiveClassControlPanel();
                  timer.style.fontSize = "20px";
                }, 1000);
              }
            }, 500);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000)
  :false;
}
