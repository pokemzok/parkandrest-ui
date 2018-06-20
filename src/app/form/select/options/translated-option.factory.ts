import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SelectOption} from './select-option';

@Injectable()
export class TranslatedOptionFactory {

  constructor(private translateService: TranslateService) {
  }
  /**
   *
   * @param {T} params everything passed here would be casted to string and translated
   * @param {string} i18nPath json path ending with dot (common for every passed parameter) to which we want to add casted to string param
   * (for example 'options.parkingmeter.' + 'FREE', 'options.parkingmeter.' +'MAINTENANCE')
   */
  optionsOf<T>(i18nPath: string, params: T[]): SelectOption[] {
    const options = [];
    params.forEach((param: T) => {
      options.push(this.optionOf(i18nPath, param))
    });
    return options;
  }

  /**
   *
   * @param {T} param everything passed here would be casted to string and translated
   * @param {string} i18nPath json path ending with dot to which we want to add casted to string param
   * (for example 'options.parkingmeter.' + 'FREE')
   */
  optionOf<T>(i18nPath: string, param: T): SelectOption {
    const option = new SelectOption(param);
    this.translateService.get(i18nPath + param).subscribe((desc: string) => {
      option.addDescription(desc);
    });
    return SelectOption;
  }

}
