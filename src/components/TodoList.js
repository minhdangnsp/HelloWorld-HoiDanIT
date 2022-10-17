import React, { useState } from "react";


const TodoList = () => {

    //Hàm useState trả về 2 giá trị, 1 là tên biến, 2 là function để cập nhật lại biến này.
    //không nhất thiết phải đặt là setName, có thể đặt tên bất kỳ
    const [name, setName] = useState("")

    const handleClickBtn = (event, msg) => {
        console.log(">>run inside handleClickBtn ----:", name)
    }
    return (
        <div>
            {/* từ khoá 'this' dùng trong trường hợp sử dụng class thì this sẽ hiểu là biến này dùng trong 
                phạm vi component đó */}
            <label>Name</label>
            {/* gán giá trị của ô input là name để TRÁNH trường hợp khi đổi giá giá trị của name bằng tool thì
            trên ô input không thay đổi */}
            <input value={name} type="text"
                onChange={(event) => {
                    setName(event.target.value)
                }} />
            {/* Cách 1 khi gọi hàm handleClickBtn đối với sự kiện onClick - dùng arrow function */}
            <button type='button' onClick={() => handleClickBtn()}>Submit</button>
            {/* Cách 2 khi gọi hàm handleClickBtn đối với sự kiện onClick - không dùng cặp dấu () */}
            <button type='button' onClick={handleClickBtn}>Submit</button>
            <br /><br />
            Hello Todo List with name {name}
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
