import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './details.component';

@Pipe({
  name: 'FilterDetails'
})
export class ProductFilterPipe implements PipeTransform {
  transform(itemList: Data[], searchid: string): Data[] {
    if (!itemList || !searchid) {
      return itemList;
    }

    return itemList.filter(
      itemList =>
        itemList.id
          .toLocaleLowerCase()
          .indexOf(searchid.toLocaleLowerCase()) !== -1
    );
  }
}
