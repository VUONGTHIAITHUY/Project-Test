import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { BART_CATEGORY_CONSTANTS, BART_CONSTANTS, BART_DATA_CONSTANTS, EMISSION_ACTIVITY_CONSTANTS } from 'src/app/shared/constants';
import { EmissionActivity, ExampleFlatNode } from 'src/app/shared/interfaces';
import { BartNode, Bart } from 'src/app/shared/models';
import { SelectionModel } from '@angular/cdk/collections';
import { TriggerEventService } from 'src/app/shared/services/trigger-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-left-layout',
  templateUrl: './left-layout.component.html',
  styleUrls: ['./left-layout.component.scss']
})
export class LeftLayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('paginatorBart') paginatorBart: MatPaginator | undefined;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild('paginatorEmission') paginatorEmission!: MatPaginator;
  @ViewChild('sidebar', { static: true }) sidebarElement!: ElementRef
  @ViewChild('cover', { static: true }) coverElement!: ElementRef
  BART_CATEGORY_CONSTANTS = BART_CATEGORY_CONSTANTS;
  EMISSION_ACTIVITY_CONSTANTS = EMISSION_ACTIVITY_CONSTANTS;
  BART_DATA_CONSTANTS = BART_DATA_CONSTANTS;
  BART_CONSTANTS = BART_CONSTANTS;
  displayedEmissionActivityColumns: string[] = ['select', 'id', 'eatId', 'reportedQuantity'];
  dataSourceEmissionActivities = new MatTableDataSource<EmissionActivity>(this.EMISSION_ACTIVITY_CONSTANTS);
  selection = new SelectionModel<EmissionActivity>(true, []);

  displayedColumns: string[] = ['id', 'bartName', 'bartType', 'categoryGHG', 'categoryFunctional', 'carbonSource', 'categoryId'];
  dataSource = new MatTableDataSource<Bart>(this.BART_DATA_CONSTANTS);
  selectedNode: any;
  private _transformer = (node: BartNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      id: node.id
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSourceTree = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  private subscription$: Subscription = new Subscription();
  constructor(private triggerEventService: TriggerEventService) {
    this.dataSourceTree.data = BART_CONSTANTS;
    this.toggleSidebarSubscription();
  }

  ngAfterViewInit(): void {
    if (this.paginatorBart) {
      this.dataSource.paginator = this.paginatorBart;
    }
    if (this.paginatorEmission) {
      this.dataSourceEmissionActivities.paginator = this.paginatorEmission;
    }
    this.treeControl.expandAll();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  onClickBart(nodeId: any) {
    if (nodeId) {
      this.selectedNode = nodeId;
      const filterValue = this.selectedNode.toString().trim().toLowerCase();

      // Apply the filter to the data source
      this.dataSource.filter = filterValue;
      this.dataSource.filterPredicate = (data: any) => {
        const columnValue = data['categoryId'].toString().trim().toLowerCase();
        return columnValue === filterValue;
      };

      this.dataSource.filter = filterValue;

      // Reset pagination after filtering
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }

    }
  }

  applyFilter(event: any) {
    const filterValue = event.currentTarget.value?.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceEmissionActivities.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSourceEmissionActivities.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EmissionActivity): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  toggleSidebar() {
    const classList = this.sidebarElement.nativeElement.classList;
    const classCoverList = this.coverElement.nativeElement.classList;

    if (classList && classList.contains('d-block')) {
      classList.remove('d-block');
      classList.add('d-none');
      classCoverList.remove('cover');

    }

    else {
      classList.add('d-block');
      classCoverList.add('cover');
      classList.remove('d-none');
    }
  }

  toggleSidebarSubscription() {
    this.subscription$.add(this.triggerEventService.getTriggerEvent$().subscribe(
      res => {
        if (res === 'sidebar') {
          this.toggleSidebar();
        }
      }
    ))
  }
}
