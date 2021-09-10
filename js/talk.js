new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("吴沂潞 & 吴老师")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("教师节快乐啦^◡^.！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();