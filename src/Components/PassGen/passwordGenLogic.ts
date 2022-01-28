class Password {
  lowercase: boolean
  uppercase: boolean
  nums: boolean
  syms: boolean
  minNums: number
  minSyms: number
  passLen: number
  value: string

  LOWER = "abcdefghijklmnopqrstuvwxyz";
  UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  NUMS = "0123456789";
  SYMS = "!@#$%^&*"

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
    const lenChecker = (): boolean => {
      const minNums = this.minNums;
      const minSyms = this.minSyms;
      const passLen = this.passLen;
      const msg = "invalidLen";

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

    const passBuilder = (source: string): string => {

      const shuffle = (password: string[]): string[] => {
        // Fisher-Yates Shuffle
        var currentIndex = password.length,
          randomIndex: number;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [password[currentIndex], password[randomIndex]] = [
            password[randomIndex],
            password[currentIndex],
          ];
        }
        return password;
      };

      const tempPassword: string[] = [];

      if (this.nums) {
        for (let i = 0; i < this.minNums; i++) {
          const randomIndex = Math.floor(Math.random() * this.NUMS.length);
          tempPassword.push(this.NUMS[randomIndex]);
        }
      }

      if (this.syms) {
        for (let i = 0; i < this.minSyms; i++) {
          const randomIndex = Math.floor(Math.random() * this.SYMS.length);
          tempPassword.push(this.SYMS[randomIndex]);
        }
      }

      while (tempPassword.length > this.passLen) {
        tempPassword.pop();
      }

      while (tempPassword.length < this.passLen) {
        const randomIndex = Math.floor(Math.random() * source.length);
        tempPassword.push(source[randomIndex]);
      }

      shuffle(tempPassword);

      const finalPassword = tempPassword.join("");
      return finalPassword;
    };

    if (!lenChecker()) {
      return;
    }

    let source = "";

    if (this.lowercase) {
      source += this.LOWER;
    }
    if (this.uppercase) {
      source += this.UPPER;
    }
    if (this.nums) {
      source += this.NUMS;
    }
    if (this.syms) {
      source += this.SYMS;
    }
    if (source) {
      this.value = passBuilder(source);
    } else {
      this.value = "invalidNoOptions";
    }
  };
}

export default Password;
