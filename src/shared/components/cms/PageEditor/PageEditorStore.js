import { decorate, observable } from 'mobx';
import { DEFAULT_OBJECT } from '../../widgets/Constants';

class PageEditorStore {
  constructor() {
    this.obj = DEFAULT_OBJECT;
  }

  change(ks, val) {
    ks = ks.split(',');
    switch (ks.length) {
      case 1:
        this.obj[ks[0]] = val;
      case 2:
        this.obj[ks[0]][ks[1]] = val;
      case 3:
        this.obj[ks[0]][ks[1]][ks[2]] = val;
      case 4:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]] = val;
      case 5:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]] = val;
      case 6:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]] = val;
      case 7:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]] = val;
      case 8:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]] = val;
      case 9:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]] = val;
      case 10:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]] = val;
      case 11:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]][ks[10]] = val;
      case 12:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]][ks[10]][ks[11]] = val;
      case 13:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]][ks[10]][ks[11]][ks[12]] = val;
      case 14:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]][ks[10]][ks[11]][ks[12]][
          ks[13]
        ] = val;
      case 15:
        this.obj[ks[0]][ks[1]][ks[2]][ks[3]][ks[4]][ks[5]][ks[6]][ks[7]][ks[8]][ks[9]][ks[10]][ks[11]][ks[12]][ks[13]][
          ks[14]
        ] = val;
      default:
        null;
    }
  }
}

decorate(PageEditorStore, {
  obj: observable,
});

export default PageEditorStore;
