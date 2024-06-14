const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const message = document.querySelector(".message");
const messageBox = document.querySelector(".message-box");
const box = document.querySelectorAll(".box");
const stack = [];

const buttonDisable = () => {
    push.disabled = true;
    push.classList.add("disable-button");
    pop.disabled = true;
    pop.classList.add("disable-button");
    reset.disabled = true;
    reset.classList.add("disable-button");
    input.disabled = true;
};
const buttonEnable = () => {
    push.disabled = false;
    push.classList.remove("disable-button");
    pop.disabled = false;
    pop.classList.remove("disable-button");
    reset.disabled = false;
    reset.classList.remove("disable-button");
    input.disabled = false;
};

//when the push button will be clicked
push.addEventListener("click", () => {
    // if input box is empty
    if (input.value == "") {
        message.innerHTML = "Please Enter a value.";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }
    // if stack is full
    if (stack.length == 5) {
        input.value = "";
        message.innerHTML = "Stack Overflow";
        messageBox.classList.add("error-message");
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }
    const itemValue = input.value;
    stack.push(itemValue);

    const element = document.createElement("div");
    element.classList.add("ele");
    element.innerText = stack[stack.length - 1];
    bucket.appendChild(element);

    box[0].innerHTML = stack[stack.length - 1];

    input.value = "";
    element.classList.add("ele-add");

    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");
        box[1].innerHTML = itemValue;
        message.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;
        buttonEnable();
    }, 1500);
});

pop.addEventListener("click", () => {
    if (stack.length == 0) {
        messageBox.classList.add("error-message");
        message.innerHTML = "Stack Underflow";
        setTimeout(() => {
            messageBox.classList.remove("error-message");
        }, 1200);
        return;
    }
    bucket.lastElementChild.classList.add("error-message");

    buttonDisable();

    setTimeout(() => {
        bucket.removeChild(bucket.lastElementChild);

        const itemValue = stack.pop();
        box[2].innerHTML = itemValue;

        if (stack.length == 0) {
            box[0].innerHTML = "";
        } else {
            box[0].innerHTML = stack[stack.length - 1];
        }
        message.innerHTML = `Item ${itemValue} is Popped.`;
        buttonEnable();
    }, 1500);
});

reset.addEventListener("click", () => {
    while (stack.length > 0) {
        stack.pop();
    }
    box[0].innerHTML = "";
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    message.innerHTML = "";
    while (bucket.firstChild) {
        bucket.removeChild(bucket.firstChild);
    }
});

