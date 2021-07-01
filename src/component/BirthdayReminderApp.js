import React from 'react'

export default class BirthdayReminderApp extends React.Component {
    state = {
        birthdays: [
            {
                name: 'Athos',
                age: 29
            },
            {
                name: 'Porthos',
                age: 30
            },
            {
                name: 'Aramis',
                age: 25
            }
        ]
    }
    handleRemoveAll = () => {
        this.setState(() => ({ birthdays: [] }))
    }
    handleAddBirthday = (birthday) => {
        this.setState((prevState) => ({ birthdays: prevState.birthdays.concat(birthday) }))
    }
    render() {
        return (
            <div>
                <Header />
                <Birthdays
                    birthdays={this.state.birthdays}
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddBirthday
                    handleAddBirthday={this.handleAddBirthday}
                />
            </div>
        )
    }
}

const Header = () => (
    <div>
        <h1>My Birthday App</h1>
    </div>
)

const Birthdays = (props) => (
    <div>
        <button
            onClick={props.handleRemoveAll}
        >Clear All</button>
        <p>{props.birthdays.length} birthdays today</p>
        {props.birthdays.map((birthday) => {
            return <Birthday
                key={birthday.name}
                name={birthday.name}
                age={birthday.age}
            />
        })}
    </div>
)

const Birthday = (props) => (
    <div>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
    </div>
)

class AddBirthday extends React.Component {

    handleAddBirthday = (e) => {
        e.preventDefault()

        const person = {
            name: e.target.elements.name.value,
            age: e.target.elements.age.value
        }
        console.log(person)
        e.target.elements.name.value = ''
        e.target.elements.age.value = ''
        this.props.handleAddBirthday(person)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddBirthday}>
                    <input type="text" placeholder="name" name="name" autoFocus />
                    <input type="number" placeholder="age" name="age" />
                    <button>Add Birthday</button>
                </form>
            </div>
        )
    }

}