export interface Ticket {
    title: string,
    amount: number,
    amount_avaliable: number,
    price: number,
    color: string,
    active: 0|1,
    image: string
}

export interface TicketsState {
    readonly loading: boolean;
    readonly data: Ticket[];
    readonly errors?: string;
  }


  export enum TicketActionTypes {
    FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
    FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
    FETCH_ERROR = "@@inventory/FETCH_ERROR"
  }