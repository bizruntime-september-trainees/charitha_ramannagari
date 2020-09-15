console.time("timer starts");
try {
    console.group("try block");
    console.log("reaching server");
    console.warn("takes a while");
    console.log("still trying to reach");
    console.groupEnd();
    throw new Error("can't reach");
}
catch (e) {
    console.error(e.message);
}
finally {
    console.group("finally");
    setTimeout(function () {
        console.log("independently running code");
        function1();
        console.log("done");
        console.groupEnd();
        console.timeEnd("stopping running");

    }, 900);

}
function function1() {
    console.log("hello ramannagari charitha");
}


