// Created by Vaughn Hatherall on October 8 to calculate cost of pizzas
//  
game.splash("Hi Welcome To pizza place  press A I can take your order")
let Width = game.askForNumber("Ok and how wide do you want that pizza (inches)")
let Subtotal = 0.75 + (1 + 0.5 * Width)
let total = 1.13 * Subtotal
total = total * 100
total = Math.round(total)
total = total / 100
game.splash("Ok your order will be", convertToText(total))
