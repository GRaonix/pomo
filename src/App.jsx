import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.jsx'
import './style/style.scss'

const App = () => {
    return (
        <div className="pomodoro">
            
            <h1 className="pomodoro__heading">Hello Antoine !!!</h1>
            <main className="pomodoro__main"><p className="pomodoro__main__timer">Heure</p>
                <div className="pomodoro__main__buttons">
                    
                    <Button addClass={"pomodoro__main__buttons__plus"} name={"plus"}/>
                    <Button addClass={"pomodoro__main__buttons__pause"} name={"pause"}/>
                    <Button addClass={"pomodoro__main__buttons__reset"} name={"reset"}/>
                    <Button addClass={"pomodoro__main__buttons__minus"} name={"minus"}/>
                </div>
            
            </main>
             
        </div>
       
    )
}

/*
when plus is pressed => console.log(plus);

*/
ReactDOM.render(<App/>, document.querySelector('#root'))