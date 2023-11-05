const stack = [];
const stackContainer = document.querySelector(".stack");
const pushButton = document.getElementById("pushButton");
const popButton = document.getElementById("popButton");
const peekButton = document.getElementById("peekButton");
const inputValue = document.getElementById("inputValue");

pushButton.addEventListener("click", () => {
    const value = inputValue.value;
    if (value) {
        stack.push(value);
        const stackBox = document.createElement("div");
        stackBox.classList.add("stack-box", "animation");
        stackBox.innerText = value;
        stackContainer.appendChild(stackBox);
        inputValue.value = "";
    }
});

popButton.addEventListener("click", () => {
    if (stack.length > 0) {
        const stackBox = stackContainer.lastElementChild;
        stackBox.style.animation = "fadeBox 0.5s ease-in-out, moveBox 0.5s ease-in-out";
        stackBox.addEventListener("animationend", () => {
            stackBox.remove();
        });
        stack.pop();
    }
});


peekButton.addEventListener("click", () => {
    if (stack.length > 0) {
        alert("Top of the stack: " + stack[stack.length - 1]);
    } else {
        alert("Stack is empty.");
    }
});
