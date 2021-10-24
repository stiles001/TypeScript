function QQUser(number, age, mark) {
    this.number = number;
    this.age = age;
    this.mark = mark;
    this.commonFriends = [1, 2, 3];
    this.show = function() {
        console.log(this.number);
    }
}

let zhangSan = new QQUser("张三", 14, "14");
let liShi = new QQUser("李四", 14, "14");
let wangWu = new QQUser("王五", 14, "14");