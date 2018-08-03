class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    /* Life Cycle Methods */
    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if (!isNaN(count)){
                this.setState(() => ({ count }));
            }
        } catch (e) {
            //If data is invalid, don't do anything
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem("count", this.state.count)
            console.log("Saving data");
        }
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    /* /Life Cycle */

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));


/* GHETTO JS */
/* let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne');
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');
};


const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
 */