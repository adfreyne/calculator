import React, { PureComponent } from 'react';
require('./index.css')

class Calculator extends PureComponent {
    constructor() {
        super()
        this.state = {
            input: '12*13',
            result: ''
        }
        console.log(this.state.input)
    }
    render() {
        console.log('Result is:' + this.state.result)
        console.log('Input is:' + this.state.input)
        const keyButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '.', '+', '-', '(', ')', '*', '/', '%']

        return (
            <main id="viewport">
                <div>
                    <textarea value={this.state.input}></textarea>
                    <input value={this.state.result}></input>
                </div>
                {keyButtons.map(key => (
                    <button key={key} id="calcBtn" onClick={() =>
                        this.setState({
                            input: this.state.input + key
                        })
                    }>
                        {key}
                    </button>))}

                <div>
                    <button id="clr" onClick={(() => this.setState({
                        input: '', result: ''
                    }))}>
                        Clear
                    </button>
                    <button id="equals" onClick={(() => this.setState({
                        // eslint-disable-next-line
                        result: eval(this.state.input),
                    }))}>Eval</button>
                </div>
            </main>
        )
    }
}

export default Calculator;
