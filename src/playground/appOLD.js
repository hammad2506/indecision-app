console.log("App is running");

const app = {
    title: "Indecision",
    subtitle: "This is our first app",
    options: []
}


const formHandler = (e) =>  {
    e.preventDefault();
    let newOption = e.target.elements.options.value;

    if(newOption){
        app.options.push(newOption);
        e.target.elements.options.value = '';
        render();
    }
    
}

const clearArr = () => {
    app.options = [];
    render();
}

const randomPicker = () => {
    const randNumb = Math.floor(app.options.length * Math.random());
    alert(app.options[randNumb]); 
}


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length>0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled = {app.options.length === 0} onClick={randomPicker}>What should i do?</button>
            <button onClick={clearArr}>Cear</button>
            <ol>
                {
                    app.options.map((option, i) =>  <li key={i}>{option}</li> )
                }
            </ol>
            <form onSubmit={formHandler}>
                <input type='text' name='options'></input>
                <button>Enter</button>
            </form>    
        </div>
    );
   
    
    const renderVar = document.getElementById('root');
    
    ReactDOM.render(template, renderVar);
}

render();

