import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: [
            {name: 'John C.', salary: 800, increase: false, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, id: 2},
            {name: 'Carl W.', salary: 44500, increase: false, id: 3}
         ]
      }
      this.maxId = this.state.data.length;
}

   deleteItem = (id) => {
      this.setState(({data}) => {
         //method 1
         // const index = data.findIndex(elem => elem.id === id);

         // const before = data.slice(0, index);
         // const after = data.slice(index + 1);

         // const newArr = [...before, ...after];

         //method 2 with data filter
         return{
            data: data.filter(item => item.id !== id)
         }
      })
   }

    addItem = (name, salary) => {
      const newItem = {
         name, 
         salary,
         increase: false,
         id: ++this.maxId
      }
      this.setState(({data}) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
    }

   render(){
      return (
         <div className="app">
            <AppInfo/>

            <div className="search-panel">
               <SearchPanel/>
               <AppFilter/>
            </div>

            <EmployersList 
               data={this.state.data}
               onDelete={this.deleteItem}
            />
            <EmployersAddForm 
               onAdd={this.addItem}/>
         </div>
      );
   }

}

export default App;