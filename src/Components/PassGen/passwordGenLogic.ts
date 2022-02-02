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

      const minChars = (charset: string, minLen: number): string[] => {
        const minChars: string[] = [];

        for (let i = 0; i < minLen; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          minChars.push(charset[randomIndex]);
        }
        return minChars;
      }
      
      const tempPassword: string[] = [];

      if (this.lowercase) {
        tempPassword.push(...minChars(this.LOWER, 1));
      }

      if (this.uppercase) {
        tempPassword.push(...minChars(this.UPPER, 1));
      }

      if (this.nums) {
        tempPassword.push(...minChars(this.NUMS, this.minNums));
      }

      if (this.syms) {
        tempPassword.push(...minChars(this.SYMS, this.minSyms));
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
