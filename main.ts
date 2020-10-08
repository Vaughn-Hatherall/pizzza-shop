// Created by Vaughn Hatherall on October 8 to calculate cost of pizzas
//  
game.splash("Hi Welcome To Papa Johns press A so I can take your order")
let Width = game.askForNumber("Ok and how wide do you want that pizza (inches)")
let Subtotal = 0.5 * (Width + (0.75 + 1))
let total = 1.13 * Subtotal
total = Math.round(0)
