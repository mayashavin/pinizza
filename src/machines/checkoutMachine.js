import { createMachine, assign } from "xstate";

// interface Context {
//   cart: Array<any>,
//   shipping: Object,
//   billing: Object,
//   agreeToTerms: boolean,
//   shippingMethod: string,
//   paymentMethod: string,
// }

export const checkoutMachine = createMachine({
  id: "checkout",
  initial: "review",
  context: {
    cart: [],
    shipping: {
      address: '',
      phone: '',
      email: '',
      id: ''
    },
    shippingMethod: '',
    billing: {
      address: '',
      phone: '',
      email: ''
    },
    agreeToTerms: false,
    paymentMethod: ''
  },
  states: {
    review: {
      meta: {
        description: 'Review your cart'
      },
      on: {
        NEXT: {
          meta: {
            description: 'Move to shipping step'
          },
          target: "shipping",          
          actions: assign({}),
        },
      },
    },
    shipping: {
      meta: {
        description: 'Shipping address'
      },
      on: {
        UPDATE_ADDRESS: {
          actions: assign({
            shipping: (_, event) =>  event.address
          }),
          meta: {
            description: 'Provide shipping address'
          }
        },
        SELECT_METHOD: {
          actions: assign({
            shippingMethod: (_, event) => event.method 
          }),
          meta: {
            description: 'Select shipping method'
          }
        },
        USE_SAME_BILLING: {
          meta: {
            description: 'Use same billing address as shipping'
          },
          actions: assign({
            billing: (context) =>  context.shipping
          }),
        },
        NEXT: {
          target: "billing",
          meta: {
            description: 'Move to Billing address'
          }
        },
        PREV: {
          target: 'review',
          meta: {
            description: 'Back to Review cart'
          }
        }
      },
    },
    billing: {
      meta: {
        description: 'Billing address'
      },
      on: {
        ADD_BILLING_ADDRESS: {
          meta: {
            description: 'Enter billing address'
          },
          actions: assign({
            billing: (context, event) =>  ({
              ...context.billing,
              address: event.address
            })
          }),
        },
        ADD_EMAIL: {
          meta: {
            description: 'Enter billing email'
          },
          actions: assign({
            billing: (context, event) =>  ({
              ...context.billing,
              email: event.email
            })
          }),
        },
        ADD_PHONE: {
          meta: {
            description: 'Enter billing phone number'
          },
          actions: assign({
            billing: (context, event) =>  ({
              ...context.billing,
              phone: event.phone
            })
          }),
        },
        NEXT: {
          target: "payment",
          meta: {
            description: 'Move to Payment'
          }
        },
        PREV: {
          target: 'shipping',
          meta: {
            description: 'Back to Shipping address'
          }
        }
      }
    },
    payment: {
      meta: {
        description: 'Payment'
      },
      on: {
        SELECT_METHOD: {
          meta: {
            description: 'Select a payment method'
          },
          actions: assign({
            paymentMethod: (_, event) => event.paymentMethod
          })
        },
        AGREE_TO_TERM: {
          meta: {
            description: 'Confirm agree to terms & conditions'
          },
          actions: assign({
            agreeToTerms: (_, event) => event.agreeToTerms
          })
        },
        NEXT: {
          target: 'success',
          meta: {
            description: 'Place the order'
          },
          cond: {
            type: "isAgreeToTerm",
            meta: {
              description: 'Must agree to terms and conditions'
            }
          }
        },
        PREV: {
          target: 'billing',
          meta: {
            description: 'Select a payment method'
          }
        }
      }
    },
    success: {
      type: 'final',
      meta: {
        description: 'Order confirmed'
      }
    },
  },
  }, {
  guards: {
    isAgreeToTerm: (ctx) => ctx.agreeToTerms && !!ctx.paymentMethod,
  }
});
