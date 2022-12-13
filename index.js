function shout(string) {
    'Hello!'.toUpperCase()
    return string.toUpperCase();
}
function whisper(string) {
    'Hello!'.toLowerCase()
    return string.toLowerCase();
    console.log(whisper)
}
function logShout() {
    const spy = 'HELLO';
    console.log(spy)
}

function logWhisper() {
    const spy = 'hello';
    console.log(spy)
}

function sayHiToHeadphonedRoommate(string) {
    if (string == "hello") {
        return "I can't hear you!"
    } else if (string == "HELLO") {
        return "YES INDEED!"
    } else (string == "Let's have dinner together!"); {
        return "I would love to!"
    }
}