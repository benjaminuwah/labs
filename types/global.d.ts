import { Mongoose } from "mongoose";

declare global {
  // This preserves the MongoDB connection across hot reloads in development
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }

  // Define interfaces for Monnify SDK response and data
  interface MonnifyResponse {
    status: string;
    transactionReference: string;
    paymentReference: string;
    amountPaid: number;
    paymentStatus: string;
    paymentMethod: string;
    completed: boolean;
    paidOn: string;
    cardDetails?: {
      cardType: string;
      last4: string;
      expiryDate: string;
    };
    cardType?: string;
    last4?: string;
    expiryDate?: string;
    accountDetails?: Record<string, unknown>;
    accountNumber?: string;
    bankName?: string;
    customer: {
      email: string;
      name: string;
    };
    metaData?: Record<string, unknown>;
    paymentDescription?: string;
    paymentState: string;
    redirectUrl?: string;
    amount: number;
    fee: number;
    totalPayable: number;
    paidAmount: number;
    completedPaymentDate?: string;
    paymentDate: string;
    paymentMethodDescription?: string;
    paymentMethodType?: string;
    paymentStatusDescription?: string;
    paymentStatusMessage?: string;
    paymentStatusReason?: string;
    paymentStatusReasonMessage?: string;
    paymentStatusReasonCode?: string;
    paymentStatusReasonDescription?: string;
  }

  interface MonnifyCloseData {
    paymentStatus: string;
    // Add other properties as needed
  }

  // Extend the global Window interface to include MonnifySDK
  interface Window {
    MonnifySDK: {
      initialize: (options: {
        amount: number;
        currency: string;
        reference: string;
        customerFullName: string;
        customerEmail: string;
        apiKey: string;
        contractCode: string;
        paymentDescription: string;
        onLoadStart: () => void;
        onLoadComplete: () => void;
        onComplete: (response: MonnifyResponse) => void;
        onClose: (data: MonnifyCloseData) => void;
      }) => void;
    };
  }

  // This makes the type available globally
  declare const window: Window & typeof globalThis;

  // interface Window {
  //   MonnifySDK: {
  //     initialize(arg0: {
  //       amount: number;
  //       currency: string;
  //       reference: string;
  //       customerFullName: string;
  //       customerEmail: string;
  //       apiKey: string;
  //       contractCode: string;
  //       paymentDescription: string;
  //       onLoadStart: () => void;
  //       onLoadComplete: () => void;
  //       onComplete: (response: any) => void;
  //       onClose: (data: any) => void;
  //     }): unknown;
  //     init: (config: {
  //       apiKey: string;
  //       contractCode: string;
  //       environment: "test" | "live";
  //       callback: (response: unknown) => void;
  //       onError: (error: unknown) => void;
  //     }) => void;
  //     pay: (paymentDetails: {
  //       amount: number;
  //       customerName: string;
  //       customerEmail: string;
  //       description?: string;
  //       reference?: string;
  //     }) => void;
  //   };
  // }
}
