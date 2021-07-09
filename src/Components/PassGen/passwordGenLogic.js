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
  }

  generate = () => {
    const lenChecker = () => {
      const minNums = parseInt(this.minNums);
      const minSyms = parseInt(this.minSyms);
      const passLen = parseInt(this.passLen);
      const msg =
        "Invalid length: increase your minimum values or password length.";

      if (this.nums && this.syms) {
        if (passLen < minSyms + minNums) {
          this.value = msg;
          return false;
        }
      } else if (this.nums) {
        if (passLen < minNums) {
          this.value = msg;
          return false;
        }
      } else if (this.syms) {
        if (passLen < minSyms) {
          this.value = msg;
          return false;
        }
      }
      return true;
    };

    const passBuilder = (source) => {
      const shuffle = (array) => {
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
      };

      let tempPassword = [];

      if (this.nums) {
        for (let i = 0; i < this.minNums; i++) {
          const randomIndex = Math.floor(Math.random() * "0123456789".length);
          tempPassword.push("0123456789"[randomIndex]);
        }
      }

      if (this.syms) {
        for (let i = 0; i < this.minSyms; i++) {
          const randomIndex = Math.floor(Math.random() * "!@#$%^&*".length);
          tempPassword.push("!@#$%^&*"[randomIndex]);
        }
      }

      shuffle(tempPassword);

      while (tempPassword.length > this.passLen) {
        tempPassword.pop();
      }

      while (tempPassword.length < this.passLen) {
        const randomIndex = Math.floor(Math.random() * source.length);
        tempPassword.push(source[randomIndex]);
      }

      shuffle(tempPassword);

      let finalPassword = tempPassword.join("");
      return finalPassword;
    };

    if (!lenChecker()) {
      return;
    }

    let source = "";
    const lowercaseVals = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const symbols = "!@#$%^&*";

    if (this.lowercase) {
      source += lowercaseVals;
    }
    if (this.uppercase) {
      source += uppercaseVals;
    }
    if (this.nums) {
      source += nums;
    }
    if (this.syms) {
      source += symbols;
    }
    if (source) {
      this.value = passBuilder(source);
    } else {
      this.value = "Please select at least one option.";
    }
  };
}

export default Password;
