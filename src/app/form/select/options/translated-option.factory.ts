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
   * @param {string} i18nPathSuffix json path ending with dot (common for every passed parameter) to which we want to add casted to string param
   * (for example 'options.parkingmeter.' + 'FREE', 'options.parkingmeter.' +'MAINTENANCE')
   */
  optionsOf<T>(i18nPathSuffix: string, params: T[]): SelectOption[] {
    const options = [];
    params.forEach((param: T) => {
      options.push(this.optionOf(i18nPathSuffix + param, param))
    });
    return options;
  }

  /**
   *
   * @param {T} param everything passed here would be casted to string and translated
   * @param {string} i18nPath json path with a translation
   * (for example 'options.parkingmeter.' + 'FREE')
   */
  optionOf<T>(i18nPath: string, param: T): SelectOption {
    const option = new SelectOption(param.toString());
    this.translateService.get(i18nPath).subscribe((desc: string) => {
      option.addDescription(desc);
    });
    return option;
  }

  /**
   *
   * @param {string} trueI18nPath json path to true option translation
   * @param {string} falseI18nPath json path to false option translation
   * @returns an array of two SelectOption
   */
  optionsOfBoolean(trueI18nPath: string, falseI18nPath: string): SelectOption[] {
    const options = [];
    options.push(this.optionOf(trueI18nPath, 'true'));
    options.push(this.optionOf(falseI18nPath, 'false'));
    return options;
  }
}
