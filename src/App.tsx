import React, { Component } from 'react';
import {Button} from '@blueprintjs/core';
import * as d3 from 'd3';
import * as _ from 'lodash';

import './App.scss';
import {Dictionary} from 'lodash';

interface DumbInterface {
  [key: string]: string
}

export class App extends Component {
  private node: SVGSVGElement | null = null;

  componentDidMount() {
    this.runD3();
  }

  runLodash(): string {
    const dumbInterfaces: DumbInterface[] = [{key: 'lodash'}, {key: 'works'}]
    const dict: Dictionary<DumbInterface[]> = _.groupBy(dumbInterfaces, 'key')
    return Object.keys(dict).join(' ');
  }

  runD3() {
    if (this.node) {
      d3
        .select(this.node)
        .append('text')
          .attr("x", 0)
          .attr("y", "20")
          .attr("font-size", "20px")
          .text("d3 works.")
    }
  }

  render() {
    return (
      <div className="App">
        <Button text="Blueprint works."/>
        <svg ref={node => this.node = node}/>
        <div>{this.runLodash()}</div>
      </div>
    );
  }
}
