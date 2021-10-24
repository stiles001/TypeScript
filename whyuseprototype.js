/**
 * 原型上的方法和属性都可以被构造函数的实例锁共享
 * 对比参考如下例子，并没有被共享，每一个实例都会有自己单独的内存空间(包括commonFriends/show())
 * 使用原型解决所有实例上的方法，还有所有实例上的共同属性都可以放到原型上去
 * @param {*} number 
 * @param {*} age 
 * @param {*} mark 
 */

function QQUser(number, age, mark) {
    this.number = number;
    this.age = age;
    this.mark = mark;

    // 数组是引用数据类型 
    this.commonFriends = [1, 2, 3];

    // 函数也是一种引用数据类型
    this.show = function() {
        console.log(this.number);
        console.log(this.age);
        console.log(this.mark);
    }
}

// 对象也叫实例
// zhangSan是对象变量   对象是等号右边通过new出来的一个实例，而且是在运行期间才在堆中开辟对象的内存空间
let zhangSan = new QQUser("张三", 14, "14");
let liShi = new QQUser("李四", 14, "14");
let wangWu = new QQUser("王五", 14, "14");

zhangSan.show();
liShi.show();
wangWu.show();

// 定义在原型上面，所有的对象实例都可以访问，也不需要每个实例自己进行单独保存
// 修改原型对象的属性或者方法后，所有的实例或者对象都可以访问到
// 创建实例后再覆盖，实例对象无法访问到
QQUser.prototype.commonFunction = function() {
    console.log(this.number);
}