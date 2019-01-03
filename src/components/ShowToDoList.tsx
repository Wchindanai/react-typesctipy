import * as React from 'react';

interface IShowToDoProps {
  title: string;
}

export const ShowToDoList: React.StatelessComponent<IShowToDoProps> = (props) => (
  <tr>
    <td>{props.title}</td>
  </tr>
);
