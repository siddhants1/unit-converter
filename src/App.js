import React from "react";
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            from: 'meters',
            to: 'meters',
            output: '',
        };
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.clickOutputHandler = this.clickOutputHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
    }

    handleAmountChange(event) {
        this.setState({
            amount: event.target.value
        });
    }

    handleFromChange(event) {
        this.setState({
            from: event.target.value
        });
    }

    handleToChange(event) {
        this.setState({
            to: event.target.value
        });
    }
    
    clickOutputHandler() {
        if(this.state.from === 'meters' && this.state.to === 'centimeters') {
            let input = Number(this.state.amount);
            let result = String(input * 100);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'meters' && this.state.to === 'meters') {
            let input = Number(this.state.amount);
            let result = String(input);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'meters' && this.state.to === 'feet') {
            let input = Number(this.state.amount);
            let result = String(input * 3.28084);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'meters' && this.state.to === 'kilometers') {
            let input = Number(this.state.amount);
            let result = String(input / 1000);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'centimeters' && this.state.to === 'meters') {
            let input = Number(this.state.amount);
            let result = String(input / 100);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'centimeters' && this.state.to === 'centimeters') {
            let input = Number(this.state.amount);
            let result = String(input);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'centimeters' && this.state.to === 'feet') {
            let input = Number(this.state.amount);
            let result = String(input * 0.0328084);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'centimeters' && this.state.to === 'kilometers') {
            let input = Number(this.state.amount);
            let result = String(input / 100000);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'feet' && this.state.to === 'meters') {
            let input = Number(this.state.amount);
            let result = String(input / 3.28084);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'feet' && this.state.to === 'centimeters') {
            let input = Number(this.state.amount);
            let result = String(input * 30.48);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'feet' && this.state.to === 'feet') {
            let input = Number(this.state.amount);
            let result = String(input);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'feet' && this.state.to === 'kilometers') {
            let input = Number(this.state.amount);
            let result = String(input * 0.0003048);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'kilometers' && this.state.to === 'meters') {
            let input = Number(this.state.amount);
            let result = String(input * 1000);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'kilometers' && this.state.to === 'centimeters') {
            let input = Number(this.state.amount);
            let result = String(input * 100000);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'kilometers' && this.state.to === 'feet') {
            let input = Number(this.state.amount);
            let result = String(input * 3280.84);
            this.setState({
                output: result
            });
        }
        if(this.state.from === 'kilometers' && this.state.to === 'kilometers') {
            let input = Number(this.state.amount);
            let result = String(input);
            this.setState({
                output: result
            });
        }
    }

    resetHandler() {
        document.querySelector('.amount-input').value = '';
        this.setState({
            amount: '',
            output: '',
            from: 'meters',
            to: 'meters'
        });
    } 

    render() {
        return(
            <div className="wrapper">
                <div className="conversion-card">
                    <p className="amount-para">Amount</p>
                    <label htmlFor="amount-input"></label>
                    <input className="amount-input" 
                        type="text" 
                        placeholder="Amount" 
                        required
                        onChange={this.handleAmountChange} 
                    />
                    <div className="from-to-btn-container">
                        <div className="from-to-inner-container">
                            <div className="from-container">
                                <p className="to-from-para">From</p>
                                <label htmlFor="from"></label>
                                <select name="from" id="from" className="dropdown" value={this.state.from} onChange={this.handleFromChange}>
                                    <option value="meters">Meters</option>
                                    <option value="centimeters">Centimeters</option>
                                    <option value="feet">Feet</option>
                                    <option value="kilometers">Kilometers</option>
                                </select>
                            </div>
                            <div className="to-container">
                                <p className="to-from-para">To</p>
                                <label htmlFor="to"></label>
                                <select name="to" id="to" className="dropdown" value={this.state.to} onChange={this.handleToChange}>
                                    <option value="meters">Meters</option>
                                    <option value="centimeters">Centimeters</option>
                                    <option value="feet">Feet</option>
                                    <option value="kilometers">Kilometers</option>
                                </select>
                            </div>
                        </div>
                        <button className="convert-btn" type="submit" onClick={this.clickOutputHandler}>Convert</button>
                        <button className="reset-btn" type="submit" onClick={this.resetHandler}>Reset</button>
                    </div>
                    <p className="result-para">{ this.state.output }</p>
                </div>
            </div>
        );
    }


}

export default App;
