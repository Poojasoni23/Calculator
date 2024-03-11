let output = document.getElementById("Output")

function handleValue(input) {
    output.value += input
}

function handleclear() {
    output.value = ""
}

function handleEqual() {
    output.value = eval(output.value)
}

function handlebackspace() {
    output.value = output.value.slice(0, -1)
}