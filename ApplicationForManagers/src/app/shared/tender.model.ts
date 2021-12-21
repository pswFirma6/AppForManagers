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

export class TenderOffer {
    id: number = 0;
    tenderId: number = 0;
    pharmacyName: string = '';
    tenderOfferItems: TenderOfferItem[] = [];
}

export class TenderOfferItem{
    id: number;
    name: string="";
    quantity: number;
    price: number;
    tenderOfferId: number;

}
