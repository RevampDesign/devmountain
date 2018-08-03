const app = {
    title: 'Bored App',
    subtitle: 'What to do when you\'re bored',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options" }</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What to do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();






/* TESTING */
const user = {
    name: 'User',
    age: 453,
    location: 'Provo'
};
function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>;
    }
}

/* IF user age exists and is greater than/equal to 18 */
const templateThree = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'.toUpperCase()}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);