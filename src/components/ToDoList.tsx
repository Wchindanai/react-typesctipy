import * as React from 'react';
import { Input } from 'antd';
import { ShowToDoList } from './ShowToDoList';
const Search = Input.Search;

interface IToDoListState {
  toDoList: string[];
}

export class ToDoList extends React.Component<{}, IToDoListState> {
  constructor(props: Object) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }
  handleSearch = (value: string): void => {
    this.setState(prevState => ({
      toDoList: [...prevState.toDoList, value],
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={this.handleSearch}
          style={{ width: 200 }}
        />
        <table>
          <tbody>
            {this.state.toDoList.map(todo => (
              <ShowToDoList title={todo} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
