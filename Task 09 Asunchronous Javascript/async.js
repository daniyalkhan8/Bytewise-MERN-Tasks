// // Asynchoronous

// console.log("I ");
// console.log("eat ");
// setTimeout(() => {
//     console.log("ice cream ");
// }, 4000);
// console.log("with ");
// console.log("a ");
// console.log("spoon.");

// // Function Call backs

// function one(call_two) {
//     console.log("Step 01 complete. Please call step 2.");
//     call_two();
// }

// function two() {
//     console.log("Step 02");
// }

// one(two);

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    Liquid: ["water", "ice"],
    Holder: ["cone", "cup", "stick"],
    Toppings: ["chocolate", "peanuts"]
};

// let order = (fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruit_name]} was selected.`);
//         call_production();
//     }, 2000);
// }

// let production = () => {
//     setTimeout(() => {
//         console.log("Production is started.");
//         setTimeout(() => {
//             console.log("The fruit has been chopped.");
//             setTimeout(() => {
//                 console.log(`Added ${stocks.Liquid[0]} and ${stocks.Liquid[1]}.`);
//                 setTimeout(() => {
//                     console.log("The machine has been started.");
//                     setTimeout(() => {
//                         console.log(`The container ${stocks.Holder[0]} is selected`);
//                         setTimeout(() => {
//                             console.log(`The toppings ${stocks.Toppings[0]} is added.`);
//                             setTimeout(() => {
//                                 console.log("The ice cream is now finally being served.");
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// }

// order(0, production);

let is_shop_open = true;

// // Promises
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         }
//         else {
//             reject(console.log("Shop is closed"));
//         }
//     });
// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
//     .then(() => {
//         return order(0000, () => console.log("Production has started."));
//     })
//     .then(() => {
//         return order(2000, () => console.log("The fruit was chopped."));
//     })
//     .then(() => {
//         return order(1000, () => console.log(`The ${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`));
//     })
//     .then(() => {
//         return order(1000, () => console.log("The machine has been started"));
//     })
//     .then(() => {
//         return order(2000, () => console.log(`The icecream has been put on the ${stocks.Holder[0]}.`));
//     })
//     .then(() => {
//         return order(3000, () => console.log(`${stocks.Toppings[0]} has been selected as the toppings.`));
//     })
//     .then(() => {
//         return order(1000, () => console.log("The ice cream has been serverd"));
//     })
//     .catch(() => {
//         console.log("Customer left");
//     })
//     .finally(() => {
//         console.log("Day ended shop is closed.")
//     });

// Async Await
// let toppings_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("Which toppings would you love."));
//         }, 3000);
//     });
// }

// async function kitchen() {
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice()
//     console.log("D");
//     console.log("E");
//     console.log("");
// }

// kitchen();

// console.log("Doing the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others orders");

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("Shop is closed"));
        }
    })
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} has been selected`);

        console.log("The production has been started");

        await time(2000);
        console.log("The fruits have been chopped.");

        await time(1000);
        console.log(`The ${stocks.Liquid[0]} and ${stocks.Liquid[1]} has been added.`);

        await time(1000);
        console.log("The machine has been started");

        await time(2000);
        console.log(`The ice cream has been put on the ${stocks.Holder[0]}.`);

        await time(3000);
        console.log(`The ${stocks.Toppings[0]} has been selected as toppings.`);

        await time(2000);
        console.log("The ice cream has been served.");

    }
    catch (error) {
        console.log("Customer left");
    }
    finally {
        console.log("Day ended shop is closed");
    }
}

kitchen();