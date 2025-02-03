// Level data (stored seperately).
const questions = {
    math: {
        l1: {
            info: {
                title: "Addition",
                content: '<h3>When you see the + sign, that means that you should add the numbers together.</h3><h3><u>Example:</u></h3><h3>Imagine you have 2 apples, and your friend has 3.</h3><h3>Together, both of you have 5 apples.</h3><h3>2 + 3 = 5</h3><h3><u>For larger numbers:</u></h3><h3>In certain cases, you can add the digits seperately (the tens and hundreads) and still get your desired number.</h3><h3>250 + 40 = 290</h3><h3>Still, remember that, in certain cases, you have to carry over if a certain digit gets too big (if there is a hundread inside the tens).</h3><h3>340 + 70 = 410</h3><h2>Win condition: 10 score</h2>',
                minScore: 10
            },
            q1: {
                question: "If Joe has 1 banana, and Myrtle has 4 bananas, how many bananas does Myrtle have?",
                answer: 5,
                timer: 15
            },
            q2: {
                question: "Fredrick has 8 toy cars and 7 toy trucks, while Neil only has 4 toy cars. How many toy cars in total do they both have?",
                answer: 12,
                timer: 15
            },
            q3: {
                question: "What is 6 + 9?",
                answer: 15,
                timer: 10
            },
            q4: {
                question: "If Lisa has 5 dollar bills, Jack has 4 and Alex has 3, how many dollar bills do all 3 have in total?",
                answer: 12,
                timer: 15
            },
            q5: {
                question: "What is 11 + 80?",
                answer: 91,
                timer: 20
            },
            q6: {
                question: "What is 5 + 6 + 13?",
                answer: 24,
                timer: 20
            },
            q7: {
                question: "What is 17 + 34 + 6?",
                answer: 57,
                timer: 30
            },
            q8: {
                question: "What is 50 + 200 + 100?",
                answer: 350,
                timer: 30
            },
            q9: {
                question: "What is 300 + 250 + 160?",
                answer: 710,
                timer: 30
            },
            q9: {
                question: "70 + _ = 74. What is the missing number?",
                answer: 4,
                timer: 15
            },
            q10: {
                question: "58 + _ = 67. What is the missing number?",
                answer: 9,
                timer: 30
            },
            q11: {
                question: "What is 54 + 68 + 77?",
                answer: 199,
                timer: 60
            },
            q12: {
                question: "57 + _ + 46 = 119. What is the missing number?",
                answer: 16,
                timer: 60
            }
        },
        l2: {
            info: {
                title: "Substraction",
                content: "<h3>When you see the - sign, that means that you should take away the amount to the right of it from the number to the left of it.</h3><h3><u>Example:</u></h3><h3>Imagine you have 4 candies. If you eat 1 of them, you'll have 3 candies left.</h3><h3>4 - 1 = 3</h3><h3>Just do the opposite of substraction, except this time, it matters which number are you substracting from the other!</h3><h2>Win condition: 10 score</h2>",
                minScore: 10
            },
            q1: {
                question: "If Sara had 5 candies and she ate 3 of them, how many candies does Sara have left?",
                answer: 2,
                timer: 15
            },
            q2: {
                question: "Jake had 12 toy cars and 5 superhero figurines, but recently he'd lost 3 of his toy cars and 1 of his superhero figurines. How much toys does he have left??",
                answer: 13,
                timer: 20
            },
            q3: {
                question: "What is 14 - 5?",
                answer: 9,
                timer: 10
            },
            q4: {
                question: "What is 36 - 22?",
                answer: 24,
                timer: 15
            },
            q5: {
                question: "What is 10 - 2 - 6?",
                answer: 2,
                timer: 15
            },
            q6: {
                question: "What is 20 + 4 - 4?",
                answer: 20,
                timer: 10
            },
            q7: {
                question: "What is 27 + 13 - 5?",
                answer: 35,
                timer: 15
            },
            q8: {
                question: "What is 136 - 74?",
                answer: 62,
                timer: 20
            },
            q9: {
                question: "What is 123 + 45 - 38?",
                answer: 130,
                timer: 30
            },
            q10: {
                question: "What is 220 - 110 + 345?",
                answer: 455,
                timer: 20
            },
            q11: {
                question: "What is 540 + 550 - 550 - 48?",
                answer: 492,
                timer: 20
            },
            q12: {
                question: "What is 566 - 386?",
                answer: 180,
                timer: 30
            }

        },
        l3: {
            info: {
                title: "Multiplication",
                content: "<h3>When you see the × sign, that means that you should add the same number over and over again for a certain number of times.</h3><h3><u>Example:</u></h3><h3>If you have 2 bags containing 5 bananas each, that means that you have 10 bananas in total.</h3><h3>5 × 2 = 10</h3><h3><u>When multiplying by the powers of 10:</u></h3><h3>When muliplying any number by a 1 with a bunch of 0s after it, like a 10 or a 100, you can just add the 0s from that number to the number you're multiplying.</h3><h3>5 × 10 = 50</h3><h3>250 × 100 = 25000</h3><h2>Win condition: 8 score</h2>",
                minScore: 8
            },
            q1: {
                question: "If Niko has 5 boxes, with each of them having 8 toys in them, how many toys does Niko have in total?",
                answer: 64,
                timer: 15
            },
            q2: {
                question: "Courtney was gifted 15 euros from each guest who had attended her birthday. If 12 guests attended her bithday, how many euros did she get in total?",
                answer: 180,
                timer: 30
            },
            q3: {
                question: "What is 20 × 8?",
                answer: 160,
                timer: 20
            },
            q4: {
                question: "What is 6 × 18??",
                answer: 108,
                timer: 30
            },
            q5: {
                question: "What is 3 × 83?",
                answer: 249,
                timer: 30
            },
            q6: {
                question: "What is 20 × 100?",
                answer: 2000,
                timer: 20
            },
            q7: {
                question: "What is 5 × 4 × 12?",
                answer: 240,
                timer: 30
            },
            q8: {
                question: "2 × _ = 16. What is the missing number?",
                answer: 8,
                timer: 15
            },
            q9: {
                question: "What is 2 × 3 + 4?",
                answer: 10,
                timer: 15
            },
            q10: {
                question: "What is 5680 × 1000 × 10?",
                answer: 56800000,
                timer: 30
            }
        },
        l4: {
            info: {
                title: "Division",
                content: "<h3>When you see the ÷ sign, that means that you should check how many times would the numer to the right fit in the number to the left.</h3><h3><u>Example:</u></h3><h3>Imagine that you and your friend have 6 cookies. You want to share these cookies equally, which is why both of you get 3 cookies each.</h3><h3>6 ÷ 2 = 3</h3><h3>Basically, you are dividing the number to the left in equal parts, splitting it into the amount of pieces written on the right.</h3><h2>Win condition: 8 score</h2>",
                minScore: 8
            },
            q1: {
                question: "If Nancy has 9 candy bars and wants to share them equally with 2 of her friends, how many candy bars will she get?",
                answer: 3,
                timer: 15
            },
            q2: {
                question: "Pablo has a deck of 35 cards, which he'll have to split with himself and 6 of his friends. How many cards will each player get?",
                answer: 5,
                timer: 10
            },
            q3: {
                question: "What is 60 ÷ 5?",
                answer: 12,
                timer: 15
            },
            q4: {
                question: "What is 24 ÷ 3?",
                answer: 8,
                timer: 15
            },
            q5: {
                question: "What is 100 ÷ 10?",
                answer: 10,
                timer: 10
            },
            q6: {
                question: "What is 120 ÷ 40?",
                answer: 3,
                timer: 15
            },
            q7: {
                question: "What is 36 ÷ 6?",
                answer: 6,
                timer: 15
            },
            q8: {
                question: "What is 76 ÷ 4?",
                answer: 19,
                timer: 20
            },
            q9: {
                question: "What is 90 ÷ 3?",
                answer: 30,
                timer: 15
            },
            q10: {
                question: "What is 680 ÷ 34",
                answer: 20,
                timer: 30
            }
        },
        l5: {
            info: {
                title: "Disabled.",
                content: "<h3>This level is not completed yet, neither are the next 7...</h3><h3>Still, the main product is completed (the code itself, this is a reusable game window).",
                minScore: 1
            },
        }
    }
};
// Saves the level data as temporary cookies (only for a single session), allowing said data to be retrieved in other parts of the website.
sessionStorage.setItem('levelData', JSON.stringify(questions));
