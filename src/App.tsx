import {Button} from "@blueprintjs/core";
import * as d3 from "d3";
import {Dictionary, groupBy} from "lodash";
import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import "./App.scss";

interface DumbInterface {
  [key: string]: string;
}

export class App extends Component {
  private node: SVGSVGElement | null = null;

  public componentDidMount() {
    this.runD3();
  }

  public render() {
    return (
      <div className="App">
      <svg ref={(node) => this.node = node}/>
      <BlueprintWrapper/>
      <LodashWrapper/>
      <RouterWrapper/>
    </div>
  );
}

  private runD3() {
    if (this.node) {
      d3
        .select(this.node)
        .append("text")
          .attr("x", 0)
          .attr("y", "20")
          .attr("font-size", "20px")
          .text("d3 works.");
    }
  }
}

const BlueprintWrapper = () => {
  return <Button text="Blueprint works."/>;
};

const LodashWrapper = () => {
  const dumbInterfaces: DumbInterface[] = [{key: "lodash"}, {key: "works"}];
  const dict: Dictionary<DumbInterface[]> = groupBy(dumbInterfaces, "key");
  return (
    <div>
      {Object.keys(dict).join(" ")}
    </div>
  );
};

const RouterWrapper = () => {
  return (
    <Router>
      <Link to="/works">Router</Link>
      <Link to="/router">Works</Link>
    </Router>
  );
};
