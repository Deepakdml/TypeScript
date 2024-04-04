var username:string="Testing Typescript";
// document.write(username);
console.log(username)

function Demo() {
    var a=10;
    var b=20;
    if(a==10){
        var c=30;
        console.log(c);
    }

 }
Demo();

// function remo(){
//     var a=20;
//     if(a==20){
//         var b=40;
//         console.log(b)
//     }
//     a = 444; 	// shadowing

//     console.log("a= "+ a);
//     //console.log("b= "+ b);

// }
// remo();
// //hoisting
// function Demo3() {
//     a = 10;
	
//     console.log("a= "+ a);

//     var a;
// }
// Demo3();

// //shadowing
// function demo2() {
//     var a = 10
//     var a = 20		// shadowing

//     console.log("a= "+ a)
// }
// demo2()

// // Let-
// // - It is block scope variable.
// // - It is accessible within a block.


// function letf() {
//     let a = 10;

//     if(true){
//         let b = 20;
// 		console.log("b= "+ b);	// valid
//     }

//     console.log("a= "+ a);
//    // console.log("b= "+ b);		// invalid
// }
// letf();

// // Const
// // =======
// // - It is block scope.
// // - Cannot change/modify/re-initialize.

// function consf() {
//     const a = 10;
// 	const b = 22;   	// invalid

//     if(true){
//         const b = 20;        
//         console.log("b= "+ b);		// valid
//     }

//     console.log("a= "+ a);
// 	console.log("b= "+ b);		// invalid
// }

// consf();

function shoot(){
    let a:string="Deepak Kumar Adhikari";
    let b:number=878.9800;
    let c:boolean=true;
    let d="465236498"
    console.log("String Type: "+a)
    console.log("Deciaml Type: "+b)
    console.log("Boolean Type: "+c)
    console.log("Number Type: "+d)
}
shoot();

var username:string="I am Deepak known as DML.";
// document.write("Hello"+username);
console.log(username);

// function Watch(){
//     let a:string="Hello Charlie";
//     // console.log(a);
//     document.write(a);
// }
// Watch();

function Pin() {
    var product : any[] = [1, "TV", 45000.00] ;
    var product1 : any[]= [2,"Laptop",40000.00] ;

    var id:number = product[0]
    var name:string = product[1]
    var price:number = product[2]

    var id:number =product1[0]
    var name:string =product1[1]
    var price:number =product1[2]

    console.log(`Id: ${id} \nName: ${name} \nPrice: ${price}`)
    console.log(`SL: ${id} \nBrand: ${name} \nPrice: ${price}`)
}
Pin()

function Classic() {

    var product : any[] = [1, "TV", 45000.00, [[4.5], 450], function(){console.log('printing data')}] ;

    var id:number = product[0]
    var name:string = product[1]
    var price:number = product[2]

    console.log(`Id: ${id} \nName: ${name} \nPrice: ${price}`)
	console.log(`Rating: ${product[3][0]}`)
    product[4]()

}
Classic()





