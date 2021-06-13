import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './product.component';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(dataList: Data[], searchString: string) {
    if (!dataList || !searchString) {
      return dataList;
    }

    return dataList.filter(
      dataList =>
        dataList.title
          .toLocaleLowerCase()
          .indexOf(searchString.toLocaleLowerCase()) !== -1
    );
  }
}
