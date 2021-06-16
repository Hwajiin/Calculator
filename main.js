class Calculator {
  constructor() {
    this.btns = document.querySelector(".btn-box");
    this.input = document.querySelector(".board input");
    this.resultBtn = document.querySelector(".result");
    this.clearBtn = document.querySelector(".clear");
    this.allClearBtn = document.querySelector(".allClear");
    this.setEventListeners();
  }

  setEventListeners = () => {
    this.btns.addEventListener("click", this.paintText);
    this.resultBtn.addEventListener("click", this.printResult);
    this.clearBtn.addEventListener("click", this.clear);
    this.allClearBtn.addEventListener("click", this.allClear);
  };

  paintText = (e) => {
    const value = e.target.dataset.value;
    if (value) {
      this.input.value += value;
    }
  };

  allClear = () => {
    this.input.value = "";
  };

  clear = () => {
    // length의 마지막을 삭제해주면 되려나?
    const exp = this.input.value;
    this.input.value = exp.slice(0, exp.length - 1);
  };

  printResult = () => {
    // const result = eval(this.input.value).toFixed(3);
    // this.input.value = result;
    const result = Math.floor(eval(this.input.value) * 1000) / 1000;
    this.input.value = result;
  };
}

new Calculator();
