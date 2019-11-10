import * as React from 'react';
import { Hello } from './Hello';

export interface MainProps {}

export class Main extends React.PureComponent<MainProps, {}> {
  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
      </div>
    );
  }
}
