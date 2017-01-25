//////////////
//HELLO WORLD
let Hello = React.createClass({
    render() {
        return <h1>Hello World</h1>
    }
})

ReactDOM.render(
    <Hello/>, document.getElementById('hello'))

//////////////
//NG-REPEAT like
let Repeat = React.createClass({
    render() {
        let arr = ['hello', 'world']
        let repeat = arr.map((e, i) => {
            return <li>{i} {e}</li>
        })
        return <ul>{repeat}</ul>
    }
})

ReactDOM.render(
    <Repeat/>, document.getElementById('repeat'))

//////////////
// TODOLIST
let Todo = React.createClass({
    getInitialState() {
        return {checked: false}
    },
    handleClick() {
        this.state.checked = this.state.checked == true
            ? false
            : true
        this.setState({checked: this.state.checked})
    },
    render() {
        let checked = this.state.checked
        let style = {};
        if (checked) {
            style = {
                'color': 'grey',
                'font-style': 'italic'
            };
        }
        return (
            <tr>
                <td>
                    <input type="checkbox" checked={this.state.checked} onClick={this.handleClick}></input>
                </td>
                <td style={style}>{this.props.todo}</td>
            </tr>

        )
    }
})

let TodoList = React.createClass({
    getInitialState() {
        return {todo: "", todos: []}
    },
    handleClick() {
        this.state.todos.push(this.state.todo)
        this.setState({todo: "", todos: this.state.todos})
    },
    handleChange() {
        this.setState({todo: event.target.value});
    },
    render() {
        let todos = this.state.todos.map((todo) => {
            return <Todo todo={todo}/>
        })
        return (
            <div>
                <input value={this.state.todo} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
                <table>
                    <tr>
                        <th>Done</th>
                        <th>To do</th>
                    </tr>
                    {todos}
                </table>
            </div>
        )
    }
})

ReactDOM.render(
    <TodoList/>, document.getElementById('todolist'))
