import './App.css';
import initialData from './initial-data';
import { SIDEBAR_ITEMS } from './constants';



function App() {
  return (
    <div className="body">
      <div className="sideBar">
          {
            Object.values(SIDEBAR_ITEMS).map((sidebarItem, index) => (
              <div class="sideBarItem" draggable="true" key={index}>{ sidebarItem.component.type }</div>
            ))
          }
      </div>
      <div className="pageContainer">
        <div className='page'>
            {
              initialData.layout.map((data) => (
                <div className='row'>
                    {
                      data.children.map((columns) => (
                        <div className="columns">
                          {
                            columns.children.map((column) => (
                              <div className="column">
                                <div className="component">
                                  <div>{ column.id }</div>
                                  <div>Some Image</div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      ))
                    }
                </div>
              ))
            }
            <div className="dropZone"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
