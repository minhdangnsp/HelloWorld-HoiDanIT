import React from "react";


// const TodoList = () => {
//     return (
//         <div>
//             Hello Todo List
//         </div>
//     );
// }

class TodoList extends React.Component {
    
    state = {
        name: "Erric",
        channel: "Hoi Dan IT"
    }
    render() {
        return (
            <div>
                {/* từ khoá 'this' dùng trong trường hợp sử dụng class thì this sẽ hiểu là biến này dùng trong 
                phạm vi component đó */}
                Hello Todo List with name {this.state.name} and channel {this.state.channel}
            </div>
        )
    }
}

//Export TodoList để có thể gọi nó trong file khác
// 'default' dùng trong trường hợp trong file này ta chỉ muốn export mình nó thôi
export default TodoList
