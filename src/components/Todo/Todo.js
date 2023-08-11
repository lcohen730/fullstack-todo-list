import styles from './Todo.module.scss'
// import './Todo.module.scss'

export default function Todo({ todo, buttonAction, buttonText }) {
    return (
        <div className={styles.todo}>{todo.title}
        {/* <div className={'todo'}>{todo.title} */}
            <button 
                className={styles.button} 
                // className={'button'} 
                onClick={() => buttonAction(todo._id)}
            >
                {buttonText}
            </button>
        </div>
    )
}