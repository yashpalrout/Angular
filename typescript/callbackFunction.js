function process(name, callback) {
    console.log("Main function");
    callback();
}
process("yashpal", function () {
    console.log("Great work");
});
var callback1;
callback1 = function () {
    return "callback1";
};
function process1(callback1) {
    console.log("yashpal");
}
function basic1(i, fun) {
    console.log(fun);
}
basic1(10, function () {
    return 20;
});
