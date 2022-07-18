export interface ICustomerInfo {
  billing_account_number: string;
  customer_name: string;
  global_account_number: number;
  global_account_name: string;
  industry: string;
  opco: string;
  checked?: boolean;
}


export interface IOpco {
 id: string;
 name: string;
}