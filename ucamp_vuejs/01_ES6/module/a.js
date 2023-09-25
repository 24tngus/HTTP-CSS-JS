
export let n = 100;

export function fun() {
    console.log("fun");
}

export class Person {
    info() {
        console.log("info");
    }
}

export const xxx = () => 100;

function fun2() {
    console.log("fun2");
}

class Person2 {
    info2() {
        console.log("info2");
    }
}

export { fun2, Person2 }