import React from "react";


// const TodoList = () => {
//     return (
//         <div>
//             Hello Todo List
//         </div>
//     );
// }

class TodoList extends React.Component {

    //khai báo state
    state = {
        name: "Erric",
        channel: "Hoi Dan IT"
    }

    //gán lại giá trị cho state
    render() {
        return (
            <div>
                {/* từ khoá 'this' dùng trong trường hợp sử dụng class thì this sẽ hiểu là biến này dùng trong 
                phạm vi component đó */}
                <label>Name</label>
                <input type="text" onChange={(event) => this.setState({ name: event.target.value })}></input>
                <br/><br/>
                Hello Todo List with name {this.state.name}
            </div>
        )
    }
}

//Export TodoList để có thể gọi nó trong file khác
// 'default' dùng trong trường hợp trong file này ta chỉ muốn export mình nó thôi
export default TodoList
