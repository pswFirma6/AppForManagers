export class Tender {
    startDate: string = '';
    eEndDate: string = '';
    tenderItems: TenderItem[] = [];
}

export class TenderItem{
    name: string="";
    quantity: number;

}
