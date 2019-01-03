import * as React from 'react';
import { Layout } from 'antd';

import { ToDoList } from './ToDoList';

const { Header, Footer, Content } = Layout;

// tslint:disable-next-line:variable-name
const App: React.StatelessComponent<{}> = () => (
  <Layout>
    <Header />
    <Content>
      <ToDoList />
    </Content>
    <Footer />
  </Layout>
);

export default App;
