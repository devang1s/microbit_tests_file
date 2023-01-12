function askquestion () {
    if (question_no == 1) {
        basic.showString("what is the capital of The UK")
        basic.showString("A=London, B=Athens")
    }
}
let question_no: colorbit.Strip = null
question_no.drawColorBit(1, 1, colorbit.colors(BitColors.Green))
