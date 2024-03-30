//a)
// class Movie{
//         constructor(name,studio,rating){
//             this.name=name
//             this.studio=studio
//             this.rating=rating
//         }
//     }
//     console.log(Movie)
////b)
// class Movie{
//         constructor(name,studio,rating="PG")
//         {
//             this.name=name
//             this.studio=studio
//             this.rating=rating
//         }
//     }
//     const obj2=new Movie ("CasinoRoyale","EonProductions" )
// console.log(obj2.name,obj2.studio,obj2.rating)
////C)
// class Movie{
//         constructor(name,studio,rating="PG"){
//             this.name=name
//             this.studio=studio
//             this.rating=rating
//         }
//     }
//         let obj3=[
//         {new Movie  ("leo","7screen"),
//             new Movie ("vivekam","lica",8),
//         new Movie  ("ram","vivak")}
//     ]
//     console.log(obj3.name,obj3.studio,obj3.rating)
//     // let result = obj3.filter((ele)=>ele===0)
//     // console.log(result.Movie)



//d)
    // class Movie{
    //     constructor(name,studio,rating){
    //         this.name=name
    //         this.studio=studio
    //         this.rating=rating
    //     }
    // }
    // const obj2=new Movie ("CasinoRoyale","EonProductions","PG13" )
    // console.log(obj2.name,obj2.studio,obj2.rating)
    // ////2)circle
    // class Circle{
    // constructor(radius,color){
    //     this.radius=radius;
    //     this.color = color;
    // }
    // get Radius(){
    //     return this.radius
    // }
    // set Radius(n){
    //     this.radius = n;
    // }
    // get Color(){
    //     return this.color;
    // }
    // set Color(c){
    //     this.color = c
    // }
    // get toString(){
    //     return `"Circle[radius= ${this.radius} ,color = ${this.color}]"`
    // }
    // get area(){
    //     return Math.PI*Math.pow(this.radius,2)
    // }
    // get circumference(){
    //     return 2*Math.PI*this.radius
    // }
    // }
    // let obj = new Circle(1.0,"red") 
    // console.log(obj.Color); 
    // console.log(obj.Radius);
    // console.log(obj.toString);
    // console.log(obj.area);
    // console.log(obj.circumference);


    // ////3)
    // class Person {
    //   constructor(name, age, gender, maritalstatus, contact, email = "PG") {
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    //     this.maritalstatus = maritalstatus;
    //     this.contact = contact;
    //     this.email=email;
    //   }
    // }
    // const obj=new Person("bala",25,"male","unmarried","6383819542","balamath.pmk@gmail.com")
    // console.log(obj.name,obj.age,obj.gender,obj.maritalstatus,obj.contact,obj.email)
