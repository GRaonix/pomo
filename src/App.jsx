import React from 'react'
import ReactDOM from 'react-dom'
import './style/style.scss'

const App = () => {
    return (
        <div className="pomodoro">
            
            <h1 className="pomodoro__heading">Hello Antoine !!!</h1>
            <main className="pomodoro__main"><p className="pomodoro__main__timer">Heure</p>
                <div className="pomodoro__main__buttons">
                    <button className="pomodoro__main__buttons__plus">+</button>
                    <button className="pomodoro__main__buttons__play">Play</button>
                    <button className="pomodoro__main__buttons__reset">Reset</button>
                    <button className="pomodoro__main__buttons__moins">-</button>
                </div>
            
            </main>
             
        </div>
       
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))