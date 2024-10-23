export interface Note{
    description: string;
    done: boolean;
    createdDate: Date;
    cost:number;
    currency: '$' | '€' | '₽';
}