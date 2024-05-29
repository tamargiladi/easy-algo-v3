import { Component } from '@angular/core';
import { MergeSortAlgoComponent } from '../algorithms/merge-sort-algo/merge-sort-algo.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MergeSortAlgoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  algorithmItems = ['Merge Sort', 'Quick Sort'];
  selecedItem = 'Merge Sort';
}
