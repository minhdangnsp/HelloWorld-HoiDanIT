import React, { useState } from "react";
import _ from 'lodash'


const TodoList = () => {

    const [todo, setTodo] = useState("");

    //Biến này dùng để quản lý tất các các đầu việc của chúng ta
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: 'Watching yotube' },
            { id: 'todo2', name: 'Using facebook' },
            { id: 'todo3', name: 'Reading book' }
        ]
    )

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 6)

    const handleClickBtn = () => {
        let todoId = randomIntFromInterval(4, 9999999999999) //random ngẫu nhiên
        let todoItem = {
            id: `todo${todoId}`, name: todo  //string template
        }

        //Cách 1: dùng spread để thêm phần tử todoItem vào trong array
        // setListTodo([...listTodo, todoItem])  //spread operator

        //Cách 2:
        //Nếu không sử dùng clone() thì cả currentTodoList và listTodo đều trỏ về cùng 1 bộ nhớ, 
        // mà listTodo là khai báo biến const, do đó sẽ không thay đổi giá trị.
        let currentTodoList = _.clone(listTodo); //sử dụng hàm clone của thư viện lodoash để sao chép listTodo
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList)
    }

    const handleDeleteTodo = (id) => {
        let currentTodoList = _.clone(listTodo); //sử dụng hàm clone của thư viện lodoash để sao chép listTodo
        currentTodoList = currentTodoList.filter(item => item.id !== id); //filter các item có id khác  id của delete item
        setListTodo(currentTodoList)
    }

    return (
        <div>
            {/* từ khoá 'this' dùng trong trường hợp sử dụng class thì this sẽ hiểu là biến này dùng trong 
                phạm vi component đó */}
            <label>Todo's Name: </label>
            {/* gán giá trị của ô input là name để TRÁNH trường hợp khi đổi giá giá trị của name bằng tool thì
            trên ô input không thay đổi */}
            <input value={todo} type="text"
                onChange={(event) => {
                    setTodo(event.target.value)
                }} />
            <button type='button' onClick={() => handleClickBtn()}>Submit</button>
            <br /><br />
            <div>----- List todo -----</div>
            {listTodo.map((item, index) => {
                return (
                    // Cần phải có 1 unique key cho mỗi element
                    <div key={item.id} onClick={() => handleDeleteTodo(item.id)}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    );
}

// class TodoList extends React.Component {

//     //khai báo state
//     state = {
//         name: "Erric",
//         channel: "Hoi Dan IT"
//     }

//     //gán lại giá trị cho state
//     render() {
//         return (
//             <div>
//                 {/* từ khoá 'this' dùng trong trường hợp sử dụng class thì this sẽ hiểu là biến này dùng trong 
//                 phạm vi component đó */}
//                 <label>Name</label>
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })}></input>
//                 <br/><br/>
//                 Hello Todo List with name {this.state.name}
//             </div>
//         )
//     }
// }

//Export TodoList để có thể gọi nó trong file khác
// 'default' dùng trong trường hợp trong file này ta chỉ muốn export mình nó thôi
export default TodoList
