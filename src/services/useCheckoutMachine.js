

import { interpret } from "xstate";
import { checkoutMachine } from "../machines/checkoutMachine.js";

import { useActor, useService } from '@xstate/vue'

const checkoutService = interpret(checkoutMachine).start()

export const useCheckoutMachine = () => {
    return useActor(checkoutService)
}