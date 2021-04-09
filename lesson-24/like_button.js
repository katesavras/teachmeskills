class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),
            1000
        );
    }

    componentDidUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (< div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);

//
//
// function  Rectangle(x, y){
//     this.x = x;
//     this.y = y;
// }
//
//
// Rectangle.prototype.getSquare = function (){
//      return this.x * this.y
//     }
//
// Rectangle.prototype.toString = function (){
//     return this.x
// }
//
// let first = new Rectangle(10, 3);
// let second = new Rectangle(5, 2);

// console.log(first.getSquare());
// console.log(second.getSquare());
// console.log(second.toString());

//
// localStorage.setItem("test", 1);
//
// console.log(localStorage.getItem("test"));
// console.log(localStorage);
// localStorage.clear();
// localStorage.test = 2;
// console.log(localStorage);
//
// localStorage.user = JSON.stringify({name: "jon"});
// let user = JSON.parse(localStorage.user);
// console.log(user.name)

//
// let root = document.querySelector('#root');
//
//
// fetch('https://reqres.in/api/users?page=2&per_page=6')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
// localStorage.user = JSON.stringify(data);
//  let arr = JSON.parse(localStorage.user);
//  console.log (arr)
//          arr = [data][0]['data'];
//         console.log(arr)
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i].id);
//             console.log(arr[i].email);
//             console.log(arr[i].first_name);
//             console.log(arr[i].last_name);
//             console.log(arr[i].avatar);
//             root.innerHTML += `
//      <tr>
//      <td>${arr[i].id}</td>
//      <td>${arr[i].email}</td>
//      <td>${arr[i].first_name}</td>
//      <td>${arr[i].last_name}</td>
//      <td>${arr[i].avatar}</td>
//      </tr>`;
//         }
//
//     })
//     .catch((error) => console.log(error))


// window.addEventListener("load", () => {
//     if (window.localStorage.pageColor) {
//         document.body.style.backgroundColor = window.localStorage.pageColor;
//     }
//     let root = document.querySelector('#root');
//     root.addEventListener("click", () => {
//         let color = document.querySelector('input[name="color"]:checked').value;
//         window.localStorage.pageColor = color;
//         document.body.style.backgroundColor = color;
//
//     })
// })

// new Promise(function(resolve, reject) {
//
//     setTimeout(() => resolve(1), 1000); // (*)
//
// }).then(function(result) { // (**)
//
//     alert(result); // 1
//     return result * 2;
//
// }).then(function(result) { // (***)
//
//     alert(result); // 2
//     return result * 2;
//
// }).then(function(result) {
//
//     alert(result); // 4
//     return result * 2;
//
// });


// fetch('https://reqres.in/api/users?page=2&per_page=6')
//     // .then в коде ниже выполняется, когда удалённый сервер отвечает
//     .then(function(response) {
//         // response.text() возвращает новый промис,
//         // который выполняется и возвращает полный ответ сервера,
//         // когда он загрузится
//         return response.json();
//     })
//     .then(function(resp) {
//         // ...и здесь содержимое полученного файла
//         localStorage.users = JSON.stringify(resp);
//         let arr = JSON.parse(localStorage.users)
//         console.log(arr) // {"name": "iliakan", isAdmin: true}
//         arr = [resp][0]['data'][0].avatar;
//         console.log(arr)
//     });
// class User{
//     constructor(name) {
//         this.name = name;
//     }
//
//
//     get names() {
//         return this.name;
//     }
//
//     set names(value) {
//         if (value.length < 4) {
//             console.log("a lot of");
//             return
//         }
//         this.name =value;
//     }
//
// }
// let user = new User("Иван");
// console.log(user.names);
// console.log(user.names = "Kate");

