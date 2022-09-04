import { Component, ViewChild } from '@angular/core';
import {
  NzGraphComponent,
  NzGraphData,
  NzGraphDataDef,
  NzGraphZoomDirective,
  NzRankDirection
} from 'ng-zorro-antd/graph';

@Component({
  selector: 'app-notifydetail',
  templateUrl: './notifydetail.component.html',
  styleUrls: ['./notifydetail.component.less']
})
export class NotifydetailComponent {
  @ViewChild(NzGraphComponent, { static: true }) nzGraphComponent!: NzGraphComponent;
  @ViewChild(NzGraphZoomDirective, { static: true }) zoomController!: NzGraphZoomDirective;
  zoom = 0.5;
  testDef: NzGraphDataDef = {
    nodes: [
      {
        id: '0',
        label: '0'
      }, {
        id: '1',
        label: '1'
      }, {
        id: '2',
        label: '2'
      }, {
        id: '3',
        label: '3'
      }, {
        id: '4',
        label: '4'
      }, {
        id: '5',
        label: '5'
      }, {
        id: '6',
        label: '6'
      }, {
        id: '7',
        label: '7'
      }, {
        id: '8',
        label: '8'
      }, {
        id: '9',
        label: '9'
      }, {
        id: '10',
        label: '10'
      }, {
        id: '11',
        label: '11'
      }, {
        id: '12',
        label: '12'
      }, {
        id: '13',
        label: '13'
      }, {
        id: '14',
        label: '14'
      },

    ],
    edges: [
      {
        v: '0',
        w: '1'
      }, {
        v: '1',
        w: '2'
      }, {
        v: '1',
        w: '3'
      }, {
        v: '2',
        w: '4'
      }, {
        v: '2',
        w: '5'
      }, {
        v: '3',
        w: '6'
      }, {
        v: '3',
        w: '7'
      }, {
        v: '0',
        w: '8'
      }, {
        v: '8',
        w: '9'
      }, {
        v: '8',
        w: '10'
      }, {
        v: '9',
        w: '11'
      }, {
        v: '9',
        w: '12'
      }, {
        v: '10',
        w: '13'
      }, {
        v: '10',
        w: '14'
      },
    ],

  };
  rankDirection: NzRankDirection = 'TB';
  graphData = new NzGraphData(this.testDef);

  constructor() { }

  expand(name: string): void {
    this.graphData.expand(name);
  }

  collapse(name: string): void {
    this.graphData.collapse(name);
  }

  expandAll(): void {
    this.graphData.expandAll();
  }

  collapseAll(): void {
    this.graphData.collapseAll();
  }

  fit(): void {
    this.zoomController?.fitCenter();
  }

  focusNode(e: string | number): void {
    this.zoomController?.focus(e);
  }

  graphInitialized(_ele: NzGraphComponent): void {
    // Only nz-graph-zoom enabled, you should run `fitCenter` manually
    this.zoomController?.fitCenter();
  }
}