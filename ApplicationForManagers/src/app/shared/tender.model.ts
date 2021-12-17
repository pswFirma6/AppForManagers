export class Tender {
    startDate: string = '';
    endDate: string = '';
    tenderItems: TenderItem[] = [];
}

export class TenderItem{
    name: string="";
    quantity: number;

}
