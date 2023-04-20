import Button from "./Button"

const Header = ({ title, toggleAddTask, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={toggleAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Header.propTypes = {
//     title: propTypes.string.isRequired,
// }

export default Header