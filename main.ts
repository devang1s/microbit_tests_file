input.onButtonPressed(Button.A, function () {
    if (question_no == 1) {
        basic.showIcon(IconNames.Yes)
    }
})
function askquestion () {
    if (question_no == 1) {
        basic.showString("what is the capital of The UK")
        basic.showString("A=London, B=Athens")
    }
}
input.onButtonPressed(Button.B, function () {
    if (question_no == 1) {
        basic.showIcon(IconNames.No)
    }
})
let question_no = 0
basic.showString("Hello!")
question_no = 1
askquestion()
