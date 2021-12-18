export class Tender {
    id: number = 0;
    creationDate: string = "";
    startDate: string = '';
    endDate: string = '';
    tenderItems: TenderItem[] = [];
}

export class TenderItem{
    name: string="";
    quantity: number;

}
