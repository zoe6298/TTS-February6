// function gratuity(billAmount, percentage) {
//     return (billAmount * percentage) ;
// }
// console.log(gratuity(100, 0.2));


// function totalWithGrat(billAmount, gratuityFunction) {
    
//     return (billAmount + gratuityFunction) ;
    
// }
// console.log(`Your total including gratuity is: ${totalWithGrat(100, gratuity(100,0.2))}`)

// 02.27
// function outer(){
//     let a = "hello";
//     let b = "world";
  
//     function inner(a, b) {
//         console.log(a, b)
     
//     }
  
//     inner("new","words");
    
//   }
// let a = ['pop tarts', 'ramen noodles', 'chips', 'salsa','coffee']
// a. push('fruit loops' )

// a[4] = 'fair trade coffee'
// a.splice(2,2, "rice", "beans")

// let shoppingCart = []
// shoppingCart.push(a.pop())
// shoppingCart.push(a.shift())

// //8 Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
// while(a.length) {
//     shoppingCart.push(a.pop())
// }
// console.log(a)
// console.log(shoppingCart)
// shoppingCart.sort()
// shoppingCart.reverse()
// console.log(shoppingCart.toString())
// 2.28
// let course = {
// 	name: 'JavaScript Applications',
// 	awesome: true,
// 	teachers: ['Assaf', 'Shane'],
// 	students: [
// 		{
// 			name: 'Steve',
// 			computer: {
// 				OS: 'Linux',
// 				type: 'laptop'
// 			}
// 		},
// 		{
// 			name: 'Katy',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		},
// 		{
// 			name: 'Chuck',
// 			computer: {
// 				OS: 'OSX',
// 				type: 'macbook'
// 			}
// 		}

// 	],
// 	preReqs : {
// 		skills : ['html', 'css', 'git'],
// 		equipment: {
// 			laptop: true,
// 			OSOptions: ['linux', 'osx']
// 		}
// 	}
// };
// console.log(course.name)
// console.log(course.teachers[1])
// console.log(course.students[0].name)
// console.log(course.students[1].computer.type)
// console.log(course.preReqs)
// console.log(course.preReqs.equipment.OSOptions[1])
// console.log(course.preReqs.equipment.OSOptions.join(" or "))

// let a = []
// for (let i = 0; i < course.students.length; i++) {
//     if (course.students[i].computer.OS === "OSX") {
//         a.push(course.students[i].name);
//         console.log(a)
        
        
//     }
// }
