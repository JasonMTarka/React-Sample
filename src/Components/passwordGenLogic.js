class Password {
  constructor({
    lowercase = true,
    uppercase = true,
    nums = true,
    syms = false,
    minNums = 2,
    minSyms = 2,
    passLen = 8,
    value = "",
  }) {
    this.lowercase = lowercase;
    this.uppercase = uppercase;
    this.nums = nums;
    this.syms = syms;
    this.minNums = minNums;
    this.minSyms = minSyms;
    this.passLen = passLen;
    this.value = value;

    this._source = "";
    this._lowercaseVals = "abcdefghijklmnopqrstuvwxyz";
    this._uppercaseVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this._nums = "0123456789";
    this._symbols = "!@#$%^&*";

    this.generate();
  }

  getCheckboxParams() {
    return {
      lowercase: this.lowercase,
      uppercase: this.uppercase,
      nums: this.nums,
      syms: this.syms,
    };
  }

  generate() {
    if (this.lowercase) {
      this._source += this._lowercaseVals;
    }
    if (this.uppercase) {
      this._source += this._uppercaseVals;
    }
    if (this.nums) {
      this._source += this._nums;
    }
    if (this.syms) {
      this._source += this._symbols;
    }
    if (this._source) {
      this.value = this.passBuilder();
    } else {
      this.value = "Please select at least one option.";
    }
  }

  passBuilder() {
    function shuffle(array) {
      // Fisher-Yates Shuffle
      var currentIndex = array.length,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }

    let tempPassword = [];

    if (this.nums) {
      for (let i = 0; i < this.minNums; i++) {
        const randomIndex = Math.floor(Math.random() * this._nums.length);
        tempPassword.push(this._nums[randomIndex]);
      }
    }

    if (this.syms) {
      for (let i = 0; i < this.minSyms; i++) {
        const randomIndex = Math.floor(Math.random() * this._symbols.length);
        tempPassword.push(this._symbols[randomIndex]);
      }
    }

    shuffle(tempPassword);

    while (tempPassword.length > this.passLen) {
      tempPassword.pop();
    }

    while (tempPassword.length < this.passLen) {
      const randomIndex = Math.floor(Math.random() * this._source.length);
      tempPassword.push(this._source[randomIndex]);
    }

    shuffle(tempPassword);

    let finalPassword = tempPassword.join("");
    return finalPassword;
  }
}

export default Password;
