import {Store} from "./Store";
import {StoreType} from "./StoreType";
import {Address} from "./Address";

export interface StoreVariant{
    id: number,
    store: Store,
    type: StoreType,
    address: Address,
    name: string,
    storeImageUrl: string,
    paymentType: PaymentType,
    contactPhone: string,
    contactEmail: string,
    createdAt: string
}

enum PaymentType{
    CASH, CREDIT_CARD, CASH_AND_CREDIT_CARD
}